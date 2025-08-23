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
    <div className="min-h-screen mt-20 bg-white">
      <Section variant="alternate" className="py-16">
        <div className="container px-4 mx-auto">
          {/* Header da Seção */}
          <div className="mb-12 text-center">
            <Text as="h2" variant="primary" className="mb-4 text-3xl font-bold md:text-4xl">
              Encontre seu Imóvel Ideal
            </Text>
            <Text variant="secondary" className="max-w-2xl mx-auto text-lg">
              Use nossos filtros avançados para encontrar o imóvel perfeito para você
            </Text>
          </div>

          {/* Formulário de Filtros */}
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