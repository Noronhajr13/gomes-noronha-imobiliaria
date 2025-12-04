/**
 * Serviço de API para comunicação com o CRM
 */

const CRM_API_URL = process.env.NEXT_PUBLIC_CRM_API_URL || 'http://localhost:3001/api'

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
  exclusive?: boolean
  condominiumFee?: number
  iptu?: number
  yearBuilt?: number
  createdAt?: string
  updatedAt?: string
  priceLabel?: string
}

export interface PropertyFilters {
  type?: string
  transactionType?: string
  minPrice?: number
  maxPrice?: number
  minArea?: number
  maxArea?: number
  bedrooms?: number
  neighborhood?: string
  city?: string
  featured?: boolean
  status?: string
  limit?: number
  offset?: number
}

export interface Lead {
  name: string
  email: string
  phone: string
  message?: string
  source?: string
  propertyId?: string
}

/**
 * Buscar imóveis da API do CRM
 */
export async function fetchProperties(filters?: PropertyFilters): Promise<Property[]> {
  try {
    const params = new URLSearchParams()
    
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          params.append(key, String(value))
        }
      })
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
    return data.properties || data || []
  } catch (error) {
    console.error('Erro ao buscar imóveis:', error)
    return []
  }
}

/**
 * Buscar um imóvel específico por ID
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

    return response.json()
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

/**
 * Criar um novo lead (contato/interesse)
 */
export async function createLead(lead: Lead): Promise<boolean> {
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
