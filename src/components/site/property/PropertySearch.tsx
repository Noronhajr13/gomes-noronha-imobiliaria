"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Icon } from '@/utils/iconMapper';
import { Button, Card, Text } from '@/components/site/ui';
import { cn } from '@/utils/helpers';
import { getInputClass, getLabelClass } from '@/styles/theme';
import { usePropertyTypes } from '@/hooks/usePropertyTypes';
import { usePropertyPurposes } from '@/hooks/usePropertyPurposes';
import { useCities } from '@/hooks/useCities';
import { useNeighborhoods } from '@/hooks/useNeighborhoods';

export interface SearchFilters {
  tipo: string;
  negocio: string;
  cidadeId: string;
  bairroId: string;
}

interface PropertySearchProps {
  onSearch?: (filters: SearchFilters) => void;
  initialFilters?: Partial<SearchFilters>;
}

const PropertySearch: React.FC<PropertySearchProps> = ({
  onSearch,
  initialFilters = {}
}) => {
  const router = useRouter();

  const [searchData, setSearchData] = useState<SearchFilters>({
    tipo: 'todos',
    negocio: 'todos',
    cidadeId: 'todos',
    bairroId: 'todos',
    ...initialFilters
  });

  // Hooks para buscar dados da API
  const { propertyTypeOptions, isLoading: typesLoading } = usePropertyTypes();
  const { propertyPurposeOptions, isLoading: purposesLoading } = usePropertyPurposes();
  const { cities, isLoading: citiesLoading } = useCities();
  const { neighborhoods, isLoading: neighborhoodsLoading } = useNeighborhoods(
    searchData.cidadeId !== 'todos' ? searchData.cidadeId : undefined
  );

  // Converter cidades para formato de select
  const cityOptions = [
    { value: 'todos', label: 'Todas as cidades' },
    ...cities.map(city => ({
      value: city.id,
      label: `${city.name} - ${city.state}`
    }))
  ];

  // Converter bairros para formato de select
  const neighborhoodOptions = [
    { value: 'todos', label: 'Todos os bairros' },
    ...neighborhoods.map(neighborhood => ({
      value: neighborhood.id,
      label: neighborhood.name
    }))
  ];

  // Limpar bairro quando a cidade muda
  useEffect(() => {
    if (searchData.cidadeId === 'todos') {
      setSearchData(prev => ({ ...prev, bairroId: 'todos' }));
    }
  }, [searchData.cidadeId]);

  const handleFilterChange = (field: keyof SearchFilters, value: string) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value
    }));

    // Se mudou a cidade, limpar o bairro
    if (field === 'cidadeId') {
      setSearchData(prev => ({ ...prev, bairroId: 'todos' }));
    }
  };

  const handleSearch = () => {
    // Se onSearch foi passado, chamar callback
    if (onSearch) {
      onSearch(searchData);
    }

    // Construir URL com filtros
    const params = new URLSearchParams();

    if (searchData.tipo && searchData.tipo !== 'todos') {
      params.set('tipo', searchData.tipo);
    }
    if (searchData.negocio && searchData.negocio !== 'todos') {
      params.set('negocio', searchData.negocio);
    }
    if (searchData.cidadeId && searchData.cidadeId !== 'todos') {
      params.set('cidadeId', searchData.cidadeId);
    }
    if (searchData.bairroId && searchData.bairroId !== 'todos') {
      params.set('bairroId', searchData.bairroId);
    }

    // Redirecionar para página de imóveis com filtros
    const queryString = params.toString();
    router.push(`/imoveis${queryString ? `?${queryString}` : ''}`);
  };

  return (
    <Card variant="DEFAULT" className={cn("p-6 mb-8")}>
      <Text as="h3" variant="primary" className="mb-6 text-2xl font-bold text-center">
        Busque seu Imóvel
      </Text>
      <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Tipo de Negócio */}
        <div>
          <label htmlFor="search-negocio" className={getLabelClass()}>
            Tipos de Negócio
          </label>
          <select
            id="search-negocio"
            value={searchData.negocio}
            onChange={(e) => handleFilterChange('negocio', e.target.value)}
            className={getInputClass('select')}
            disabled={purposesLoading}
          >
            {purposesLoading ? (
              <option value="todos">Carregando...</option>
            ) : (
              propertyPurposeOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))
            )}
          </select>
        </div>

        {/* Tipo de Imóvel */}
        <div>
          <label htmlFor="search-tipo" className={getLabelClass()}>
            Tipos de Imóvel
          </label>
          <select
            id="search-tipo"
            value={searchData.tipo}
            onChange={(e) => handleFilterChange('tipo', e.target.value)}
            className={getInputClass('select')}
            disabled={typesLoading}
          >
            {typesLoading ? (
              <option value="todos">Carregando...</option>
            ) : (
              propertyTypeOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))
            )}
          </select>
        </div>

        {/* Cidade */}
        <div>
          <label htmlFor="search-cidade" className={getLabelClass()}>
            Cidade
          </label>
          <select
            id="search-cidade"
            value={searchData.cidadeId}
            onChange={(e) => handleFilterChange('cidadeId', e.target.value)}
            className={getInputClass('select')}
            disabled={citiesLoading}
          >
            {citiesLoading ? (
              <option value="todos">Carregando...</option>
            ) : (
              cityOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))
            )}
          </select>
        </div>

        {/* Bairro */}
        <div>
          <label htmlFor="search-bairro" className={getLabelClass()}>
            Bairros
          </label>
          <select
            id="search-bairro"
            value={searchData.bairroId}
            onChange={(e) => handleFilterChange('bairroId', e.target.value)}
            className={getInputClass('select')}
            disabled={neighborhoodsLoading || searchData.cidadeId === 'todos'}
          >
            {neighborhoodsLoading ? (
              <option value="todos">Carregando...</option>
            ) : searchData.cidadeId === 'todos' ? (
              <option value="todos">Selecione uma cidade</option>
            ) : (
              neighborhoodOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))
            )}
          </select>
        </div>
      </div>

      <Button
        variant="primary"
        size="lg"
        onClick={handleSearch}
        className="flex items-center justify-center w-full gap-3"
      >
        <Icon name="Building" className="w-6 h-6" />
        Buscar Imóveis
        <Icon name="ArrowRight" className="w-6 h-6" />
      </Button>
    </Card>
  );
};

export default PropertySearch;
