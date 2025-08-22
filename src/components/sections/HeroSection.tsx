"use client";

import React from 'react';
import { Section } from '@/components/ui';
import CTAButton from '../ui/CTAButton';
import HeroContent from '@/components/hero/HeroContent';
import PropertySearch, { SearchFilters } from '@/components/property/PropertySearch';
import PropertyGrid from '@/components/property/PropertyGrid';
import StatsGrid from '@/components/stats/StatsGrid';
import { Property } from '@/components/property/PropertyCard';
import { 
  companyInfo, 
  companyStats, 
  getFeaturedProperties,
  formatPrice,
  getPropertyWhatsAppMessage 
} from '@/data/MockData';
import { Property as MockProperty } from '@/data/MockData';

const HeroSection: React.FC = () => {
  // Função para converter MockProperty para Property (interface do PropertyCard)
  const convertToPropertyCard = (mockProperty: MockProperty): Property => {
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
  };

  // Busca imóveis em destaque do MockData
  const mockFeaturedProperties = getFeaturedProperties(3);
  const featuredProperties: Property[] = mockFeaturedProperties.map(convertToPropertyCard);

  // Stats do MockData
  const stats = companyStats;

  // Handlers
  const handleSearch = (filters: SearchFilters) => {
    console.log('Buscar imóveis:', filters);
  };

  const handleViewDetails = (property: Property) => {
    console.log('Ver detalhes:', property);
  };

  const handleWhatsApp = (property: Property) => {
    // Encontra o imóvel original no MockData para gerar mensagem completa
    const originalProperty = mockFeaturedProperties.find(p => p.code === property.code);
    if (originalProperty) {
      const message = getPropertyWhatsAppMessage(originalProperty);
      const phone = companyInfo.contact.whatsapp;
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  const handleViewAll = () => {
    console.log('Ver todos os imóveis');
    // Navegar para página de imóveis
  };

  return (
    <div className="min-h-screen mt-20 bg-white">
      
      {/* Hero Section - Fundo Preto */}
      <Section variant="dark" className="relative overflow-hidden bg-black">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bg-white rounded-full top-20 left-10 w-72 h-72 blur-3xl"></div>
          <div className="absolute bg-gray-300 rounded-full bottom-20 right-10 w-96 h-96 blur-3xl"></div>
        </div>

        <div className="relative z-10 px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Hero Content usando dados do MockData */}
          <HeroContent
            title={companyInfo.tagline}
            subtitle={companyInfo.description}
            description={companyInfo.experience}
            showCreci={true}
          />

          {/* CTAs */}
          <div className="flex flex-col justify-center gap-4 mb-12 sm:flex-row">
            <CTAButton
              text="Ver Imóveis Disponíveis"
              icon="Search"
              variant="secondary"
              size="lg"
              href="#imoveis"
            />
            <CTAButton
              text="Falar com Corretor"
              icon="MessageCircle"
              variant="outline"
              size="lg"
              href={`https://wa.me/${companyInfo.contact.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de falar com um corretor.')}`}
              className="text-white border-white hover:bg-white hover:text-black"
            />
          </div>
          
          {/* Search Box */}
          <PropertySearch onSearch={handleSearch} />
        </div>
      </Section>

      {/* Stats Section */}
      <StatsGrid stats={stats} />

      {/* Featured Properties */}
      <Section className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
              Imóveis em Destaque
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Seleção especial dos melhores imóveis disponíveis em Juiz de Fora
            </p>
          </div>

          {/* Properties Grid */}
          <PropertyGrid
            properties={featuredProperties}
            onViewDetails={handleViewDetails}
            onWhatsApp={handleWhatsApp}
            onViewAll={handleViewAll}
          />
        </div>
      </Section>
    </div>
  );
};

export default HeroSection;