"use client";

import React, { useEffect, useState } from 'react';
import LinkButton from '../ui/Button';
import PropertySearch, { SearchFilters } from '@/components/site/property/PropertySearch';
import PropertyGrid from '@/components/site/property/PropertyGrid';
import StatsGrid from '@/components/site/stats/StatsGrid';
import { companyInfo, companyStats } from '@/data/MockData';
import { fetchFeaturedProperties } from '@/services/api';
import { PropertyDisplay } from '@/types/property';
import { toPropertyDisplay } from '@/utils/propertyConverter';

const HomeSection: React.FC = () => {
  const [featuredProperties, setFeaturedProperties] = useState<PropertyDisplay[]>([]);
  const [loading, setLoading] = useState(true);

  // Buscar imóveis em destaque da API
  useEffect(() => {
    async function loadFeaturedProperties() {
      try {
        setLoading(true);
        const properties = await fetchFeaturedProperties(3);
        setFeaturedProperties(properties.map(toPropertyDisplay));
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
            <LinkButton
              text="Ver Imóveis Disponíveis"
              icon="Search"
              variant="standard"
              size="lg"
              href="imoveis"
            />
            <LinkButton
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
        />
      )}
    </div>
  );
};

export default HomeSection;