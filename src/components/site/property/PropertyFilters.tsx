"use client";

import React, { useState } from 'react';
import { Icon } from '@/utils/iconMapper';
import { Button, Card } from '@/components/site/ui';
import { cn } from '@/utils/helpers';
import { comboSelects } from '@/data/MockData';
import ComboFilter from '../ui/ComboFilter';
import InputFilterProps from '../ui/InputFilter';

export interface PropertyFiltersData {
  tipo: string;
  negocio: string;
  cidade: string;
  bairro: string;
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
  // className - prop not used directly but passed to cn()
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card variant="DEFAULT" className={cn("p-6 mb-8")}>
      <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 lg:grid-cols-4">
        {comboSelects.map(({ id, label, options }) => (
          <ComboFilter
            key={id}
            id={id}
            label={label}
            options={options}
            onChange={(value) => onFilterChange(id as keyof PropertyFiltersData, value)}
            value={filters[id as keyof PropertyFiltersData]}
          />
        ))}
          <InputFilterProps
            placeHolder="Digite a cidade"
            onChange={(value) => onFilterChange('cidade', value)}
            label="Cidade"
            value={filters.cidade}
          />
      </div>

      {/* Filtros Expandidos */}
      {isExpanded && (
        <div className="grid grid-cols-1 gap-4 pt-4 mb-4 border-t border-gray-200 md:grid-cols-2 lg:grid-cols-4">
          {/* Preço Mínimo */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Preço Mínimo
            </label>
            <input
              type="number"
              placeholder="R$ 0"
              value={filters.precoMin}
              onChange={(e) => onFilterChange('precoMin', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Preço Máximo */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Preço Máximo
            </label>
            <input
              type="number"
              placeholder="R$ 999.999"
              value={filters.precoMax}
              onChange={(e) => onFilterChange('precoMax', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Quartos */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Quartos
            </label>
            <select
              value={filters.quartos}
              onChange={(e) => onFilterChange('quartos', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Banheiros
            </label>
            <select
              value={filters.banheiros}
              onChange={(e) => onFilterChange('banheiros', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Vagas
            </label>
            <select
              value={filters.vagas}
              onChange={(e) => onFilterChange('vagas', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Área Mínima (m²)
            </label>
            <input
              type="number"
              placeholder="0"
              value={filters.areaMin}
              onChange={(e) => onFilterChange('areaMin', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Área Máxima */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Área Máxima (m²)
            </label>
            <input
              type="number"
              placeholder="999"
              value={filters.areaMax}
              onChange={(e) => onFilterChange('areaMax', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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