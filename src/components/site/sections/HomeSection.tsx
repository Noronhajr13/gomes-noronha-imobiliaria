"use client";

import React from 'react';
import Button from '../ui/Button';
import PropertySearch, { SearchFilters } from '@/components/site/property/PropertySearch';
import PropertyGrid from '@/components/site/property/PropertyGrid';
import StatsGrid from '@/components/site/stats/StatsGrid';
import { Property } from '@/components/site/property/PropertyCard';
import { 
  companyInfo, 
  companyStats, 
  getFeaturedProperties,
  formatPrice,
  getPropertyWhatsAppMessage 
} from '@/data/MockData';
import { Property as MockProperty } from '@/data/MockData';
import Container from '../ui/Container';

const HomeSection: React.FC = () => {
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
    <div className="py-12">
      <div 
        className="relative py-24 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: 'url("/images/fundo.png")' }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              {companyInfo.tagline}
            </h1>

            <p className="mb-4 text-xl text-gray-300 md:text-2xl">
              A <strong className="text-white">{companyInfo.name}</strong> é especialista em vendas em{' '}
              <strong className="text-white">{companyInfo.address.city}</strong>.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4 mb-12 sm:flex-row">
            <Button
              text="Ver Imóveis Disponíveis"
              icon="Search"
              variant="standard"
              size="lg"
              href="imoveis"
            />
            <Button
              text="Falar com Corretor"
              icon="MessageCircle"
              variant="contact"
              size="lg"
              href={`https://wa.me/${companyInfo.contact.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de falar com um corretor.')}`}
            />
          </div>

          <PropertySearch onSearch={handleSearch} />
        </div>
      </div>

      <StatsGrid stats={companyStats} />
      
      <PropertyGrid
        properties={featuredProperties}
        onViewDetails={handleViewDetails}
        onWhatsApp={handleWhatsApp}
        onViewAll={handleViewAll}
      />
    </div>
  );
};

export default HomeSection;