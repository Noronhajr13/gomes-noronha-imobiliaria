"use client";

import React, { useCallback } from 'react';
import { Icon } from '@/utils/iconMapper';
import { cn } from '@/utils/helpers';
import { formatPrice } from '@/data/MockData';
import { Property, Pagination } from '@/services/api';
import { toPropertyDisplay } from '@/types/property';
import PropertyCard from './PropertyCard';
import PropertyListCard from './PropertyListCard';

interface PropertySearchResultsProps {
  properties: Property[];
  isLoading?: boolean;
  totalCount: number;
  className?: string;
  // Props de paginação do servidor
  pagination?: Pagination;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

type ViewMode = 'grid' | 'list';

const PropertySearchResults: React.FC<PropertySearchResultsProps> = React.memo(({
  properties,
  isLoading = false,
  totalCount,
  className,
  pagination,
  currentPage: externalCurrentPage,
  onPageChange
}) => {
  const [viewMode, setViewMode] = React.useState<ViewMode>('grid');

  // Usar paginação externa se fornecida, senão usar valores padrão
  const currentPage = externalCurrentPage || pagination?.page || 1;
  const totalPages = pagination?.totalPages || Math.ceil(totalCount / 12) || 1;
  const total = pagination?.total || totalCount;

  // Conversão de Property para PropertyDisplay usando utilitário centralizado
  const convertToPropertyDisplay = useCallback(
    (mockProperty: Property) => toPropertyDisplay(mockProperty, formatPrice),
    []
  );

  // Conversão de Property para Property (para PropertyListCard)
  const convertToProperty = useCallback((mockProperty: Property): Property => {
    return {
      id: mockProperty.id,
      code: mockProperty.code,
      title: mockProperty.title,
      description: mockProperty.description,
      type: mockProperty.type,
      transactionType: mockProperty.transactionType,
      price: mockProperty.price,
      area: mockProperty.area,
      bedrooms: mockProperty.bedrooms,
      bathrooms: mockProperty.bathrooms,
      parking: mockProperty.parking,
      neighborhood: mockProperty.neighborhood,
      city: mockProperty.city,
      state: mockProperty.state,
      images: mockProperty.images,
      amenities: mockProperty.amenities,
      featured: mockProperty.featured,
      priceLabel: mockProperty.priceLabel
    };
  }, []);

  const handlePageChange = useCallback((page: number) => {
    if (onPageChange) {
      onPageChange(page);
    }
    // Scroll suave para o topo dos resultados
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [onPageChange]);

  // Gerar números de página para exibição
  const getPageNumbers = useCallback((): number[] => {
    const pages: number[] = [];
    const maxVisible = 5;

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
  }, [currentPage, totalPages]);

  if (isLoading) {
    return (
      <div className={cn("flex items-center justify-center py-12", className)}>
        <div className="text-center">
          <Icon name="Loader2" className="w-8 h-8 mx-auto mb-4 animate-spin text-gray-400" />
          <p className="text-gray-600">Buscando imóveis...</p>
        </div>
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className={cn("text-center py-12", className)}>
        <Icon name="Home" className="w-12 h-12 mx-auto mb-4 text-gray-300" />
        <h3 className="mb-2 text-lg font-semibold text-gray-900">
          Nenhum imóvel encontrado
        </h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Tente ajustar os filtros de busca ou remover alguns critérios para encontrar mais opções.
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      {/* Header dos resultados */}
      <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {total} {total === 1 ? 'imóvel encontrado' : 'imóveis encontrados'}
          </h2>
          {totalPages > 1 && (
            <p className="text-gray-600">
              Página {currentPage} de {totalPages}
            </p>
          )}
        </div>

        {/* Toggle de visualização */}
        <div className="flex items-center gap-2 p-1 bg-gray-100 rounded-lg">
          <button
            onClick={() => setViewMode('grid')}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
              viewMode === 'grid'
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            )}
          >
            <Icon name="Grid3X3" className="w-4 h-4" />
            Grade
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
              viewMode === 'list'
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            )}
          >
            <Icon name="List" className="w-4 h-4" />
            Lista
          </button>
        </div>
      </div>

      {/* Lista/Grade de imóveis */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={convertToPropertyDisplay(property)}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {properties.map((property) => (
            <PropertyListCard
              key={property.id}
              property={convertToProperty(property)}
              view="list"
            />
          ))}
        </div>
      )}

      {/* Paginação */}
      {totalPages > 1 && (
        <div className="flex flex-col items-center gap-4 mt-8">
          {/* Info de itens */}
          <p className="text-sm text-gray-500">
            Mostrando {properties.length} de {total} imóveis
          </p>

          {/* Controles de paginação */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                currentPage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              )}
            >
              <Icon name="ChevronLeft" className="w-4 h-4" />
              Anterior
            </button>

            {/* Páginas */}
            <div className="flex space-x-1">
              {getPageNumbers().map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={cn(
                    "w-10 h-10 rounded-md text-sm font-medium transition-colors duration-200",
                    currentPage === pageNumber
                      ? "bg-black text-white"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  )}
                >
                  {pageNumber}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                currentPage === totalPages
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
    </div>
  );
});

PropertySearchResults.displayName = 'PropertySearchResults';

export default PropertySearchResults;
