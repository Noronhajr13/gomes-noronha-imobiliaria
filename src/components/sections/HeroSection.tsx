"use client";

import React, { useState } from 'react';
import { Icon, type IconName } from '@/utils/iconMapper';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

const HomeSection: React.FC = () => {
  const [searchData, setSearchData] = useState({
    tipo: 'todos',
    negocio: 'venda',
    cidade: '',
    precoMin: '',
    precoMax: '',
    quartos: 'todos'
  });

  const handleSearchChange = (field: string, value: string) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = () => {
    console.log('Buscar imóveis:', searchData);
    // Aqui vai a lógica de busca
  };

  const featuredProperties = [
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
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop",
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

  return (
    <section className="min-h-screen mt-20 bg-white">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden text-white bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bg-white rounded-full top-20 left-10 w-72 h-72 blur-3xl"></div>
          <div className="absolute bg-blue-300 rounded-full bottom-20 right-10 w-96 h-96 blur-3xl"></div>
        </div>

        <div className="relative z-10 px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
          
          {/* Hero Content */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium border rounded-full bg-white/10 backdrop-blur-sm border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Há mais de 20 anos realizando sonhos
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
              Encontre seu
              <span className="block text-transparent bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text">
                Imóvel Ideal
              </span>
            </h1>

            <p className="max-w-3xl mx-auto mb-12 text-xl leading-relaxed text-blue-100 md:text-2xl">
              A <span className="font-semibold text-white">Gomes & Noronha</span> é especialista em 
              vendas e locações em <span className="font-semibold text-white">Juiz de Fora</span>. 
              Transformamos sonhos em endereços.
            </p>
          </div>

          {/* Search Form */}
          <div className="max-w-6xl p-8 mx-auto bg-white shadow-2xl rounded-2xl">
            <h3 className="mb-6 text-2xl font-bold text-center text-gray-900">
              Busque seu Imóvel
            </h3>
            
            <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2 lg:grid-cols-3">
              
              {/* Tipo de Negócio */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">Tipo de Negócio</label>
                <select 
                  className="w-full p-4 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchData.negocio}
                  onChange={(e) => handleSearchChange('negocio', e.target.value)}
                >
                  <option value="venda">Comprar</option>
                  <option value="locacao">Alugar</option>
                </select>
              </div>

              {/* Tipo de Imóvel */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">Tipo de Imóvel</label>
                <select 
                  className="w-full p-4 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchData.tipo}
                  onChange={(e) => handleSearchChange('tipo', e.target.value)}
                >
                  <option value="todos">Todos os tipos</option>
                  <option value="apartamento">Apartamento</option>
                  <option value="casa">Casa</option>
                  <option value="terreno">Terreno</option>
                  <option value="comercial">Comercial</option>
                </select>
              </div>

              {/* Localização */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">Cidade/Bairro</label>
                <div className="relative">
                  <MapPin className="absolute w-5 h-5 text-gray-400 left-4 top-4" />
                  <input
                    type="text"
                    placeholder="Ex: Centro, Granbery..."
                    value={searchData.cidade}
                    onChange={(e) => handleSearchChange('cidade', e.target.value)}
                    className="w-full p-4 pl-12 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-3">
              
              {/* Preço Mínimo */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">Preço Mínimo</label>
                <input
                  type="text"
                  placeholder="R$ 100.000"
                  value={searchData.precoMin}
                  onChange={(e) => handleSearchChange('precoMin', e.target.value)}
                  className="w-full p-4 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Preço Máximo */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">Preço Máximo</label>
                <input
                  type="text"
                  placeholder="R$ 500.000"
                  value={searchData.precoMax}
                  onChange={(e) => handleSearchChange('precoMax', e.target.value)}
                  className="w-full p-4 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Quartos */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">Quartos</label>
                <select 
                  className="w-full p-4 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchData.quartos}
                  onChange={(e) => handleSearchChange('quartos', e.target.value)}
                >
                  <option value="todos">Qualquer</option>
                  <option value="1">1 quarto</option>
                  <option value="2">2 quartos</option>
                  <option value="3">3 quartos</option>
                  <option value="4">4+ quartos</option>
                </select>
              </div>
            </div>

            {/* Botão de Busca */}
            <button 
              onClick={handleSearch}
              className="flex items-center justify-center w-full gap-3 px-8 py-4 text-lg font-bold text-white transition-all duration-300 transform shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-700 hover:to-blue-800 hover:scale-105"
            >
              <Icon name="Building" className="w-6 h-6" />
              Buscar Imóveis
              <Icon name="ArrowRight" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-colors duration-300 bg-blue-100 rounded-2xl group-hover:bg-blue-200">
                  <Icon name={stat.icon as IconName} className="w-8 h-8 text-blue-600" />
                </div>
                <div className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">{stat.number}</div>
                <div className="font-medium text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Imóveis em <span className="text-blue-600">Destaque</span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Selecionamos os melhores imóveis disponíveis para você. 
              Casas, apartamentos e terrenos com a qualidade Gomes & Noronha.
            </p>
          </div>

          <div className="grid gap-8 mb-12 md:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map((property) => (
              <div key={property.id} className="overflow-hidden transition-all duration-300 transform bg-white shadow-lg rounded-2xl hover:shadow-xl hover:-translate-y-2">
                
                {/* Image */}
                <div className="relative">
                  <Image 
                    src={property.image} 
                    alt={property.title}
                    className="object-cover w-full h-64"
                  />
                  <div className="absolute px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full top-4 left-4">
                    {property.type}
                  </div>
                  <div className="absolute px-3 py-1 text-sm font-medium text-white rounded-full top-4 right-4 bg-black/50">
                    {property.code}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{property.title}</h3>
                  
                  <div className="flex items-center mb-4 text-gray-600">
                    <Icon name="MapPin" className="w-4 h-4 mr-2" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  
                  {/* Details */}
                  <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
                    <span className="font-medium">{property.area}</span>
                    {property.bedrooms > 0 && (
                      <span className="flex items-center gap-1">
                        <Icon name="Home" className="w-4 h-4" />
                        {property.bedrooms}
                      </span>
                    )}
                    {property.bathrooms > 0 && (
                      <span className="flex items-center gap-1">
                        🚿 {property.bathrooms}
                      </span>
                    )}
                    {property.parking > 0 && (
                      <span className="flex items-center gap-1">
                        🚗 {property.parking}
                      </span>
                    )}
                  </div>
                  
                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-600">{property.price}</div>
                    <button className="flex items-center gap-2 px-4 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
                      Ver mais
                      <Icon name="ArrowRight" className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <button className="px-8 py-4 text-lg font-bold text-white transition-all duration-300 transform shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-700 hover:to-blue-800 hover:scale-105">
              Ver Todos os Imóveis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;