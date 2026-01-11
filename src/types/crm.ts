/**
 * Tipos TypeScript para integração com o CRM
 * Baseado na documentação da API em /docs
 */

// ============================================
// ENUMS - Valores válidos para campos
// ============================================

export const PropertyType = {
  CASA: 'CASA',
  APARTAMENTO: 'APARTAMENTO',
  TERRENO: 'TERRENO',
  COMERCIAL: 'COMERCIAL',
  RURAL: 'RURAL',
  COBERTURA: 'COBERTURA',
  KITNET: 'KITNET',
  SOBRADO: 'SOBRADO',
  SALA_COMERCIAL: 'SALA_COMERCIAL',
  LOJA: 'LOJA',
  GALPAO: 'GALPAO',
  SITIO: 'SITIO',
  FAZENDA: 'FAZENDA',
  FLAT: 'FLAT',
} as const;

export type PropertyType = typeof PropertyType[keyof typeof PropertyType];

export const PropertyStatus = {
  DISPONIVEL: 'DISPONIVEL',
  VENDIDO: 'VENDIDO',
  ALUGADO: 'ALUGADO',
  RESERVADO: 'RESERVADO',
  INATIVO: 'INATIVO',
} as const;

export type PropertyStatus = typeof PropertyStatus[keyof typeof PropertyStatus];

export const PropertyPurpose = {
  VENDA: 'VENDA',
  ALUGUEL: 'ALUGUEL',
  VENDA_ALUGUEL: 'VENDA_ALUGUEL',
} as const;

export type PropertyPurpose = typeof PropertyPurpose[keyof typeof PropertyPurpose];

export const LeadSource = {
  SITE: 'SITE',
  TELEFONE: 'TELEFONE',
  INDICACAO: 'INDICACAO',
  FACEBOOK: 'FACEBOOK',
  INSTAGRAM: 'INSTAGRAM',
  WHATSAPP: 'WHATSAPP',
  PORTAIS: 'PORTAIS',
  PORTAL_ZAP: 'PORTAL_ZAP',
  PORTAL_VIVAREAL: 'PORTAL_VIVAREAL',
  PORTAL_OLX: 'PORTAL_OLX',
  REDES_SOCIAIS: 'REDES_SOCIAIS',
  VISITA_ESCRITORIO: 'VISITA_ESCRITORIO',
  OUTRO: 'OUTRO',
} as const;

export type LeadSource = typeof LeadSource[keyof typeof LeadSource];

export const LeadStatus = {
  NOVO: 'NOVO',
  CONTATO_REALIZADO: 'CONTATO_REALIZADO',
  QUALIFICADO: 'QUALIFICADO',
  VISITA_AGENDADA: 'VISITA_AGENDADA',
  PROPOSTA_ENVIADA: 'PROPOSTA_ENVIADA',
  NEGOCIACAO: 'NEGOCIACAO',
  FECHADO_GANHO: 'FECHADO_GANHO',
  FECHADO_PERDIDO: 'FECHADO_PERDIDO',
} as const;

export type LeadStatus = typeof LeadStatus[keyof typeof LeadStatus];

// ============================================
// INTERFACES DE RESPOSTA DA API
// ============================================

/**
 * Usuário/Corretor (dados públicos)
 */
export interface User {
  id: string;
  name: string;
  phone?: string;
  email?: string;
}

/**
 * Cidade
 */
export interface City {
  id: string;
  name: string;
  state: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  _count?: {
    neighborhoods: number;
  };
  neighborhoods?: Neighborhood[];
}

/**
 * Bairro
 */
export interface Neighborhood {
  id: string;
  name: string;
  cityId: string;
  active: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
  city?: {
    id: string;
    name: string;
    state: string;
  };
}

/**
 * Comodidade
 */
