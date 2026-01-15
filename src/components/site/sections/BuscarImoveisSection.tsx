"use client";

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Container from '../ui/Container';
import { Text } from '@/components/site/ui';
import { Property } from '@/services/api';
import { usePropertyFilters } from '@/hooks/usePropertyFilters';
import { PropertyFiltersData } from '@/components/site/property/PropertyFilters';
import PropertyFilters from '@/components/site/property/PropertyFilters';
import PropertyListCard from '@/components/site/property/PropertyListCard';
import PropertyViewToggle from '@/components/site/property/PropertyViewToggle';
import NoPropertiesFound from '@/components/site/property/NoPropertiesFound';
import { Icon } from '@/utils/iconMapper';
import { cn } from '@/utils/helpers';

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

interface BuscarImoveisSectionProps {
  initialFilters?: Partial<PropertyFiltersData>;
}

const BuscarImoveisSection: React.FC<BuscarImoveisSectionProps> = ({ initialFilters }) => {
  const router = useRouter();
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const resultsRef = useRef<HTMLDivElement>(null);
  const {
    filters,
    filteredProperties,
    handleFilterChange,
    clearFilters,
    setFiltersFromUrl,
    loading,
    error,
    pagination,
    currentPage,
    goToPage,
    hasNextPage,
    hasPreviousPage
  } = usePropertyFilters({ initialFiltersFromUrl: initialFilters });

  const handlePageChange = useCallback((page: number) => {
    goToPage(page);
    resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [goToPage]);

  const getPageNumbers = useCallback((): number[] => {
    const pages: number[] = [];
    const maxVisible = 5;
    const totalPages = pagination.totalPages;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const halfVisible = Math.floor(maxVisible / 2);
      let start = Math.max(1, currentPage - halfVisible);
      let end = Math.min(totalPages, currentPage + halfVisible);

      if (currentPage <= halfVisible) {
        end = maxVisible;
      } else if (currentPage >= totalPages - halfVisible) {
        start = totalPages - maxVisible + 1;
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }

    return pages;
  }, [currentPage, pagination.totalPages]);

  // Aplicar filtros da URL quando o componente monta
  useEffect(() => {
    if (initialFilters && Object.keys(initialFilters).length > 0) {
      setFiltersFromUrl(initialFilters);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleViewDetails = useCallback((property: Property) => {
    router.push(`/imoveis/${property.code}`);
  }, [router]);

  const handleRetry = () => {
    clearFilters();
  };

  return (
    <Container title="Encontre seu imóvel ideal" subtitle="Use nossos filtros avançados para encontrar o imóvel perfeito para você">
        <PropertyFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={clearFilters}
          resultsCount={filteredProperties.length}
        />

        {/* Toggle de Visualização */}
        <div ref={resultsRef} className="flex items-center justify-between mb-8">
          <div>
            <Text variant="secondary" className="text-sm">
              {loading ? 'Buscando...' : `${pagination.total} imóveis encontrados`}
            </Text>
            {!loading && pagination.totalPages > 1 && (
              <Text variant="secondary" className="text-xs">
                Página {currentPage} de {pagination.totalPages}
              </Text>
            )}
          </div>
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
          <>
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

            {/* Paginação */}
            {pagination.totalPages > 1 && (
              <div className="flex flex-col items-center gap-4 mt-8">
                <p className="text-sm text-gray-500">
                  Mostrando {filteredProperties.length} de {pagination.total} imóveis
                </p>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={!hasPreviousPage}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                      !hasPreviousPage
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    )}
                  >
                    <Icon name="ChevronLeft" className="w-4 h-4" />
                    Anterior
                  </button>

                  <div className="flex space-x-1">
                    {getPageNumbers().map((pageNumber) => (
                      <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={cn(
                          "w-10 h-10 rounded-md text-sm font-medium transition-colors duration-200",
                          currentPage === pageNumber
                            ? "bg-primary text-white"
                            : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                        )}
                      >
                        {pageNumber}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={!hasNextPage}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                      !hasNextPage
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    )}
                  >
                    Próxima
                    <Icon name="ChevronRight" className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {/* Nenhum Resultado */}
        {!loading && !error && filteredProperties.length === 0 && (
          <NoPropertiesFound onClearFilters={clearFilters} />
        )}
    </Container>
  );
};

export default BuscarImoveisSection;
