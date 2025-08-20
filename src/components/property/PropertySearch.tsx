import React, { useState } from 'react';
import { Icon } from '@/utils/iconMapper';
import { Button, Card, Text } from '@/components/ui';

export interface SearchFilters {
  tipo: string;
  negocio: string;
  cidade: string;
  precoMin: string;
  precoMax: string;
  quartos: string;
}

interface PropertySearchProps {
  onSearch?: (filters: SearchFilters) => void;
  initialFilters?: Partial<SearchFilters>;
}

const PropertySearch: React.FC<PropertySearchProps> = ({ 
  onSearch,
  initialFilters = {}
}) => {
  const [searchData, setSearchData] = useState<SearchFilters>({
    tipo: 'todos',
    negocio: 'venda',
    cidade: '',
    precoMin: '',
    precoMax: '',
    quartos: 'todos',
    ...initialFilters
  });

  const handleFilterChange = (field: keyof SearchFilters, value: string) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = () => {
    onSearch?.(searchData);
  };

  return (
    <Card variant="elevated" className="max-w-6xl p-8 mx-auto">
      <Text as="h3" variant="primary" className="mb-6 text-2xl font-bold text-center">
        Busque seu Imóvel
      </Text>
      
      <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Tipo de Negócio */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">Tipo de Negócio</label>
          <select 
            className="w-full p-4 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black"
            value={searchData.negocio}
            onChange={(e) => handleFilterChange('negocio', e.target.value)}
          >
            <option value="venda">Comprar</option>
            <option value="locacao">Alugar</option>
          </select>
        </div>

        {/* Tipo de Imóvel */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">Tipo de Imóvel</label>
          <select 
            className="w-full p-4 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black"
            value={searchData.tipo}
            onChange={(e) => handleFilterChange('tipo', e.target.value)}
          >
            <option value="todos">Todos os tipos</option>
            <option value="apartamento">Apartamento</option>
            <option value="casa">Casa</option>
            <option value="terreno">Terreno</option>
            <option value="comercial">Comercial</option>
          </select>
        </div>

        {/* Localização */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">Cidade/Bairro</label>
          <div className="relative">
            <Icon name="MapPin" className="absolute w-5 h-5 text-gray-400 left-4 top-4" />
            <input
              type="text"
              placeholder="Ex: Centro, Granbery..."
              value={searchData.cidade}
              onChange={(e) => handleFilterChange('cidade', e.target.value)}
              className="w-full p-4 pl-12 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-3">
        
        {/* Preço Mínimo */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">Preço Mínimo</label>
          <input
            type="text"
            placeholder="R$ 100.000"
            value={searchData.precoMin}
            onChange={(e) => handleFilterChange('precoMin', e.target.value)}
            className="w-full p-4 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black"
          />
        </div>

        {/* Preço Máximo */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">Preço Máximo</label>
          <input
            type="text"
            placeholder="R$ 500.000"
            value={searchData.precoMax}
            onChange={(e) => handleFilterChange('precoMax', e.target.value)}
            className="w-full p-4 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black"
          />
        </div>

        {/* Quartos */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">Quartos</label>
          <select 
            className="w-full p-4 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black"
            value={searchData.quartos}
            onChange={(e) => handleFilterChange('quartos', e.target.value)}
          >
            <option value="todos">Qualquer</option>
            <option value="1">1 quarto</option>
            <option value="2">2 quartos</option>
            <option value="3">3 quartos</option>
            <option value="4">4+ quartos</option>
          </select>
        </div>
      </div>

      {/* Botão de Busca */}
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