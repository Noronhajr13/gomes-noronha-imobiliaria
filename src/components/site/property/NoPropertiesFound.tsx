import React from 'react';
import { Icon } from '@/utils/iconMapper';
import { Button, Text } from '@/components/site/ui';

interface NoPropertiesFoundProps {
  onClearFilters: () => void;
  message?: string;
  className?: string;
}

const NoPropertiesFound: React.FC<NoPropertiesFoundProps> = ({
  onClearFilters,
  message = "Nenhum imóvel encontrado",
  className = ""
}) => {
  return (
    <div className={`py-12 text-center ${className}`}>
      <Icon name="Home" className="w-16 h-16 mx-auto mb-4 text-gray-400" />
      <Text as="h3" variant="primary" className="mb-2 text-xl font-semibold">
        {message}
      </Text>
      <Text variant="secondary" className="mb-4">
        Tente ajustar os filtros para encontrar mais opções
      </Text>
      <Button
        variant="primary"
        size="md"
        onClick={onClearFilters}
      >
        Limpar todos os filtros
      </Button>
    </div>
  );
};

export default NoPropertiesFound;