export interface Amenity {
  id: string;
  name: string;
  active: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

/**
 * Imóvel - Resposta da API do CRM
 */
export interface CRMProperty {
  id: string;
  code: string;
  title: string;
  description?: string | null;
  type: PropertyType;
  status: PropertyStatus;
  purpose: PropertyPurpose;
  price: number;
  area?: number | null;
  landArea?: number | null;
  bedrooms?: number | null;
  bathrooms?: number | null;
  parkingSpots?: number | null;
  suites?: number | null;
  address: string;
  addressNumber?: string | null;
  complement?: string | null;
  zipCode?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  images: string[];
  videos: string[];
  features: string[];
  condominiumFee?: number | null;
  iptu?: number | null;
  yearBuilt?: number | null;
  featured: boolean;
  exclusive: boolean;
  user?: User;
  userId?: string;
  cityId?: string | null;
  cityRef?: City | null;
  neighborhoodId?: string | null;
  neighborhoodRef?: Neighborhood | null;
  createdAt: string;
  updatedAt: string;
}

/**
 * Lead - Resposta da API
 */
export interface Lead {
  id: string;
  name: string;
  email?: string | null;
  phone: string;
  cpf?: string | null;
  message?: string | null;
  source: LeadSource;
  status: LeadStatus;
  budget?: number | null;
  interestType?: string | null;
  preferredNeighborhoods: string[];
  score: number;
  contactedAt?: string | null;
  propertyId?: string | null;
  property?: CRMProperty | null;
  userId?: string | null;
  user?: User | null;
  createdAt: string;
  updatedAt: string;
}

/**
 * Paginação
 */
export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

/**
 * Resposta de listagem de imóveis
 */
export interface PropertiesResponse {
  properties: CRMProperty[];
  pagination: Pagination;
}

/**
 * Resposta de listagem de cidades
 */
export interface CitiesResponse {
  cities: City[];
}

/**
 * Resposta de listagem de bairros
 */
export interface NeighborhoodsResponse {
  neighborhoods: Neighborhood[];
}

/**
 * Resposta de listagem de comodidades
 */
export interface AmenitiesResponse {
  amenities: Amenity[];
}

/**
 * Resposta de erro
 */
export interface ApiError {
  error: string;
}

// ============================================
// INTERFACES DE REQUISIÇÃO
// ============================================

/**
 * Filtros para busca de imóveis na API
 */
export interface CRMPropertyFilters {
  page?: number;
  limit?: number;
  search?: string;
  type?: PropertyType;
  purpose?: PropertyPurpose;
  transactionType?: PropertyPurpose; // alias para purpose
  status?: PropertyStatus;
  cityId?: string;
  neighborhoodId?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  featured?: boolean;
  exclusive?: boolean;
}

/**
 * Dados para criar um lead
 */
export interface CreateLeadData {
  name: string;
  email?: string;
  phone: string;
  message?: string;
  source?: LeadSource;
  propertyId?: string;
  budget?: number;
  interestType?: string;
  preferredNeighborhoods?: string[];
}

// ============================================
// HELPERS - Labels amigáveis
// ============================================

/**
 * Labels amigáveis para tipos de imóvel
 */
export const PropertyTypeLabels: Record<PropertyType, string> = {
  CASA: 'Casa',
  APARTAMENTO: 'Apartamento',
  TERRENO: 'Terreno',
  COMERCIAL: 'Comercial',
  RURAL: 'Rural',
  COBERTURA: 'Cobertura',
  KITNET: 'Kitnet',
  SOBRADO: 'Sobrado',
  SALA_COMERCIAL: 'Sala Comercial',
  LOJA: 'Loja',
  GALPAO: 'Galpão',
  SITIO: 'Sítio',
  FAZENDA: 'Fazenda',
  FLAT: 'Flat',
};

/**
 * Labels amigáveis para finalidade
 */
export const PropertyPurposeLabels: Record<PropertyPurpose, string> = {
  VENDA: 'Venda',
  ALUGUEL: 'Aluguel',
  VENDA_ALUGUEL: 'Venda ou Aluguel',
};

/**
 * Labels amigáveis para status
 */
export const PropertyStatusLabels: Record<PropertyStatus, string> = {
  DISPONIVEL: 'Disponível',
  VENDIDO: 'Vendido',
  ALUGADO: 'Alugado',
  RESERVADO: 'Reservado',
  INATIVO: 'Inativo',
};

/**
 * Labels amigáveis para origem do lead
 */
export const LeadSourceLabels: Record<LeadSource, string> = {
  SITE: 'Site',
  TELEFONE: 'Telefone',
  INDICACAO: 'Indicação',
  FACEBOOK: 'Facebook',
  INSTAGRAM: 'Instagram',
  WHATSAPP: 'WhatsApp',
  PORTAIS: 'Portais',
  PORTAL_ZAP: 'ZAP Imóveis',
  PORTAL_VIVAREAL: 'Viva Real',
  PORTAL_OLX: 'OLX',
  REDES_SOCIAIS: 'Redes Sociais',
  VISITA_ESCRITORIO: 'Visita ao Escritório',
  OUTRO: 'Outro',
};

// ============================================
// FUNÇÕES AUXILIARES
// ============================================

/**
 * Obtém label amigável do tipo de imóvel
 */
export function getPropertyTypeLabel(type: PropertyType): string {
  return PropertyTypeLabels[type] || type;
}

/**
 * Obtém label amigável da finalidade
 */
export function getPropertyPurposeLabel(purpose: PropertyPurpose): string {
  return PropertyPurposeLabels[purpose] || purpose;
}

/**
 * Obtém label amigável do status
 */
export function getPropertyStatusLabel(status: PropertyStatus): string {
  return PropertyStatusLabels[status] || status;
}

/**
 * Type guard para verificar se resposta é erro
 */
export function isApiError(response: unknown): response is ApiError {
  return typeof response === 'object' && response !== null && 'error' in response;
}

/**
 * Lista de tipos de imóvel para selects
 */
export function getPropertyTypeOptions(): { value: PropertyType; label: string }[] {
  return Object.entries(PropertyTypeLabels).map(([value, label]) => ({
    value: value as PropertyType,
    label,
  }));
}

/**
 * Lista de finalidades para selects
 */
export function getPropertyPurposeOptions(): { value: PropertyPurpose; label: string }[] {
  return Object.entries(PropertyPurposeLabels).map(([value, label]) => ({
    value: value as PropertyPurpose,
    label,
  }));
}
