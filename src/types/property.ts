/**
 * Tipos unificados para Property
 *
 * Property: tipo completo vindo da API (dados brutos)
 * PropertyDisplay: tipo para exibição em componentes UI (valores formatados)
 */

// Re-exportar Property de api.ts como fonte única de verdade
export type { Property } from '@/services/api';

/**
 * Tipo para componentes UI (valores já formatados para exibição)
 * Usado em PropertyCard, PropertyGrid, etc.
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
