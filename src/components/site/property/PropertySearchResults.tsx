"use client";

import React, { useState, useMemo, useCallback } from 'react';
import { Icon } from '@/utils/iconMapper';
import { cn } from '@/utils/helpers';
import { Property as MockProperty } from '@/data/MockData';
import PropertyCard, { Property } from './PropertyCard';
import PropertyListCard from './PropertyListCard';
import { formatPrice } from '@/data/MockData';
import { Property as ApiProperty } from '@/services/api';

interface PropertySearchResultsProps {
  properties: MockProperty[];
  isLoading?: boolean;
  totalCount: number;
  className?: string;
}

type ViewMode = 'grid' | 'list';

const ITEMS_PER_PAGE = 12;

const PropertySearchResults: React.FC<PropertySearchResultsProps> = React.memo(({
  properties,
  isLoading = false,
  totalCount,
  className
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [currentPage, setCurrentPage] = useState(1);

  // Conversão de MockProperty para Property (memoizada)
  const convertToPropertyCard = useCallback((mockProperty: MockProperty): Property => {
    return {
      id: mockProperty.id,
      title: mockProperty.title,
      type: mockProperty.type,
      price: formatPrice(mockProperty.price, mockProperty.priceLabel),
      area: `${mockProperty.area}m²`,
      bedrooms: mockProperty.bedrooms,
      bathrooms: mockProperty.bathrooms,
      parking: mockProperty.parking,
      location: `${mockProperty.neighborhood}, ${mockProperty.city}`,
      images: mockProperty.images,
      featured: mockProperty.featured,
      code: mockProperty.code
    };
  }, []);

  // Conversão de MockProperty para ApiProperty (para PropertyListCard)
  const convertToApiProperty = useCallback((mockProperty: MockProperty): ApiProperty => {
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

  // Paginação (memoizada)
  const paginationData = useMemo(() => {
    const totalPages = Math.ceil(properties.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentProperties = properties.slice(startIndex, endIndex);
    
    return {
      totalPages,
      startIndex,
      endIndex,
      currentProperties
    };
  }, [properties, currentPage]);

  const { totalPages, currentProperties } = paginationData;

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    // Scroll suave para o topo dos resultados
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
            {totalCount} {totalCount === 1 ? 'imóvel encontrado' : 'imóveis encontrados'}
          </h2>
          <p className="text-gray-600">
            Página {currentPage} de {totalPages}
          </p>
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
          {currentProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={convertToPropertyCard(property)}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {currentProperties.map((property) => (
            <PropertyListCard
              key={property.id}
              property={convertToApiProperty(property)}
              view="list"
            />
          ))}
        </div>
      )}

      {/* Paginação */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center mt-8 space-x-2">
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
            {Array.from({ length: Math.min(5, totalPages) }, (_, index) => {
              let pageNumber;
              if (totalPages <= 5) {
                pageNumber = index + 1;
              } else if (currentPage <= 3) {
                pageNumber = index + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNumber = totalPages - 4 + index;
              } else {
                pageNumber = currentPage - 2 + index;
              }

              return (
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
              );
            })}
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
      )}
    </div>
  );
});

PropertySearchResults.displayName = 'PropertySearchResults';

export default PropertySearchResults;