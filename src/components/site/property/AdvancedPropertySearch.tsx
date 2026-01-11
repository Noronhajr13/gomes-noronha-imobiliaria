"use client";

import React, { useState, useCallback, useMemo } from 'react';
import { Icon } from '@/utils/iconMapper';
import { cn } from '@/utils/helpers';
import { getButtonClass } from '@/styles/theme';
import { priceRanges } from '@/data/MockData';
import { SearchFilters } from '@/hooks/usePropertySearch';
import { usePropertyTypes } from '@/hooks/usePropertyTypes';
import { useNeighborhoods, neighborhoodsToSelectOptions } from '@/hooks/useNeighborhoods';

interface AdvancedPropertySearchProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  onReset: () => void;
  className?: string;
}

const AdvancedPropertySearch: React.FC<AdvancedPropertySearchProps> = React.memo(({
  filters,
  onFiltersChange,
  onReset,
  className
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { propertyTypeOptions } = usePropertyTypes();
  const { neighborhoods } = useNeighborhoods();
  const neighborhoodOptions = neighborhoodsToSelectOptions(neighborhoods);

  const updateFilter = useCallback((key: keyof SearchFilters, value: string | number | boolean | null | undefined) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  }, [filters, onFiltersChange]);

  const activeFiltersCount = useMemo(() => 
    Object.values(filters).filter(value => 
      value !== undefined && value !== '' && value !== 'all'
    ).length,
    [filters]
  );

  return (
    <div className={cn("bg-white rounded-2xl shadow-lg border border-gray-100 p-6", className)}>
      <div className="flex flex-col gap-4 mb-6 lg:flex-row">
        <div className="relative flex-1">
          <Icon name="Search" className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
          <input
            type="text"
            placeholder="Buscar por bairro, tipo, código do imóvel..."
            value={filters.query || ''}
            onChange={(e) => updateFilter('query', e.target.value)}
            className="w-full py-3 pl-10 pr-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            getButtonClass('outline', 'md'),
            "relative row-auto",
            isExpanded && "bg-black text-white"
          )}
        >
          <Icon name="SlidersHorizontal" className="w-5 h-5 mr-2" />
          Filtros
          {activeFiltersCount > 0 && (
            <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
              {activeFiltersCount}
            </span>
          )}
        </button>
      </div>

      {/* Filtros avançados */}
      {isExpanded && (
        <div className="pt-6 border-t border-gray-100">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            
            {/* Tipo de imóvel */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Tipo de Imóvel
              </label>
              <select
                value={filters.type || 'todos'}
                onChange={(e) => updateFilter('type', e.target.value === 'todos' ? undefined : e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
              >
                {propertyTypeOptions.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Tipo de transação */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Tipo de Transação
              </label>
              <select
                value={filters.transactionType || 'all'}
                onChange={(e) => updateFilter('transactionType', e.target.value === 'all' ? undefined : e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="all">Venda e Aluguel</option>
                <option value="venda">Venda</option>
                <option value="aluguel">Aluguel</option>
              </select>
            </div>

            {/* Bairro */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Bairro
              </label>
              <select
                value={filters.neighborhood || 'all'}
                onChange={(e) => updateFilter('neighborhood', e.target.value === 'all' ? undefined : e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="all">Todos os bairros</option>
                {neighborhoodOptions.map((neighborhood) => (
                  <option key={neighborhood.value} value={neighborhood.label}>
                    {neighborhood.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Faixa de preço */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Faixa de Preço
              </label>
              <select
                onChange={(e) => {
                  const range = priceRanges.find(r => r.value === e.target.value);
                  if (range) {
                    updateFilter('priceMin', range.min);
                    updateFilter('priceMax', range.max);
                  } else {
                    updateFilter('priceMin', undefined);
                    updateFilter('priceMax', undefined);
                  }
                }}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="">Qualquer preço</option>
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Quartos */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Quartos (mínimo)
              </label>
              <select
                value={filters.bedrooms || ''}
                onChange={(e) => updateFilter('bedrooms', e.target.value ? parseInt(e.target.value) : undefined)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="">Qualquer quantidade</option>
                <option value="1">1+ quartos</option>
                <option value="2">2+ quartos</option>
                <option value="3">3+ quartos</option>
                <option value="4">4+ quartos</option>
              </select>
            </div>

            {/* Banheiros */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Banheiros (mínimo)
              </label>
              <select
                value={filters.bathrooms || ''}
                onChange={(e) => updateFilter('bathrooms', e.target.value ? parseInt(e.target.value) : undefined)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="">Qualquer quantidade</option>
                <option value="1">1+ banheiros</option>
                <option value="2">2+ banheiros</option>
                <option value="3">3+ banheiros</option>
                <option value="4">4+ banheiros</option>
              </select>
            </div>
          </div>

          {/* Área mínima */}
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Área Mínima (m²)
            </label>
            <input
              type="number"
              placeholder="Ex: 100"
              value={filters.area || ''}
              onChange={(e) => updateFilter('area', e.target.value ? parseInt(e.target.value) : undefined)}
              className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent lg:w-1/3"
            />
          </div>

          {/* Checkboxes */}
          <div className="flex items-center mt-4 space-x-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.featured || false}
                onChange={(e) => updateFilter('featured', e.target.checked || undefined)}
                className="w-4 h-4 mr-2 text-black border-gray-300 rounded focus:ring-black"
              />
              <span className="text-sm text-gray-700">Apenas imóveis em destaque</span>
            </label>
          </div>

          {/* Botões de ação */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={onReset}
              className={getButtonClass('secondary', 'md')}
            >
              <Icon name="RotateCcw" className="w-4 h-4 mr-2" />
              Limpar Filtros
            </button>
            <button
              onClick={() => setIsExpanded(false)}
              className={getButtonClass('primary', 'md')}
            >
              <Icon name="Check" className="w-4 h-4 mr-2" />
              Aplicar Filtros
            </button>
          </div>
        </div>
      )}
    </div>
  );
});

AdvancedPropertySearch.displayName = 'AdvancedPropertySearch';

export default AdvancedPropertySearch;