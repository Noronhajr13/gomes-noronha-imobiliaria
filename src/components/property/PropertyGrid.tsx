import React from 'react';
import Button from '../ui/Button';
import { Text, Section } from '@/components/ui';
import PropertyCard, { Property } from './PropertyCard';

interface PropertyGridProps {
  title?: string;
  subtitle?: string;
  properties: Property[];
  showViewAll?: boolean;
  onViewAll?: () => void;
  onViewDetails?: (property: Property) => void;
  onWhatsApp?: (property: Property) => void;
}

const PropertyGrid: React.FC<PropertyGridProps> = ({
  title = "Imóveis em Destaque",
  subtitle = "Selecionamos os melhores imóveis disponíveis para você.",
  properties,
  // showViewAll = true, // Não utilizado
  // onViewAll, // Não utilizado
  onViewDetails,
  onWhatsApp
}) => {
  return (
    <Section variant="DEFAULT" className="py-12 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <Text as="h2" variant="primary" className="mb-6 text-4xl font-bold md:text-5xl">
            {title}</Text>
          <Text variant="secondary" className="max-w-3xl mx-auto text-xl">
            {subtitle}
          </Text>
        </div>

        {/* Grid */}
        <div className="grid gap-8 mb-12 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onViewDetails={onViewDetails}
              onWhatsApp={onWhatsApp}
            />
          ))}
        </div>

        <div className="text-center">
          <Button
            text="Ver Todos os Imóveis"
            variant="standard"
            base="base"
            size="lg"
            href="imoveis"
          />
        </div>
      </div>
    </Section>
  );
};

export default PropertyGrid;