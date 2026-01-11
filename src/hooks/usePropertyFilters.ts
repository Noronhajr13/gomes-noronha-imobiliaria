"use client";

import { useState, useEffect, useCallback } from 'react';
import { PropertyFiltersData } from '@/components/site/property/PropertyFilters';
import { Property, fetchPropertiesPaginated, PropertyFilters as APIFilters, Pagination } from '@/services/api';
import { mapPropertyType, mapTransactionType } from '@/utils/propertyTypeMapper';

const initialFilters: PropertyFiltersData = {
  tipo: 'todos',
  negocio: 'todos',
  cidade: '',
  cidadeId: 'todos',
  bairro: '',
  bairroId: 'todos',
  precoMin: '',
  precoMax: '',
  quartos: 'todos',
  banheiros: 'todos',
  vagas: 'todos',
  areaMin: '',
  areaMax: ''
};

const defaultPagination: Pagination = {
  page: 1,
  limit: 12,
  total: 0,
  totalPages: 0
};

interface UsePropertyFiltersOptions {
  initialFiltersFromUrl?: Partial<PropertyFiltersData>;
}

export const usePropertyFilters = (options?: UsePropertyFiltersOptions) => {
  const [filters, setFilters] = useState<PropertyFiltersData>(() => ({
    ...initialFilters,
    ...options?.initialFiltersFromUrl
  }));
  const [properties, setProperties] = useState<Property[]>([]);
  const [pagination, setPagination] = useState<Pagination>(defaultPagination);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Buscar imóveis da API
  useEffect(() => {
    async function loadProperties() {
      try {
        setLoading(true);
        setError(null);

        // Converter filtros do formulário para filtros da API
        const apiFilters: APIFilters = {
          page: currentPage,
          limit: 12
        };

        if (filters.tipo !== 'todos') {
          apiFilters.type = mapPropertyType(filters.tipo);
        }

        if (filters.negocio !== 'todos') {
          apiFilters.transactionType = mapTransactionType(filters.negocio);
        }

        if (filters.precoMin) apiFilters.minPrice = parseInt(filters.precoMin);
        if (filters.precoMax) apiFilters.maxPrice = parseInt(filters.precoMax);

        // Quartos - enviado para API
        if (filters.quartos !== 'todos') {
          apiFilters.bedrooms = parseInt(filters.quartos);
        }

        // Banheiros - agora enviado para API
        if (filters.banheiros !== 'todos') {
          apiFilters.bathrooms = parseInt(filters.banheiros);
        }

        // Vagas - agora enviado para API
        if (filters.vagas !== 'todos') {
          apiFilters.parking = parseInt(filters.vagas);
        }

        // Área mínima e máxima - agora enviado para API
        if (filters.areaMin) apiFilters.minArea = parseInt(filters.areaMin);
        if (filters.areaMax) apiFilters.maxArea = parseInt(filters.areaMax);

        // Usar IDs para cidade e bairro (preferencial)
        if (filters.cidadeId && filters.cidadeId !== 'todos') {
          apiFilters.cityId = filters.cidadeId;
        } else if (filters.cidade) {
          apiFilters.city = filters.cidade;
        }

        if (filters.bairroId && filters.bairroId !== 'todos') {
          apiFilters.neighborhoodId = filters.bairroId;
        } else if (filters.bairro) {
          apiFilters.neighborhood = filters.bairro;
        }

        const { properties: data, pagination: paginationData } = await fetchPropertiesPaginated(apiFilters);
        setProperties(data);
        setPagination(paginationData);
      } catch (err) {
        console.error('Erro ao carregar imóveis:', err);
        setError('Erro ao carregar imóveis');
        setProperties([]);
        setPagination(defaultPagination);
      } finally {
        setLoading(false);
      }
    }

    loadProperties();
  }, [
    filters.tipo,
    filters.negocio,
    filters.precoMin,
    filters.precoMax,
    filters.quartos,
    filters.banheiros,
    filters.vagas,
    filters.areaMin,
    filters.areaMax,
    filters.cidadeId,
    filters.bairroId,
    filters.bairro,
    filters.cidade,
    currentPage
  ]);

  const handleFilterChange = useCallback((key: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
    // Reset para página 1 quando filtros mudam
    if (key !== 'page') {
      setCurrentPage(1);
    }
  }, []);

  const clearFilters = useCallback(() => {
    setFilters(initialFilters);
    setCurrentPage(1);
  }, []);

  const goToPage = useCallback((page: number) => {
    if (page >= 1 && page <= pagination.totalPages) {
      setCurrentPage(page);
    }
  }, [pagination.totalPages]);

  // Função para atualizar múltiplos filtros de uma vez (útil para URL params)
  const setFiltersFromUrl = useCallback((urlFilters: Partial<PropertyFiltersData>) => {
    setFilters(prev => ({
      ...prev,
      ...urlFilters
    }));
    setCurrentPage(1);
  }, []);

  return {
    filters,
    filteredProperties: properties, // Agora todos os filtros são aplicados na API
    handleFilterChange,
    clearFilters,
    setFiltersFromUrl,
    loading,
    error,
    // Paginação
    pagination,
    currentPage,
    goToPage,
    hasNextPage: currentPage < pagination.totalPages,
    hasPreviousPage: currentPage > 1,
    nextPage: () => goToPage(currentPage + 1),
    previousPage: () => goToPage(currentPage - 1),
  };
};
