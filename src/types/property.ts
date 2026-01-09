/**
 * Tipos de Property - Guia de Uso
 * ================================
 *
 * Este projeto usa 3 tipos de Property para diferentes contextos:
 *
 * 1. Property (de @/services/api)
 *    - Dados brutos vindos da API/CRM
 *    - Usado em: hooks de fetch, integração com backend
 *    - Campos: id, code, title, price (number), area (number), etc.
 *
 * 2. PropertyDisplay (definido aqui)
 *    - Dados formatados para UI
 *    - Usado em: PropertyCard, PropertyGrid
 *    - Campos: price (string "R$ X"), area (string "Xm²"), location (combinado)
 *
 * 3. Property (de @/data/MockData - interno)
 *    - Dados mockados para desenvolvimento
 *    - Usado em: PropertySearchResults (recebe do mock, converte para Display)
 *
 * Fluxo de dados:
 *    API/Mock → Property (raw) → toPropertyDisplay() → PropertyDisplay (UI)
 */

// Re-exportar Property de api.ts como tipo principal para dados da API
export type { Property } from '@/services/api';

/**
 * Tipo para componentes UI (valores já formatados para exibição)
 * Usado em: PropertyCard, PropertyGrid
 *
 * @example
 * const display: PropertyDisplay = {
 *   id: 1,
 *   title: "Apartamento Centro",
 *   price: "R$ 350.000",  // formatado
 *   area: "85m²",         // com unidade
 *   location: "Centro, Juiz de Fora"  // combinado
 * };
 */
export interface PropertyDisplay {
  id: number;
  title: string;
  type: string;
  price: string;        // formatado: "R$ 100.000"
  area: string;         // com unidade: "100m²"
  bedrooms: number;
  bathrooms: number;
  parking: number;
  location: string;     // combinado: "Centro, Juiz de Fora"
  images: string[];
  featured: boolean;
  code: string;
}

/**
 * Converte dados brutos de Property para PropertyDisplay (UI)
 * Use esta função ao passar dados da API para componentes de UI
 */
export function toPropertyDisplay(
  property: {
    id: number;
    code: string;
    title: string;
    type: string;
    price: number;
    priceLabel?: string;
    area: number;
    bedrooms: number;
    bathrooms: number;
    parking: number;
    neighborhood: string;
    city: string;
    images: string[];
    featured: boolean;
  },
  formatPrice: (price: number, label?: string) => string
): PropertyDisplay {
  return {
    id: property.id,
    title: property.title,
    type: property.type,
    price: formatPrice(property.price, property.priceLabel),
    area: `${property.area}m²`,
    bedrooms: property.bedrooms,
    bathrooms: property.bathrooms,
    parking: property.parking,
    location: `${property.neighborhood}, ${property.city}`,
    images: property.images,
    featured: property.featured,
    code: property.code
  };
}
