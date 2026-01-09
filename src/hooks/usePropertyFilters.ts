import { useState, useEffect, useMemo, useCallback } from 'react';
import { PropertyFiltersData } from '@/components/site/property/PropertyFilters';
import { Property, fetchProperties, PropertyFilters as APIFilters } from '@/services/api';
import { mapPropertyType, mapTransactionType } from '@/utils/propertyTypeMapper';

const initialFilters: PropertyFiltersData = {
  tipo: 'todos',
  negocio: 'todos',
  cidade: '',
  bairro: '',
  precoMin: '',
  precoMax: '',
  quartos: 'todos',
  banheiros: 'todos',
  vagas: 'todos',
  areaMin: '',
  areaMax: ''
};

export const usePropertyFilters = () => {
  const [filters, setFilters] = useState<PropertyFiltersData>(initialFilters);
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Buscar imóveis da API
  // NOTA: O dependency array contém apenas filtros enviados para a API.
  // Filtros locais (banheiros, vagas, areaMin, areaMax) são aplicados via useMemo
  // em filteredProperties, não requerem nova chamada à API.
  useEffect(() => {
    async function loadProperties() {
      try {
        setLoading(true);
        setError(null);
        
        // Converter filtros do formulário para filtros da API
        const apiFilters: APIFilters = {};
        
        if (filters.tipo !== 'todos') {
          apiFilters.type = mapPropertyType(filters.tipo);
        }

        if (filters.negocio !== 'todos') {
          apiFilters.transactionType = mapTransactionType(filters.negocio);
        }
        
        if (filters.precoMin) apiFilters.minPrice = parseInt(filters.precoMin);
        if (filters.precoMax) apiFilters.maxPrice = parseInt(filters.precoMax);
        if (filters.quartos !== 'todos') apiFilters.bedrooms = parseInt(filters.quartos);
        if (filters.bairro) apiFilters.neighborhood = filters.bairro;
        if (filters.cidade) apiFilters.city = filters.cidade;
        
        const data = await fetchProperties(apiFilters);
        setProperties(data);
      } catch (err) {
        console.error('Erro ao carregar imóveis:', err);
        setError('Erro ao carregar imóveis');
        setProperties([]);
      } finally {
        setLoading(false);
      }
    }
    
    loadProperties();
  }, [filters.tipo, filters.negocio, filters.precoMin, filters.precoMax, filters.quartos, filters.bairro, filters.cidade]);

  const handleFilterChange = useCallback((key: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters(initialFilters);
  }, []);

  // Aplicar filtros locais adicionais (que não são suportados pela API)
  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      // Banheiros (filtro local)
      if (filters.banheiros !== 'todos') {
        const banheiros = parseInt(filters.banheiros);
        if (banheiros === 4) {
          if (property.bathrooms < 4) return false;
        } else {
          if (property.bathrooms !== banheiros) return false;
        }
      }
      
      // Vagas (filtro local)
      if (filters.vagas !== 'todos') {
        const vagas = parseInt(filters.vagas);
        if (vagas === 3) {
          if (property.parking < 3) return false;
        } else {
          if (property.parking !== vagas) return false;
        }
      }
      
      // Área mínima (filtro local)
      if (filters.areaMin && property.area < parseInt(filters.areaMin)) return false;
      
      // Área máxima (filtro local)
      if (filters.areaMax && property.area > parseInt(filters.areaMax)) return false;
      
      return true;
    });
  }, [properties, filters.banheiros, filters.vagas, filters.areaMin, filters.areaMax]);

  return {
    filters,
    filteredProperties,
    handleFilterChange,
    clearFilters,
    loading,
    error
  };
};