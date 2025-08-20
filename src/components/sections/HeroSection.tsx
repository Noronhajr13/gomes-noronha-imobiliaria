"use client";

import React from 'react';
import { Section } from '@/components/ui';
import HeroContent from '@/components/hero/HeroContent';
import PropertySearch, { SearchFilters } from '@/components/property/PropertySearch';
import PropertyGrid from '@/components/property/PropertyGrid';
import StatsGrid from '@/components/stats/StatsGrid';
import { Property } from '@/components/property/PropertyCard';

const HomeSection: React.FC = () => {
  // Mock data
  const featuredProperties: Property[] = [
    {
      id: 1,
      title: "Apartamento Centro",
      type: "Apartamento",
      price: "R$ 450.000",
      area: "85m²",
      bedrooms: 3,
      bathrooms: 2,
      parking: 1,
      location: "Centro, Juiz de Fora",
      images: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop"],
      featured: true,
      code: "JF001"
    },
    {
      id: 2,
      title: "Casa Granbery",
      type: "Casa", 
      price: "R$ 680.000",
      area: "150m²",
      bedrooms: 4,
      bathrooms: 3,
      parking: 2,
      location: "Bairro Granbery",
      images: ["https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&h=400&fit=crop"],
      featured: true,
      code: "JF002"
    },
    {
      id: 3,
      title: "Terreno Comercial",
      type: "Terreno",
      price: "R$ 280.000", 
      area: "400m²",
      bedrooms: 0,
      bathrooms: 0,
      parking: 0,
      location: "Zona Norte",
      images: ["https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop"],
      featured: true,
      code: "JF003"
    }
  ];

  const stats = [
    { number: '20+', label: 'Anos de Experiência', icon: 'Clock' },
    { number: '1.500+', label: 'Imóveis Vendidos', icon: 'Home' },
    { number: '95%', label: 'Clientes Satisfeitos', icon: 'Star' },
    { number: '50+', label: 'Imóveis Disponíveis', icon: 'Building' }
  ];

  // Handlers
  const handleSearch = (filters: SearchFilters) => {
    console.log('Buscar imóveis:', filters);
  };

  const handleViewDetails = (property: Property) => {
    console.log('Ver detalhes:', property);
  };

  const handleWhatsApp = (property: Property) => {
    console.log('WhatsApp:', property);
  };

  const handleViewAll = () => {
    console.log('Ver todos os imóveis');
  };

  return (
    <div className="min-h-screen mt-20 bg-white">
      
      {/* Hero Section */}
      <Section variant="dark" className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bg-white rounded-full top-20 left-10 w-72 h-72 blur-3xl"></div>
          <div className="absolute bg-gray-300 rounded-full bottom-20 right-10 w-96 h-96 blur-3xl"></div>
        </div>

        <div className="relative z-10 px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <HeroContent
            title="Encontre seu Imóvel Ideal"
            subtitle="A Gomes & Noronha é especialista em vendas e locações em Juiz de Fora. Transformamos sonhos em endereços."
            highlightWord="Imóvel Ideal"
          />
          
          <PropertySearch onSearch={handleSearch} />
        </div>
      </Section>

      {/* Stats */}
      <StatsGrid stats={stats} />

      {/* Featured Properties */}
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