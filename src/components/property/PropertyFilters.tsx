"use client";

import React, { useState } from 'react';
import { Icon } from '@/utils/iconMapper';
import { Button, Card } from '@/components/ui';
import { cn } from '@/utils/helpers';
import { propertyTypes, neighborhoods } from '@/data/MockData';

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
  className
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card variant="DEFAULT" className={cn("p-6 mb-8", className)}>
      <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Tipo de Imóvel */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Tipo de Imóvel
          </label>
          <select
            value={filters.tipo}
            onChange={(e) => onFilterChange('tipo', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="todos">Todos os tipos</option>
            {propertyTypes.map(type => (
              <option key={type.value} value={type.label}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Tipo de Negócio */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Tipo de Negócio
          </label>
          <select
            value={filters.negocio}
            onChange={(e) => onFilterChange('negocio', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="todos">Todos</option>
            <option value="Venda">Venda</option>
            <option value="Aluguel">Aluguel</option>
            <option value="Venda/Aluguel">Venda/Aluguel</option>
          </select>
        </div>

        {/* Cidade */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Cidade
          </label>
          <input
            type="text"
            placeholder="Digite a cidade"
            value={filters.cidade}
            onChange={(e) => onFilterChange('cidade', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Bairro */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Bairro
          </label>
          <select
            value={filters.bairro}
            onChange={(e) => onFilterChange('bairro', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Todos os bairros</option>
            {neighborhoods.map(neighborhood => (
              <option key={neighborhood.value} value={neighborhood.label}>
                {neighborhood.label}
              </option>
            ))}
          </select>
        </div>
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