"use client";

import React, { useState, useCallback } from 'react';
import Header from '@/components/site/layout/header/Header';
import Footer from '@/components/site/layout/footer/Footer';
import { Property } from '@/services/api';
import { useNavigation } from '@/hooks/useNavigation';

// Componentes extraídos
import PropertyStructuredData from './PropertyStructuredData';
import PropertyAnalytics, { trackPropertyAction } from './PropertyAnalytics';
import PropertyBreadcrumb from './PropertyBreadcrumb';
import PropertyGallery from './PropertyGallery';
import PropertyHeader from './PropertyHeader';
import PropertyFeatures from './PropertyFeatures';
import PropertyAmenities from './PropertyAmenities';
import PropertyDetailsGrid from './PropertyDetailsGrid';
import PropertyContactCard from './PropertyContactCard';
import PropertyShareButtons from './PropertyShareButtons';
import RelatedProperties from './RelatedProperties';
import ImageZoomModal from './ImageZoomModal';
import ScheduleVisitModal from './ScheduleVisitModal';

interface PropertyDetailClientProps {
  property: Property;
}

const PropertyDetailClient: React.FC<PropertyDetailClientProps> = ({ property }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const { handleSectionChange } = useNavigation();

  // Handlers memoizados
  const handleOpenZoom = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setIsZoomModalOpen(true);
    trackPropertyAction('image_zoom', property.code);
  }, [property.code]);

  const handleScheduleClick = useCallback(() => {
    setIsScheduleModalOpen(true);
    trackPropertyAction('schedule_visit', property.code, { price: property.price });
  }, [property.code, property.price]);

  return (
    <>
      <PropertyStructuredData property={property} />
      <PropertyAnalytics
        propertyCode={property.code}
        propertyTitle={property.title}
        propertyPrice={property.price}
        propertyType={property.type}
      />

      <div className="min-h-screen bg-white">
        <Header
          activeSection="imoveis"
          setActiveSection={handleSectionChange}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        <main className="pt-20">
          {/* Breadcrumb */}
          <PropertyBreadcrumb propertyCode={property.code} />

          {/* Galeria de Imagens */}
          <PropertyGallery
            images={property.images}
            title={property.title}
            featured={property.featured}
            exclusive={property.exclusive}
            propertyCode={property.code}
            onOpenZoom={handleOpenZoom}
          />

          {/* Informações do Imóvel */}
          <section className="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Coluna Principal */}
              <div className="lg:col-span-2 space-y-8">
                {/* Título e Preço */}
                <PropertyHeader
                  code={property.code}
                  title={property.title}
                  neighborhood={property.neighborhood}
                  city={property.city}
                  transactionType={property.transactionType}
                  price={property.price}
                  priceLabel={property.priceLabel}
                />

                {/* Características principais */}
                <PropertyFeatures
                  area={property.area}
                  bedrooms={property.bedrooms}
                  bathrooms={property.bathrooms}
                  parking={property.parking}
                />

                {/* Descrição */}
                {property.description && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Descrição</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {property.description}
                    </p>
                  </div>
                )}

                {/* Amenidades */}
                <PropertyAmenities amenities={property.amenities || []} />

                {/* Detalhes Adicionais */}
                <PropertyDetailsGrid
                  type={property.type}
                  condominiumFee={property.condominiumFee}
                  iptu={property.iptu}
                  yearBuilt={property.yearBuilt}
                  suites={property.suites}
                />
              </div>

              {/* Coluna Lateral - CTAs */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-4">
                  {/* Card de Contato */}
                  <PropertyContactCard
                    property={property}
                    onScheduleClick={handleScheduleClick}
                  />

                  {/* Compartilhar */}
                  <PropertyShareButtons
                    propertyTitle={property.title}
                    propertyCode={property.code}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Imóveis Relacionados */}
          <RelatedProperties currentProperty={property} />
        </main>

        <Footer />
      </div>

      {/* Modal de Zoom */}
      <ImageZoomModal
        images={property.images}
        initialIndex={currentImageIndex}
        isOpen={isZoomModalOpen}
        onClose={() => setIsZoomModalOpen(false)}
        propertyTitle={property.title}
      />

      {/* Modal de Agendamento */}
      <ScheduleVisitModal
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
        propertyCode={property.code}
        propertyTitle={property.title}
      />
    </>
  );
};

export default PropertyDetailClient;
