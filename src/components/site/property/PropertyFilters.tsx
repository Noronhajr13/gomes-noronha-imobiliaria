"use client";

import React, { useState, useEffect } from 'react';
import { Icon } from '@/utils/iconMapper';
import { Button, Card } from '@/components/site/ui';
import { cn } from '@/utils/helpers';
import { getInputClass, getLabelClass } from '@/styles/theme';
import { usePropertyTypes } from '@/hooks/usePropertyTypes';
import { usePropertyPurposes } from '@/hooks/usePropertyPurposes';
import { useCities } from '@/hooks/useCities';
import { useNeighborhoods } from '@/hooks/useNeighborhoods';

export interface PropertyFiltersData {
  tipo: string;
  negocio: string;
  cidade: string;
  cidadeId: string;
  bairro: string;
  bairroId: string;
  precoMin: string;
  precoMax: string;
  quartos: string;
  banheiros: string;
  vagas: string;
  areaMin: string;
  areaMax: string;
}

interface PropertyFiltersProps {
  filters: PropertyFiltersData;
  onFilterChange: (key: string, value: string) => void;
  onClearFilters: () => void;
  resultsCount: number;
  className?: string;
}

const PropertyFilters: React.FC<PropertyFiltersProps> = ({
  filters,
  onFilterChange,
  onClearFilters,
  resultsCount,
  className
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Hooks para buscar dados da API
  const { propertyTypeOptions, isLoading: typesLoading } = usePropertyTypes();
  const { propertyPurposeOptions, isLoading: purposesLoading } = usePropertyPurposes();
  const { cities, isLoading: citiesLoading } = useCities();
  const { neighborhoods, isLoading: neighborhoodsLoading } = useNeighborhoods(filters.cidadeId || undefined);

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

  // Quando a cidade muda, limpar o bairro selecionado
  useEffect(() => {
    if (filters.cidadeId === '' || filters.cidadeId === 'todos') {
      onFilterChange('bairroId', 'todos');
      onFilterChange('bairro', '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.cidadeId]);

  // Handler para mudança de cidade
  const handleCityChange = (value: string) => {
    onFilterChange('cidadeId', value);
    // Encontrar o nome da cidade para manter compatibilidade
    const city = cities.find(c => c.id === value);
    onFilterChange('cidade', city?.name || '');
    // Limpar bairro quando cidade muda
    onFilterChange('bairroId', 'todos');
    onFilterChange('bairro', '');
  };

  // Handler para mudança de bairro
  const handleNeighborhoodChange = (value: string) => {
    onFilterChange('bairroId', value);
    // Encontrar o nome do bairro para manter compatibilidade
    const neighborhood = neighborhoods.find(n => n.id === value);
    onFilterChange('bairro', neighborhood?.name || '');
  };

  return (
    <Card variant="DEFAULT" className={cn("p-6 mb-8", className)}>
      <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Tipo de Negócio */}
        <div>
          <label className={getLabelClass()}>
            Tipos de Negócio
          </label>
          <select
            value={filters.negocio || 'todos'}
            onChange={(e) => onFilterChange('negocio', e.target.value)}
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
          <label className={getLabelClass()}>
            Tipos de Imóvel
          </label>
          <select
            value={filters.tipo || 'todos'}
            onChange={(e) => onFilterChange('tipo', e.target.value)}
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

        {/* Cidade - Dados dinâmicos do CRM */}
        <div>
          <label className={getLabelClass()}>
            Cidade
          </label>
          <select
            value={filters.cidadeId || 'todos'}
            onChange={(e) => handleCityChange(e.target.value)}
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

        {/* Bairro - Dados dinâmicos do CRM (depende da cidade) */}
        <div>
          <label className={getLabelClass()}>
            Bairros
          </label>
          <select
            value={filters.bairroId || 'todos'}
            onChange={(e) => handleNeighborhoodChange(e.target.value)}
            className={getInputClass('select')}
            disabled={neighborhoodsLoading || !filters.cidadeId || filters.cidadeId === 'todos'}
          >
            {neighborhoodsLoading ? (
              <option value="todos">Carregando...</option>
            ) : !filters.cidadeId || filters.cidadeId === 'todos' ? (
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

      {/* Filtros Expandidos */}
      {isExpanded && (
        <div className="grid grid-cols-1 gap-4 pt-4 mb-4 border-t border-gray-200 md:grid-cols-2 lg:grid-cols-4">
          {/* Preço Mínimo */}
          <div>
            <label className={getLabelClass()}>
              Preço Mínimo
            </label>
            <input
              type="number"
              placeholder="R$ 0"
              value={filters.precoMin}
              onChange={(e) => onFilterChange('precoMin', e.target.value)}
              className={getInputClass('DEFAULT')}
            />
          </div>

          {/* Preço Máximo */}
          <div>
            <label className={getLabelClass()}>
              Preço Máximo
            </label>
            <input
              type="number"
              placeholder="R$ 999.999"
              value={filters.precoMax}
              onChange={(e) => onFilterChange('precoMax', e.target.value)}
              className={getInputClass('DEFAULT')}
            />
          </div>

          {/* Quartos */}
          <div>
            <label className={getLabelClass()}>
              Quartos
            </label>
            <select
              value={filters.quartos}
              onChange={(e) => onFilterChange('quartos', e.target.value)}
              className={getInputClass('select')}
            >
              <option value="todos">Qualquer</option>
              <option value="1">1 quarto</option>
              <option value="2">2 quartos</option>
              <option value="3">3 quartos</option>
              <option value="4">4+ quartos</option>
            </select>
          </div>

          {/* Banheiros */}
          <div>
            <label className={getLabelClass()}>
              Banheiros
            </label>
            <select
              value={filters.banheiros}
              onChange={(e) => onFilterChange('banheiros', e.target.value)}
              className={getInputClass('select')}
            >
              <option value="todos">Qualquer</option>
              <option value="1">1 banheiro</option>
              <option value="2">2 banheiros</option>
              <option value="3">3 banheiros</option>
              <option value="4">4+ banheiros</option>
            </select>
          </div>

          {/* Vagas de Garagem */}
          <div>
            <label className={getLabelClass()}>
              Vagas
            </label>
            <select
              value={filters.vagas}
              onChange={(e) => onFilterChange('vagas', e.target.value)}
              className={getInputClass('select')}
            >
              <option value="todos">Qualquer</option>
              <option value="0">Sem vaga</option>
              <option value="1">1 vaga</option>
              <option value="2">2 vagas</option>
              <option value="3">3+ vagas</option>
            </select>
          </div>

          {/* Área Mínima */}
          <div>
            <label className={getLabelClass()}>
              Área Mínima (m²)
            </label>
            <input
              type="number"
              placeholder="0"
              value={filters.areaMin}
              onChange={(e) => onFilterChange('areaMin', e.target.value)}
              className={getInputClass('DEFAULT')}
            />
          </div>

          {/* Área Máxima */}
          <div>
            <label className={getLabelClass()}>
              Área Máxima (m²)
            </label>
            <input
              type="number"
              placeholder="999"
              value={filters.areaMax}
              onChange={(e) => onFilterChange('areaMax', e.target.value)}
              className={getInputClass('DEFAULT')}
            />
          </div>
        </div>
      )}

      {/* Botões de Ação */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center"
          >
            <Icon name="SlidersHorizontal" className="w-4 h-4 mr-2" />
            {isExpanded ? 'Menos filtros' : 'Mais filtros'}
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={onClearFilters}
            className="flex items-center"
          >
            <Icon name="RotateCcw" className="w-4 h-4 mr-2" />
            Limpar
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">
            {resultsCount} imóveis encontrados
          </span>
        </div>
      </div>
    </Card>
  );
};

export default PropertyFilters;
