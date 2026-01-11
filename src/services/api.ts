/**
 * Serviço de API para comunicação com o CRM
 */

import type {
  CRMProperty,
  City,
  Neighborhood,
  Amenity,
  Pagination,
  PropertiesResponse,
  CitiesResponse,
  NeighborhoodsResponse,
  AmenitiesResponse,
  CreateLeadData,
} from '@/types/crm';

const CRM_API_URL = process.env.NEXT_PUBLIC_CRM_API_URL || 'http://localhost:3001/api'
const CRM_BASE_URL = CRM_API_URL.replace('/api', '')

// ============================================
// TIPOS LOCAIS (compatibilidade com código existente)
// ============================================

/**
 * Property formatado para uso no site (compatibilidade)
 */
export interface Property {
  id: string | number
  code: string
  title: string
  description?: string | null
  type: string
  transactionType?: string
  status?: string
  price: number
  area: number
  bedrooms: number
  bathrooms: number
  suites?: number
  parking: number
  address?: string
  addressNumber?: string
  neighborhood: string
  city: string
  state?: string
  zipCode?: string
  latitude?: number
  longitude?: number
  images: string[]
  videos?: string[]
  virtualTour?: string
  amenities?: string[]
  featured: boolean
  new?: boolean
  exclusive?: boolean
  condominiumFee?: number
  iptu?: number
  yearBuilt?: number
  createdAt?: string
  updatedAt?: string
  priceLabel?: string
  // Campos adicionais do CRM
  cityId?: string
  neighborhoodId?: string
  user?: {
    id: string
    name: string
    phone?: string
    email?: string
  }
}

export interface PropertyFilters {
  type?: string
  transactionType?: string
  minPrice?: number
  maxPrice?: number
  minArea?: number
  maxArea?: number
  bedrooms?: number
  bathrooms?: number
  parking?: number
  neighborhood?: string
  neighborhoodId?: string
  city?: string
  cityId?: string
  featured?: boolean
  status?: string
  limit?: number
  offset?: number
  page?: number
}

export interface Lead {
  name: string
  email: string
  phone: string
  message?: string
  source?: string
  propertyId?: string
}

// ============================================
// FUNÇÕES AUXILIARES
// ============================================

/**
 * Normaliza URL de imagem (converte relativa para absoluta)
 */
export function normalizeImageUrl(url: string): string {
  if (!url) return '/images/placeholder-property.svg'
  if (url.startsWith('http')) return url
  if (url.includes('supabase.co')) return url
  return `${CRM_BASE_URL}${url}`
}

/**
 * Converte CRMProperty para Property (formato local)
 */
function convertCRMPropertyToLocal(crmProperty: CRMProperty): Property {
  return {
    id: crmProperty.id,
    code: crmProperty.code,
    title: crmProperty.title,
    description: crmProperty.description,
    type: crmProperty.type,
    transactionType: crmProperty.purpose,
    status: crmProperty.status,
    price: crmProperty.price,
    area: crmProperty.area || 0,
    bedrooms: crmProperty.bedrooms || 0,
    bathrooms: crmProperty.bathrooms || 0,
    suites: crmProperty.suites || 0,
    parking: crmProperty.parkingSpots || 0,
    address: crmProperty.address,
    addressNumber: crmProperty.addressNumber || undefined,
    neighborhood: crmProperty.neighborhoodRef?.name || '',
    neighborhoodId: crmProperty.neighborhoodId || undefined,
    city: crmProperty.cityRef?.name || '',
    cityId: crmProperty.cityId || undefined,
    state: crmProperty.cityRef?.state || 'MG',
    zipCode: crmProperty.zipCode || undefined,
    latitude: crmProperty.latitude || undefined,
    longitude: crmProperty.longitude || undefined,
    images: crmProperty.images?.map(normalizeImageUrl) || [],
    videos: crmProperty.videos || [],
    amenities: crmProperty.features || [],
    featured: crmProperty.featured,
    exclusive: crmProperty.exclusive,
    condominiumFee: crmProperty.condominiumFee || undefined,
    iptu: crmProperty.iptu || undefined,
    yearBuilt: crmProperty.yearBuilt || undefined,
    createdAt: crmProperty.createdAt,
    updatedAt: crmProperty.updatedAt,
    user: crmProperty.user,
  }
}

// ============================================
// FUNÇÕES DE BUSCA - IMÓVEIS
// ============================================

/**
 * Buscar imóveis da API do CRM
 */
