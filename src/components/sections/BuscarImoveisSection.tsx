"use client";

import React, { useState } from 'react';
import { Icon, IconName } from '@/utils/iconMapper';

const BuscarImoveisSection: React.FC = () => {
  const [filters, setFilters] = useState({
    tipo: 'todos',
    negocio: 'todos',
    cidade: '',
    bairro: '',
    precoMin: '',
    precoMax: '',
    quartos: 'todos',
    banheiros: 'todos',
    vagas: 'todos',
    areaMin: '',
    areaMax: ''
  });

  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('recent');

  const handleFilterChange = (field: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      tipo: 'todos',
      negocio: 'todos',
      cidade: '',
      bairro: '',
      precoMin: '',
      precoMax: '',
      quartos: 'todos',
      banheiros: 'todos',
      vagas: 'todos',
      areaMin: '',
      areaMax: ''
    });
  };

  // Mock data - em produção virá da API
  const properties = [
    {
      id: 1,
      title: "Apartamento no Centro",
      type: "Apartamento",
      business: "Venda",
      price: "R$ 450.000",
      priceValue: 450000,
      area: "85m²",
      areaValue: 85,
      bedrooms: 3,
      bathrooms: 2,
      parking: 1,
      location: "Centro",
      neighborhood: "Centro",
      city: "Juiz de Fora",
      address: "Rua Halfeld, 123",
      images: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop"
      ],
      featured: true,
      code: "JF001",
      description: "Apartamento moderno no coração da cidade, próximo a comércios e serviços.",
      features: ["Portaria 24h", "Elevador", "Academia", "Salão de festas"]
    },
    {
      id: 2,
      title: "Casa no Granbery",
      type: "Casa",
      business: "Venda",
      price: "R$ 680.000",
      priceValue: 680000,
      area: "150m²",
      areaValue: 150,
      bedrooms: 4,
      bathrooms: 3,
      parking: 2,
      location: "Granbery",
      neighborhood: "Granbery",
      city: "Juiz de Fora",
      address: "Rua dos Granbery, 456",
      images: [
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600&h=400&fit=crop"
      ],
      featured: false,
      code: "JF002",
      description: "Casa espaçosa em bairro nobre, ideal para famílias.",
      features: ["Quintal", "Garagem coberta", "Churrasqueira", "Área de serviço"]
    },
    {
      id: 3,
      title: "Terreno Comercial Zona Norte",
      type: "Terreno",
      business: "Venda",
      price: "R$ 280.000",
      priceValue: 280000,
      area: "400m²",
      areaValue: 400,
      bedrooms: 0,
      bathrooms: 0,
      parking: 0,
      location: "Zona Norte",
      neighborhood: "São Pedro",
      city: "Juiz de Fora",
      address: "Avenida dos Andradas, 789",
      images: [
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop"
      ],
      featured: false,
      code: "JF003",
      description: "Terreno plano em área comercial de alto movimento.",
      features: ["Esquina", "Zona comercial", "Documentação ok"]
    },
    {
      id: 4,
      title: "Apartamento para Locação",
      type: "Apartamento",
      business: "Locação",
      price: "R$ 1.200/mês",
      priceValue: 1200,
      area: "65m²",
      areaValue: 65,
      bedrooms: 2,
      bathrooms: 1,
      parking: 1,
      location: "São Mateus",
      neighborhood: "São Mateus",
      city: "Juiz de Fora",
      address: "Rua São Mateus, 321",
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop"
      ],
      featured: false,
      code: "JF004",
      description: "Apartamento pronto para morar, mobiliado.",
      features: ["Mobiliado", "Condomínio baixo", "Próximo ao centro"]
    },
    {
      id: 5,
      title: "Casa São Mateus",
      type: "Casa",
      business: "Venda",
      price: "R$ 520.000",
      priceValue: 520000,
      area: "120m²",
      areaValue: 120,
      bedrooms: 3,
      bathrooms: 2,
      parking: 2,
      location: "São Mateus",
      neighborhood: "São Mateus",
      city: "Juiz de Fora",
      address: "Rua das Flores, 654",
      images: [
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop"
      ],
      featured: true,
      code: "JF005",
      description: "Casa térrea com ótimo acabamento.",
      features: ["Quintal grande", "Área gourmet", "Portão eletrônico"]
    }
  ];

  // Filtrar imóveis baseado nos filtros
  const filteredProperties = properties.filter(property => {
    if (filters.tipo !== 'todos' && property.type.toLowerCase() !== filters.tipo) return false;
    if (filters.negocio !== 'todos' && property.business.toLowerCase() !== filters.negocio) return false;
    if (filters.cidade && !property.city.toLowerCase().includes(filters.cidade.toLowerCase())) return false;
    if (filters.bairro && !property.neighborhood.toLowerCase().includes(filters.bairro.toLowerCase())) return false;
    if (filters.quartos !== 'todos' && property.bedrooms.toString() !== filters.quartos) return false;
    if (filters.banheiros !== 'todos' && property.bathrooms.toString() !== filters.banheiros) return false;
    if (filters.vagas !== 'todos' && property.parking.toString() !== filters.vagas) return false;
    
    // Filtros de preço
    if (filters.precoMin && property.priceValue < parseInt(filters.precoMin.replace(/\D/g, ''))) return false;
    if (filters.precoMax && property.priceValue > parseInt(filters.precoMax.replace(/\D/g, ''))) return false;
    
    // Filtros de área
    if (filters.areaMin && property.areaValue < parseInt(filters.areaMin)) return false;
    if (filters.areaMax && property.areaValue > parseInt(filters.areaMax)) return false;
    
    return true;
  });

  // Ordenar imóveis
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.priceValue - b.priceValue;
      case 'price-desc':
        return b.priceValue - a.priceValue;
      case 'area-asc':
        return a.areaValue - b.areaValue;
      case 'area-desc':
        return b.areaValue - a.areaValue;
      default:
        return 0;
    }
  });

  return (
    <section className="min-h-screen py-24 mt-20 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Buscar <span className="text-blue-600">Imóveis</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Encontre o imóvel perfeito com nossos filtros avançados. 
            Temos opções para todos os perfis e necessidades.
          </p>
        </div>

        {/* Filtros */}
        <div className="p-8 mb-8 bg-white shadow-lg rounded-2xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Filtros de Busca</h3>
            <button
              onClick={clearFilters}
              className="flex items-center gap-2 font-medium text-blue-600 hover:text-blue-700"
            >
              <Icon name="X" className="w-4 h-4" />
              Limpar Filtros
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6 md:grid-cols-4 lg:grid-cols-6">
            
            {/* Tipo de Negócio */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Negócio</label>
              <select
                value={filters.negocio}
                onChange={(e) => handleFilterChange('negocio', e.target.value)}
                className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="todos">Todos</option>
                <option value="venda">Venda</option>
                <option value="locação">Locação</option>
              </select>
            </div>

            {/* Tipo de Imóvel */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Tipo</label>
              <select
                value={filters.tipo}
                onChange={(e) => handleFilterChange('tipo', e.target.value)}
                className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="todos">Todos</option>
                <option value="apartamento">Apartamento</option>
                <option value="casa">Casa</option>
                <option value="terreno">Terreno</option>
              </select>
            </div>

            {/* Quartos */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Quartos</label>
              <select
                value={filters.quartos}
                onChange={(e) => handleFilterChange('quartos', e.target.value)}
                className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="todos">Todos</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4+</option>
              </select>
            </div>

            {/* Banheiros */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Banheiros</label>
              <select
                value={filters.banheiros}
                onChange={(e) => handleFilterChange('banheiros', e.target.value)}
                className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="todos">Todos</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3+</option>
              </select>
            </div>

            {/* Vagas */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Vagas</label>
              <select
                value={filters.vagas}
                onChange={(e) => handleFilterChange('vagas', e.target.value)}
                className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="todos">Todos</option>
                <option value="0">Sem vaga</option>
                <option value="1">1</option>
                <option value="2">2+</option>
              </select>
            </div>

            {/* Cidade */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Cidade</label>
              <input
                type="text"
                placeholder="Ex: Juiz de Fora"
                value={filters.cidade}
                onChange={(e) => handleFilterChange('cidade', e.target.value)}
                className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            
            {/* Preço Mínimo */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Preço Mín.</label>
              <input
                type="text"
                placeholder="R$ 100.000"
                value={filters.precoMin}
                onChange={(e) => handleFilterChange('precoMin', e.target.value)}
                className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Preço Máximo */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Preço Máx.</label>
              <input
                type="text"
                placeholder="R$ 500.000"
                value={filters.precoMax}
                onChange={(e) => handleFilterChange('precoMax', e.target.value)}
                className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Área Mínima */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Área Mín. (m²)</label>
              <input
                type="number"
                placeholder="50"
                value={filters.areaMin}
                onChange={(e) => handleFilterChange('areaMin', e.target.value)}
                className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Área Máxima */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Área Máx. (m²)</label>
              <input
                type="number"
                placeholder="200"
                value={filters.areaMax}
                onChange={(e) => handleFilterChange('areaMax', e.target.value)}
                className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col items-center justify-between gap-4 mb-8 md:flex-row">
          
          {/* Resultados */}
          <div className="text-gray-600">
            <span className="font-semibold text-gray-900">{sortedProperties.length}</span> imóveis encontrados
          </div>

          <div className="flex items-center gap-4">
            
            {/* Ordenação */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Ordenar por:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="recent">Mais recentes</option>
                <option value="price-asc">Menor preço</option>
                <option value="price-desc">Maior preço</option>
                <option value="area-asc">Menor área</option>
                <option value="area-desc">Maior área</option>
              </select>
            </div>

            {/* View Toggle */}
            <div className="flex items-center p-1 bg-gray-100 rounded-lg">
              <button
                onClick={() => setView('grid')}
                className={`p-2 rounded-md transition-colors ${
                  view === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'
                }`}
              >
                <Icon name="Building" className="w-4 h-4" />
              </button>
              <button
                onClick={() => setView('list')}
                className={`p-2 rounded-md transition-colors ${
                  view === 'list' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'
                }`}
              >
                <Icon name="Menu" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Resultados */}
        {sortedProperties.length === 0 ? (
          <div className="py-16 text-center">
            <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full">
              <Icon name="Building" className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Nenhum imóvel encontrado</h3>
            <p className="mb-6 text-gray-600">Tente ajustar os filtros para encontrar mais opções.</p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Limpar Filtros
            </button>
          </div>
        ) : (
          <div className={view === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
            {sortedProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                view={view}
              />
            ))}
          </div>
        )}

        {/* Paginação placeholder */}
        {sortedProperties.length > 0 && (
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <button className="px-3 py-2 transition-colors border border-gray-300 rounded-lg hover:bg-gray-50">
                <Icon name="ArrowRight" className="w-4 h-4 rotate-180" />
              </button>
              <button className="px-4 py-2 text-white bg-blue-600 rounded-lg">1</button>
              <button className="px-4 py-2 transition-colors border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
              <button className="px-4 py-2 transition-colors border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
              <button className="px-3 py-2 transition-colors border border-gray-300 rounded-lg hover:bg-gray-50">
                <Icon name="ArrowRight" className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Componente do Card de Propriedade
interface PropertyCardProps {
  property: any;
  view: 'grid' | 'list';
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, view }) => {
  if (view === 'list') {
    return (
      <div className="overflow-hidden transition-all duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img
              src={property.images[0]}
              alt={property.title}
              className="object-cover w-full h-64 md:h-full"
            />
          </div>
          <div className="p-6 md:w-2/3">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full">
                    {property.type}
                  </span>
                  <span className="px-2 py-1 text-xs font-medium text-green-600 bg-green-100 rounded-full">
                    {property.business}
                  </span>
                  <span className="text-xs text-gray-500">#{property.code}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{property.title}</h3>
                <div className="flex items-center mb-4 text-gray-600">
                  <Icon name="MapPin" className="w-4 h-4 mr-2" />
                  <span className="text-sm">{property.address}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="mb-2 text-2xl font-bold text-blue-600">{property.price}</div>
                <div className="text-sm text-gray-500">{property.area}</div>
              </div>
            </div>

            <p className="mb-4 text-gray-600 line-clamp-2">{property.description}</p>

            <div className="flex items-center justify-between">
              <div className="flex gap-4 text-sm text-gray-600">
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
              <div className="flex gap-2">
                <button className="px-4 py-2 text-sm text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
                  Ver Detalhes
                </button>
                <button className="px-4 py-2 text-sm text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700">
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden transition-all duration-300 transform bg-white shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-2">
      <div className="relative">
        <img
          src={property.images[0]}
          alt={property.title}
          className="object-cover w-full h-64"
        />
        <div className="absolute flex gap-2 top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded-full">
            {property.type}
          </span>
          <span className="px-3 py-1 text-xs font-medium text-white bg-green-600 rounded-full">
            {property.business}
          </span>
        </div>
        <div className="absolute px-3 py-1 text-xs font-medium text-white rounded-full top-4 right-4 bg-black/50">
          #{property.code}
        </div>
        {property.featured && (
          <div className="absolute px-3 py-1 text-xs font-medium text-white bg-yellow-500 rounded-full bottom-4 left-4">
            ⭐ Destaque
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-900">{property.title}</h3>
        
        <div className="flex items-center mb-4 text-gray-600">
          <Icon name="MapPin" className="w-4 h-4 mr-2" />
          <span className="text-sm">{property.address}</span>
        </div>

        <p className="mb-4 text-sm text-gray-600 line-clamp-2">{property.description}</p>

        <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
          <span className="font-medium">{property.area}</span>
          <div className="flex gap-3">
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
        </div>

        <div className="pt-4 border-t">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600">{property.price}</div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 text-sm text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
                Ver mais
                <Icon name="ArrowRight" className="w-4 h-4" />
              </button>
            </div>
          </div>
          <button className="w-full py-2 mt-3 text-sm font-medium text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700">
            Falar via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuscarImoveisSection;