"use client";

import { useState, useMemo, useCallback } from 'react';
import { Property } from '@/data/MockData';
import { properties } from '@/data/MockData';

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
}

const usePropertySearch = (initialFilters: SearchFilters = {}): UsePropertySearchReturn => {
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);
  const [isLoading, setIsLoading] = useState(false);

  const filteredProperties = useMemo(() => {
    setIsLoading(true);
    
    let result = [...properties];

    // Filtro por texto/query
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

    // Filtro por tipo de imóvel
    if (filters.type && filters.type !== 'all') {
      result = result.filter(property => 
        property.type.toLowerCase() === filters.type!.toLowerCase()
      );
    }

    // Filtro por tipo de transação
    if (filters.transactionType && filters.transactionType !== 'all') {
      result = result.filter(property => 
        property.transactionType.toLowerCase().includes(filters.transactionType!.toLowerCase())
      );
    }

    // Filtro por faixa de preço
    if (filters.priceMin !== undefined) {
      result = result.filter(property => property.price >= filters.priceMin!);
    }
    if (filters.priceMax !== undefined) {
      result = result.filter(property => property.price <= filters.priceMax!);
    }

    // Filtro por quartos
    if (filters.bedrooms !== undefined && filters.bedrooms > 0) {
      result = result.filter(property => property.bedrooms >= filters.bedrooms!);
    }

    // Filtro por banheiros
    if (filters.bathrooms !== undefined && filters.bathrooms > 0) {
      result = result.filter(property => property.bathrooms >= filters.bathrooms!);
    }

    // Filtro por bairro
    if (filters.neighborhood && filters.neighborhood !== 'all') {
      result = result.filter(property => 
        property.neighborhood.toLowerCase().includes(filters.neighborhood!.toLowerCase())
      );
    }

    // Filtro por cidade
    if (filters.city && filters.city !== 'all') {
      result = result.filter(property => 
        property.city.toLowerCase().includes(filters.city!.toLowerCase())
      );
    }

    // Filtro por área mínima
    if (filters.area !== undefined && filters.area > 0) {
      result = result.filter(property => property.area >= filters.area!);
    }

    // Filtro por imóveis em destaque
    if (filters.featured) {
      result = result.filter(property => property.featured);
    }

    // Ordenação: Featured primeiro, depois por preço
    result.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return b.price - a.price; // Preço decrescente
    });

    setIsLoading(false);
    return result;
  }, [filters]);

  const resetFilters = useCallback(() => {
    setFilters({});
  }, []);

  const setFiltersCallback = useCallback((newFilters: SearchFilters) => {
    setFilters(newFilters);
  }, []);

  return {
    filteredProperties,
    filters,
    setFilters: setFiltersCallback,
    resetFilters,
    totalCount: filteredProperties.length,
    isLoading
  };
};

export default usePropertySearch;