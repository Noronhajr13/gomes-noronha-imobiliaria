"use client";

import React, { useState } from 'react';
import Container from '../ui/Container';
import { Text } from '@/components/site/ui';
import { Property } from '@/data/MockData';
import { usePropertyFilters } from '@/hooks/usePropertyFilters';
import PropertyFilters from '@/components/site/property/PropertyFilters';
import PropertyListCard from '@/components/site/property/PropertyListCard';
import PropertyViewToggle from '@/components/site/property/PropertyViewToggle';
import NoPropertiesFound from '@/components/site/property/NoPropertiesFound';

const BuscarImoveisSection: React.FC = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const { 
    filters, 
    filteredProperties, 
    handleFilterChange, 
    clearFilters 
  } = usePropertyFilters();

  const handleViewDetails = (property: Property) => {
    // Futuramente: navegação para página de detalhes
    console.log('Ver detalhes do imóvel:', property.code);
  };

  return (
    <Container title="Encontre seu Imóvel Ideal" subtitle="Use nossos filtros avançados para encontrar o imóvel perfeito para você">
        <PropertyFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={clearFilters}
          resultsCount={filteredProperties.length}
        />

        {/* Toggle de Visualização */}
        <div className="flex items-center justify-between mb-8">
          <Text variant="secondary" className="text-sm">
            {filteredProperties.length} imóveis encontrados
          </Text>
          <PropertyViewToggle
            view={view}
            onViewChange={setView}
          />
        </div>

        {/* Grid de Resultados */}
        {filteredProperties.length > 0 ? (
          <div className={`grid gap-6 ${
            view === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredProperties.map(property => (
              <PropertyListCard
                key={property.id}
                property={property}
                view={view}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        ) : (
          <NoPropertiesFound onClearFilters={clearFilters} />
        )}
    </Container>
  );
};

export default BuscarImoveisSection;