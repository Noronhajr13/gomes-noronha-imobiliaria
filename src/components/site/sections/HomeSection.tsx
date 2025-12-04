"use client";

import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import PropertySearch, { SearchFilters } from '@/components/site/property/PropertySearch';
import PropertyGrid from '@/components/site/property/PropertyGrid';
import StatsGrid from '@/components/site/stats/StatsGrid';
import { Property as PropertyCardType } from '@/components/site/property/PropertyCard';
import { companyInfo, companyStats } from '@/data/MockData';
import { Property as APIProperty, fetchFeaturedProperties, formatPrice, getPropertyWhatsAppUrl } from '@/services/api';
import Container from '../ui/Container';

const HomeSection: React.FC = () => {
  const [featuredProperties, setFeaturedProperties] = useState<PropertyCardType[]>([]);
  const [loading, setLoading] = useState(true);

  // Função para converter Property da API para Property do PropertyCard
  const convertToPropertyCard = (apiProperty: APIProperty): PropertyCardType => {
    return {
      id: typeof apiProperty.id === 'string' ? parseInt(apiProperty.id) || Math.random() : apiProperty.id,
      title: apiProperty.title,
      type: apiProperty.type,
      price: formatPrice(apiProperty.price),
      area: `${apiProperty.area}m²`,
      bedrooms: apiProperty.bedrooms,
      bathrooms: apiProperty.bathrooms,
      parking: apiProperty.parking,
      location: `${apiProperty.neighborhood}, ${apiProperty.city}`,
      images: apiProperty.images?.length ? apiProperty.images : ['/images/placeholder-property.jpg'],
      featured: apiProperty.featured,
      code: apiProperty.code
    };
  };

  // Buscar imóveis em destaque da API
  useEffect(() => {
    async function loadFeaturedProperties() {
      try {
        setLoading(true);
        const properties = await fetchFeaturedProperties(3);
        setFeaturedProperties(properties.map(convertToPropertyCard));
      } catch (error) {
        console.error('Erro ao carregar imóveis em destaque:', error);
        setFeaturedProperties([]);
      } finally {
        setLoading(false);
      }
    }
    loadFeaturedProperties();
  }, []);

  // Handlers
  const handleSearch = (filters: SearchFilters) => {
    console.log('Buscar imóveis:', filters);
  };

  const handleViewDetails = (property: PropertyCardType) => {
    console.log('Ver detalhes:', property);
  };

  const handleWhatsApp = (property: PropertyCardType) => {
    const phone = companyInfo.contact.whatsapp;
    const message = encodeURIComponent(
      `Olá! Tenho interesse no imóvel:\n\n` +
      `📍 ${property.code} - ${property.title}\n` +
      `💰 ${property.price}\n` +
      `📐 ${property.area}\n` +
      `🛏️ ${property.bedrooms} quartos\n\n` +
      `Gostaria de mais informações.`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
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
      
      {loading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      ) : (
        <PropertyGrid
          properties={featuredProperties}
          onViewDetails={handleViewDetails}
          onWhatsApp={handleWhatsApp}
          onViewAll={handleViewAll}
        />
      )}
    </div>
  );
};

export default HomeSection;