export async function fetchProperties(filters?: PropertyFilters): Promise<Property[]> {
  try {
    const params = new URLSearchParams()

    if (filters) {
      // Mapear filtros para parâmetros da API
      if (filters.type) params.append('type', filters.type)
      if (filters.transactionType) params.append('purpose', filters.transactionType)
      if (filters.minPrice) params.append('minPrice', String(filters.minPrice))
      if (filters.maxPrice) params.append('maxPrice', String(filters.maxPrice))
      if (filters.minArea) params.append('minArea', String(filters.minArea))
      if (filters.maxArea) params.append('maxArea', String(filters.maxArea))
      if (filters.bedrooms) params.append('bedrooms', String(filters.bedrooms))
      if (filters.bathrooms) params.append('bathrooms', String(filters.bathrooms))
      if (filters.parking) params.append('parking', String(filters.parking))
      if (filters.cityId) params.append('cityId', filters.cityId)
      if (filters.neighborhoodId) params.append('neighborhoodId', filters.neighborhoodId)
      if (filters.city) params.append('city', filters.city)
      if (filters.neighborhood) params.append('neighborhood', filters.neighborhood)
      if (filters.featured !== undefined) params.append('featured', String(filters.featured))
      if (filters.limit) params.append('limit', String(filters.limit))
      if (filters.page) params.append('page', String(filters.page))
    }

    // Apenas imóveis disponíveis no site público
    if (!filters?.status) {
      params.append('status', 'DISPONIVEL')
    }

    const url = `${CRM_API_URL}/properties${params.toString() ? `?${params.toString()}` : ''}`

    const response = await fetch(url, {
      next: { revalidate: 60 } // Cache por 60 segundos
    })

    if (!response.ok) {
      throw new Error(`Erro ao buscar imóveis: ${response.status}`)
    }

    const data = await response.json()

    // A API retorna { properties: [...], pagination: {...} }
    const properties: CRMProperty[] = data.properties || data || []
    return properties.map(convertCRMPropertyToLocal)
  } catch (error) {
    console.error('Erro ao buscar imóveis:', error)
    return []
  }
}

/**
 * Buscar imóveis com paginação completa
 */
export async function fetchPropertiesPaginated(
  filters?: PropertyFilters
): Promise<{ properties: Property[]; pagination: Pagination }> {
  try {
    const params = new URLSearchParams()

    if (filters) {
      if (filters.type) params.append('type', filters.type)
      if (filters.transactionType) params.append('purpose', filters.transactionType)
      if (filters.minPrice) params.append('minPrice', String(filters.minPrice))
      if (filters.maxPrice) params.append('maxPrice', String(filters.maxPrice))
      if (filters.minArea) params.append('minArea', String(filters.minArea))
      if (filters.maxArea) params.append('maxArea', String(filters.maxArea))
      if (filters.bedrooms) params.append('bedrooms', String(filters.bedrooms))
      if (filters.bathrooms) params.append('bathrooms', String(filters.bathrooms))
      if (filters.parking) params.append('parking', String(filters.parking))
      if (filters.cityId) params.append('cityId', filters.cityId)
      if (filters.neighborhoodId) params.append('neighborhoodId', filters.neighborhoodId)
      if (filters.city) params.append('city', filters.city)
      if (filters.neighborhood) params.append('neighborhood', filters.neighborhood)
      if (filters.featured !== undefined) params.append('featured', String(filters.featured))
      if (filters.limit) params.append('limit', String(filters.limit))
      if (filters.page) params.append('page', String(filters.page))
    }

    if (!filters?.status) {
      params.append('status', 'DISPONIVEL')
    }

    const url = `${CRM_API_URL}/properties${params.toString() ? `?${params.toString()}` : ''}`

    const response = await fetch(url, {
      next: { revalidate: 60 }
    })

    if (!response.ok) {
      throw new Error(`Erro ao buscar imóveis: ${response.status}`)
    }

    const data: PropertiesResponse = await response.json()

    return {
      properties: (data.properties || []).map(convertCRMPropertyToLocal),
      pagination: data.pagination || {
        page: 1,
        limit: 12,
        total: 0,
        totalPages: 0
      }
    }
  } catch (error) {
    console.error('Erro ao buscar imóveis:', error)
    return {
      properties: [],
      pagination: { page: 1, limit: 12, total: 0, totalPages: 0 }
    }
  }
}

/**
 * Buscar um imóvel específico por ID ou código
 */
export async function fetchPropertyById(id: string): Promise<Property | null> {
  try {
    const response = await fetch(`${CRM_API_URL}/properties/${id}`, {
      next: { revalidate: 60 }
    })

    if (!response.ok) {
      if (response.status === 404) return null
      throw new Error(`Erro ao buscar imóvel: ${response.status}`)
    }

    const property: CRMProperty = await response.json()
    return convertCRMPropertyToLocal(property)
  } catch (error) {
    console.error('Erro ao buscar imóvel:', error)
    return null
  }
}

/**
 * Buscar imóveis em destaque
 */
export async function fetchFeaturedProperties(limit = 6): Promise<Property[]> {
  return fetchProperties({ featured: true, limit })
}

// ============================================
// FUNÇÕES DE BUSCA - TIPOS DE IMÓVEL E NEGÓCIO
// ============================================

/**
 * Buscar tipos de imóvel disponíveis
 */
