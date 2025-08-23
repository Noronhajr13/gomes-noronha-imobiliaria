import { useState, useMemo } from 'react';
import { properties } from '@/data/MockData';
import { PropertyFiltersData } from '@/components/property/PropertyFilters';

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

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilters = () => {
    setFilters(initialFilters);
  };

  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      // Tipo de imóvel
      if (filters.tipo !== 'todos' && property.type !== filters.tipo) return false;
      
      // Tipo de negócio
      if (filters.negocio !== 'todos' && property.transactionType !== filters.negocio) return false;
      
      // Cidade
      if (filters.cidade && !property.city.toLowerCase().includes(filters.cidade.toLowerCase())) return false;
      
      // Bairro
      if (filters.bairro && !property.neighborhood.toLowerCase().includes(filters.bairro.toLowerCase())) return false;
      
      // Preço mínimo
      if (filters.precoMin && property.price < parseInt(filters.precoMin)) return false;
      
      // Preço máximo
      if (filters.precoMax && property.price > parseInt(filters.precoMax)) return false;
      
      // Quartos
      if (filters.quartos !== 'todos') {
        const quartos = parseInt(filters.quartos);
        if (quartos === 4) {
          // 4+ quartos
          if (property.bedrooms < 4) return false;
        } else {
          if (property.bedrooms !== quartos) return false;
        }
      }
      
      // Banheiros
      if (filters.banheiros !== 'todos') {
        const banheiros = parseInt(filters.banheiros);
        if (banheiros === 4) {
          // 4+ banheiros
          if (property.bathrooms < 4) return false;
        } else {
          if (property.bathrooms !== banheiros) return false;
        }
      }
      
      // Vagas
      if (filters.vagas !== 'todos') {
        const vagas = parseInt(filters.vagas);
        if (vagas === 3) {
          // 3+ vagas
          if (property.parking < 3) return false;
        } else {
          if (property.parking !== vagas) return false;
        }
      }
      
      // Área mínima
      if (filters.areaMin && property.area < parseInt(filters.areaMin)) return false;
      
      // Área máxima
      if (filters.areaMax && property.area > parseInt(filters.areaMax)) return false;
      
      return true;
    });
  }, [filters]);

  return {
    filters,
    filteredProperties,
    handleFilterChange,
    clearFilters
  };
};