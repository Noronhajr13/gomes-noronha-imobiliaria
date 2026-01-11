/**
 * Funções utilitárias para conversão de Property
 *
 * Centraliza a lógica de conversão entre:
 * - CRMProperty (dados brutos da API)
 * - Property (formato local do site)
 * - PropertyDisplay (formato para UI)
 */

import type { CRMProperty } from '@/types/crm';
import type { Property } from '@/services/api';
import type { PropertyDisplay } from '@/types/property';
import { normalizeImageUrl, formatPrice, formatLocation } from '@/services/api';

const PLACEHOLDER_IMAGE = '/images/placeholder-property.svg';

/**
 * Converte CRMProperty (dados brutos da API) para Property (formato local)
 */
export function convertCRMToProperty(crmProperty: CRMProperty): Property {
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
  };
}

/**
 * Converte Property da API para PropertyDisplay (formato UI)
 */
export function toPropertyDisplay(property: Property): PropertyDisplay {
  return {
    id: property.id,
    title: property.title,
    type: formatPropertyType(property.type),
    price: formatPrice(property.price) + (property.priceLabel || ''),
    area: property.area ? `${property.area}m²` : '-',
    bedrooms: property.bedrooms,
    bathrooms: property.bathrooms,
    parking: property.parking,
    location: formatLocation(property),
    images: property.images?.length ? property.images : [PLACEHOLDER_IMAGE],
    featured: property.featured,
    code: property.code,
  };
}

/**
 * Converte array de Property para array de PropertyDisplay
 */
export function toPropertyDisplayList(properties: Property[]): PropertyDisplay[] {
  return properties.map(toPropertyDisplay);
}

/**
 * Converte CRMProperty diretamente para PropertyDisplay (atalho)
 */
export function convertCRMToDisplay(crmProperty: CRMProperty): PropertyDisplay {
  const property = convertCRMToProperty(crmProperty);
  return toPropertyDisplay(property);
}

/**
 * Converte lista de CRMProperty para Property[]
 */
export function convertCRMListToProperties(crmProperties: CRMProperty[]): Property[] {
  return crmProperties.map(convertCRMToProperty);
}

/**
 * Converte lista de CRMProperty diretamente para PropertyDisplay[]
 */
export function convertCRMListToDisplay(crmProperties: CRMProperty[]): PropertyDisplay[] {
  return crmProperties.map(convertCRMToDisplay);
}

/**
 * Formata tipo de imóvel para exibição
 */
export function formatPropertyType(type: string): string {
  const typeMap: Record<string, string> = {
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
  return typeMap[type] || type;
}

/**
 * Formata finalidade para exibição
 */
export function formatPropertyPurpose(purpose: string): string {
  const purposeMap: Record<string, string> = {
    VENDA: 'Venda',
    ALUGUEL: 'Aluguel',
    VENDA_ALUGUEL: 'Venda ou Aluguel',
  };
  return purposeMap[purpose] || purpose;
}

/**
 * Formata status para exibição
 */
export function formatPropertyStatus(status: string): string {
  const statusMap: Record<string, string> = {
    DISPONIVEL: 'Disponível',
    VENDIDO: 'Vendido',
    ALUGADO: 'Alugado',
    RESERVADO: 'Reservado',
    INATIVO: 'Inativo',
  };
  return statusMap[status] || status;
}
