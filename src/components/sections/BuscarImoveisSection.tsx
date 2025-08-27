"use client";

import React, { useState } from 'react';
import { Section, Text } from '@/components/ui';
import { Property } from '@/data/MockData';
import { usePropertyFilters } from '@/hooks/usePropertyFilters';
import PropertyFilters from '@/components/property/PropertyFilters';
import PropertyListCard from '@/components/property/PropertyListCard';
import PropertyViewToggle from '@/components/property/PropertyViewToggle';
import NoPropertiesFound from '@/components/property/NoPropertiesFound';

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
    <div className="min-h-screen mt-8 bg-white">
      <Section variant="DEFAULT" className="py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

          <div className="mb-12 text-center">
            <Text as="h2" variant="primary" className="mb-8 text-5xl font-extrabold leading-tight md:text-6xl">
              Encontre seu Imóvel Ideal
            </Text>
            <Text variant="secondary" className="max-w-2xl mx-auto text-lg">
              Use nossos filtros avançados para encontrar o imóvel perfeito para você
            </Text>
          </div>

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
        </div>
      </Section>
    </div>
  );
};

export default BuscarImoveisSection;