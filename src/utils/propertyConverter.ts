/**
 * Funções utilitárias para conversão de Property
 *
 * Centraliza a lógica de conversão entre Property (API) e PropertyDisplay (UI)
 */

import { Property, formatPrice } from '@/services/api';
import { PropertyDisplay } from '@/types/property';

const PLACEHOLDER_IMAGE = '/images/placeholder-property.svg';

/**
 * Converte Property da API para PropertyDisplay (formato UI)
 */
export function toPropertyDisplay(property: Property): PropertyDisplay {
  return {
    id: typeof property.id === 'string' ? parseInt(property.id) || 0 : property.id,
    title: property.title,
    type: property.type,
    price: formatPrice(property.price) + (property.priceLabel || ''),
    area: `${property.area}m²`,
    bedrooms: property.bedrooms,
    bathrooms: property.bathrooms,
    parking: property.parking,
    location: `${property.neighborhood}, ${property.city}`,
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