export async function fetchPropertyTypes(): Promise<string[]> {
  try {
    const response = await fetch(`${CRM_API_URL}/property-types`, {
      next: { revalidate: 300 } // Cache por 5 minutos
    })

    if (!response.ok) {
      throw new Error(`Erro ao buscar tipos de imóvel: ${response.status}`)
    }

    const data = await response.json()
    return data.propertyTypes || []
  } catch (error) {
    console.error('Erro ao buscar tipos de imóvel:', error)
    return []
  }
}

/**
 * Buscar tipos de negócio (finalidades) disponíveis
 */
export async function fetchPropertyPurposes(): Promise<string[]> {
  try {
    const response = await fetch(`${CRM_API_URL}/property-purposes`, {
      next: { revalidate: 300 } // Cache por 5 minutos
    })

    if (!response.ok) {
      throw new Error(`Erro ao buscar tipos de negócio: ${response.status}`)
    }

    const data = await response.json()
    return data.propertyPurposes || []
  } catch (error) {
    console.error('Erro ao buscar tipos de negócio:', error)
    return []
  }
}

// ============================================
// FUNÇÕES DE BUSCA - CIDADES E BAIRROS
// ============================================

/**
 * Buscar todas as cidades
 */
export async function fetchCities(): Promise<City[]> {
  try {
    const response = await fetch(`${CRM_API_URL}/cities`, {
      next: { revalidate: 300 } // Cache por 5 minutos
    })

    if (!response.ok) {
      throw new Error(`Erro ao buscar cidades: ${response.status}`)
    }

    const data: CitiesResponse = await response.json()
    return data.cities || []
  } catch (error) {
    console.error('Erro ao buscar cidades:', error)
    return []
  }
}

/**
 * Buscar bairros, opcionalmente filtrados por cidade
 */
export async function fetchNeighborhoods(cityId?: string): Promise<Neighborhood[]> {
  try {
    const url = cityId
      ? `${CRM_API_URL}/neighborhoods?cityId=${cityId}`
      : `${CRM_API_URL}/neighborhoods`

    const response = await fetch(url, {
      next: { revalidate: 300 } // Cache por 5 minutos
    })

    if (!response.ok) {
      throw new Error(`Erro ao buscar bairros: ${response.status}`)
    }

    const data: NeighborhoodsResponse = await response.json()
    return data.neighborhoods || []
  } catch (error) {
    console.error('Erro ao buscar bairros:', error)
    return []
  }
}

/**
 * Buscar todas as comodidades
 */
export async function fetchAmenities(): Promise<Amenity[]> {
  try {
    const response = await fetch(`${CRM_API_URL}/amenities`, {
      next: { revalidate: 300 } // Cache por 5 minutos
    })

    if (!response.ok) {
      throw new Error(`Erro ao buscar comodidades: ${response.status}`)
    }

    const data: AmenitiesResponse = await response.json()
    return data.amenities || []
  } catch (error) {
    console.error('Erro ao buscar comodidades:', error)
    return []
  }
}

// ============================================
// FUNÇÕES DE CRIAÇÃO - LEADS
// ============================================

/**
 * Criar um novo lead (contato/interesse)
 */
export async function createLead(lead: Lead | CreateLeadData): Promise<boolean> {
  try {
    const response = await fetch(`${CRM_API_URL}/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...lead,
        source: lead.source || 'SITE'
      })
    })

    return response.ok
  } catch (error) {
    console.error('Erro ao criar lead:', error)
    return false
  }
}

// ============================================
// FUNÇÕES UTILITÁRIAS
// ============================================

/**
 * Formatar preço para exibição
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0
  }).format(price)
}

/**
 * Formatar área para exibição
 */
export function formatArea(area: number | null | undefined): string {
  if (!area) return '-'
  return `${area}m²`
}

/**
 * Gerar localização formatada
 */
export function formatLocation(property: Property): string {
  const neighborhood = property.neighborhood || ''
  const city = property.city || ''
  const state = property.state || ''

  if (neighborhood && city) {
    return `${neighborhood}, ${city}${state ? ` - ${state}` : ''}`
  }
  if (city) {
    return `${city}${state ? ` - ${state}` : ''}`
  }
  return property.address || ''
}

/**
 * Gerar URL do WhatsApp para contato sobre imóvel
 */
export function getPropertyWhatsAppUrl(property: Property, phone: string): string {
  const message = encodeURIComponent(
    `Olá! Tenho interesse no imóvel:\n\n` +
    `📍 ${property.code} - ${property.title}\n` +
    `💰 ${formatPrice(property.price)}\n` +
    `📐 ${property.area}m²\n` +
    `🛏️ ${property.bedrooms} quartos\n\n` +
    `Gostaria de mais informações.`
  )
  return `https://wa.me/55${phone.replace(/\D/g, '')}?text=${message}`
}

// Re-exportar tipos do CRM para conveniência
export type { City, Neighborhood, Amenity, Pagination } from '@/types/crm'
