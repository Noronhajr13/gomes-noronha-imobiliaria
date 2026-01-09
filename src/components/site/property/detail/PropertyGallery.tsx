"use client";

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { Icon } from '@/utils/iconMapper';

interface PropertyGalleryProps {
  images: string[];
  title: string;
  featured?: boolean;
  exclusive?: boolean;
  propertyCode: string;
  onOpenZoom: (index: number) => void;
}

const PropertyGallery: React.FC<PropertyGalleryProps> = React.memo(({
  images,
  title,
  featured = false,
  exclusive = false,
  propertyCode,
  onOpenZoom
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  }, [images.length]);

  const previousImage = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  }, [images.length]);

  const handleThumbnailClick = useCallback((index: number) => {
    setCurrentImageIndex(index);
  }, []);

  const handleZoomClick = useCallback(() => {
    onOpenZoom(currentImageIndex);
  }, [onOpenZoom, currentImageIndex]);

  return (
    <section className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Imagem Principal */}
        <div className="relative h-96 lg:h-[600px] bg-gray-100 rounded-xl overflow-hidden group">
          {images.length > 0 ? (
            <>
              <button
                onClick={handleZoomClick}
                className="absolute inset-0 z-10 cursor-zoom-in"
                aria-label="Ampliar imagem"
              >
                <Image
                  src={images[currentImageIndex]}
                  alt={`${title} - Foto ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
              </button>

              {/* Botão de Zoom */}
              <button
                onClick={handleZoomClick}
                className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                aria-label="Ampliar imagem"
              >
                <Icon name="Search" className="w-5 h-5 text-black" />
              </button>

              {/* Controles de navegação */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={previousImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Imagem anterior"
                  >
                    <Icon name="ChevronLeft" className="w-6 h-6 text-black" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Próxima imagem"
                  >
                    <Icon name="ChevronRight" className="w-6 h-6 text-black" />
                  </button>

                  {/* Contador de imagens */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                </>
              )}

              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                {featured && (
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Destaque
                  </span>
                )}
                {exclusive && (
                  <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Exclusivo
                  </span>
                )}
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <Icon name="Camera" className="w-20 h-20 text-gray-400" />
            </div>
          )}
        </div>

        {/* Grid de Thumbnails */}
        <div className="hidden lg:grid grid-cols-2 gap-4">
          {images.slice(1, 5).map((image, index) => (
            <button
              key={`${propertyCode}-${image}`}
              onClick={() => handleThumbnailClick(index + 1)}
              className="relative h-[290px] bg-gray-100 rounded-xl overflow-hidden hover:opacity-80 transition-opacity"
            >
              <Image
                src={image}
                alt={`${title} - Thumbnail ${index + 2}`}
                fill
                className="object-cover"
              />
            </button>
          ))}

          {images.length > 5 && (
            <button
              onClick={handleZoomClick}
              className="relative h-[290px] bg-gray-900 rounded-xl flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
            >
              <div className="text-center">
                <Icon name="Camera" className="w-12 h-12 mx-auto mb-2" />
                <p className="text-2xl font-bold">+{images.length - 5}</p>
                <p className="text-sm">mais fotos</p>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
});

PropertyGallery.displayName = 'PropertyGallery';

export default PropertyGallery;
