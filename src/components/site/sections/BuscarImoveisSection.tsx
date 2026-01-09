"use client";

import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Container from '../ui/Container';
import { Text } from '@/components/site/ui';
import { Property } from '@/services/api';
import { usePropertyFilters } from '@/hooks/usePropertyFilters';
import PropertyFilters from '@/components/site/property/PropertyFilters';
import PropertyListCard from '@/components/site/property/PropertyListCard';
import PropertyViewToggle from '@/components/site/property/PropertyViewToggle';
import NoPropertiesFound from '@/components/site/property/NoPropertiesFound';

const LoadingSpinner: React.FC = () => (
  <div className="flex flex-col items-center justify-center py-16">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
    <Text variant="secondary">Carregando imóveis...</Text>
  </div>
);

const ErrorMessage: React.FC<{ message: string; onRetry: () => void }> = ({ message, onRetry }) => (
  <div className="flex flex-col items-center justify-center py-16 text-center">
    <div className="text-red-500 mb-4">
      <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    </div>
    <Text variant="secondary" className="mb-4">{message}</Text>
    <button 
      onClick={onRetry}
      className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
    >
      Tentar novamente
    </button>
  </div>
);

const BuscarImoveisSection: React.FC = () => {
  const router = useRouter();
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const {
    filters,
    filteredProperties,
    handleFilterChange,
    clearFilters,
    loading,
    error
  } = usePropertyFilters();

  const handleViewDetails = useCallback((property: Property) => {
    router.push(`/imoveis/${property.code}`);
  }, [router]);

  const handleRetry = () => {
    clearFilters();
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
            {loading ? 'Buscando...' : `${filteredProperties.length} imóveis encontrados`}
          </Text>
          <PropertyViewToggle
            view={view}
            onViewChange={setView}
          />
        </div>

        {/* Estado de Loading */}
        {loading && <LoadingSpinner />}

        {/* Estado de Erro */}
        {error && !loading && <ErrorMessage message={error} onRetry={handleRetry} />}

        {/* Grid de Resultados */}
        {!loading && !error && filteredProperties.length > 0 && (
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
        )}

        {/* Nenhum Resultado */}
        {!loading && !error && filteredProperties.length === 0 && (
          <NoPropertiesFound onClearFilters={clearFilters} />
        )}
    </Container>
  );
};

export default BuscarImoveisSection;