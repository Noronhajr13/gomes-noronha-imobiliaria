import React, { useState } from 'react';
import { Icon } from '@/utils/iconMapper';
import { Button, Card, Text } from '@/components/ui';
import { cn } from '@/utils/helpers';
import { comboSelects } from '@/data/MockData';
import ComboFilter from '../ui/ComboFilter';
import InputFilterProps from '../ui/InputFilter';

export interface SearchFilters {
  tipo: string;
  negocio: string;
  cidade: string;
  bairro: string;
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
    bairro: '',
    cidade: '',
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
    <Card variant="DEFAULT" className={cn("p-6 mb-8")}>
      <Text as="h3" variant="primary" className="mb-6 text-2xl font-bold text-center">
        Busque seu Imóvel
      </Text>
      <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 lg:grid-cols-4">
        {comboSelects
          .filter(({ id }) => ['imovel', 'negocio', 'bairro'].includes(id))
          .map(({ id, label, options }) => (
            <ComboFilter
              id={id}
              label={label}
              options={options}
              onChange={(value) => handleFilterChange(id as keyof SearchFilters, value)}
              value={searchData[id as keyof SearchFilters]}
            />
          ))}
          <InputFilterProps
            placeHolder="Digite a cidade"
            onChange={(value) => handleFilterChange('cidade', value)}
            label="Cidade"
            value={searchData.cidade}
          />
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