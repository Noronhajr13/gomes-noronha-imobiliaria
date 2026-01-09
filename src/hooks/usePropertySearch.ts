"use client";

import { useState, useEffect, useCallback } from 'react';
import { Property, fetchProperties, PropertyFilters } from '@/services/api';
import { mapPropertyType, mapTransactionType } from '@/utils/propertyTypeMapper';

export interface SearchFilters {
  type?: string;
  transactionType?: string;
  priceMin?: number;
  priceMax?: number;
  bedrooms?: number;
  bathrooms?: number;
  neighborhood?: string;
  city?: string;
  area?: number;
  featured?: boolean;
  query?: string;
}

export interface UsePropertySearchReturn {
  filteredProperties: Property[];
  filters: SearchFilters;
  setFilters: (filters: SearchFilters) => void;
  resetFilters: () => void;
  totalCount: number;
  isLoading: boolean;
  error: string | null;
}

const usePropertySearch = (initialFilters: SearchFilters = {}): UsePropertySearchReturn => {
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Buscar imóveis da API quando filtros mudam
  useEffect(() => {
    async function loadProperties() {
      try {
        setIsLoading(true);
        setError(null);

        // Converter filtros do componente para filtros da API
        const apiFilters: PropertyFilters = {};

        if (filters.type && filters.type !== 'all') {
          apiFilters.type = mapPropertyType(filters.type);
        }

        if (filters.transactionType && filters.transactionType !== 'all') {
          apiFilters.transactionType = mapTransactionType(filters.transactionType);
        }

        if (filters.priceMin) apiFilters.minPrice = filters.priceMin;
        if (filters.priceMax) apiFilters.maxPrice = filters.priceMax;
        if (filters.bedrooms) apiFilters.bedrooms = filters.bedrooms;
        if (filters.neighborhood && filters.neighborhood !== 'all') apiFilters.neighborhood = filters.neighborhood;
        if (filters.city && filters.city !== 'all') apiFilters.city = filters.city;
        if (filters.featured) apiFilters.featured = filters.featured;

        const data = await fetchProperties(apiFilters);

        // Aplicar filtros locais que não são suportados pela API
        let result = data;

        // Filtro por texto/query (local)
        if (filters.query && filters.query.trim()) {
          const query = filters.query.toLowerCase().trim();
          result = result.filter(property =>
            property.title.toLowerCase().includes(query) ||
            property.neighborhood.toLowerCase().includes(query) ||
            property.city.toLowerCase().includes(query) ||
            property.type.toLowerCase().includes(query) ||
            property.code.toLowerCase().includes(query) ||
            (property.description && property.description.toLowerCase().includes(query))
          );
        }

        // Filtro por banheiros (local)
        if (filters.bathrooms !== undefined && filters.bathrooms > 0) {
          result = result.filter(property => property.bathrooms >= filters.bathrooms!);
        }

        // Filtro por área mínima (local)
        if (filters.area !== undefined && filters.area > 0) {
          result = result.filter(property => property.area >= filters.area!);
        }

        // Ordenação: Featured primeiro, depois por preço
        result.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.price - a.price; // Preço decrescente
        });

        setProperties(result);
      } catch (err) {
        console.error('Erro ao buscar imóveis:', err);
        setError('Erro ao carregar imóveis');
        setProperties([]);
      } finally {
        setIsLoading(false);
      }
    }

    loadProperties();
  }, [filters]);

  const resetFilters = useCallback(() => {
    setFilters({});
  }, []);

  const setFiltersCallback = useCallback((newFilters: SearchFilters) => {
    setFilters(newFilters);
  }, []);

  return {
    filteredProperties: properties,
    filters,
    setFilters: setFiltersCallback,
    resetFilters,
    totalCount: properties.length,
    isLoading,
    error
  };
};

export default usePropertySearch;