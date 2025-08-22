"use client";

import React, { useState } from 'react';
import { Icon } from '@/utils/iconMapper';
import { Property, properties } from '@/data/MockData';

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
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
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

  // Usando dados do MockData

  // Filtrar imóveis baseado nos filtros
  const filteredProperties = properties.filter(property => {
    if (filters.tipo !== 'todos' && property.type !== filters.tipo) return false;
    if (filters.negocio !== 'todos' && property.transactionType !== filters.negocio) return false;
    if (filters.cidade && !property.city.toLowerCase().includes(filters.cidade.toLowerCase())) return false;
    if (filters.bairro && !property.neighborhood.toLowerCase().includes(filters.bairro.toLowerCase())) return false;
    if (filters.precoMin && property.price < parseInt(filters.precoMin)) return false;
    if (filters.precoMax && property.price > parseInt(filters.precoMax)) return false;
    if (filters.quartos !== 'todos' && property.bedrooms !== parseInt(filters.quartos)) return false;
    if (filters.banheiros !== 'todos' && property.bathrooms !== parseInt(filters.banheiros)) return false;
    if (filters.vagas !== 'todos' && property.parking !== parseInt(filters.vagas)) return false;
    if (filters.areaMin && property.area < parseInt(filters.areaMin)) return false;
    if (filters.areaMax && property.area > parseInt(filters.areaMax)) return false;
    return true;
  });

  return (
    <section id="buscar-imoveis" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Encontre seu Imóvel Ideal
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Use nossos filtros avançados para encontrar o imóvel perfeito para você
          </p>
        </div>

        {/* Formulário de Filtros */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Tipo de Imóvel */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Imóvel
              </label>
              <select
                value={filters.tipo}
                onChange={(e) => handleFilterChange('tipo', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="todos">Todos os tipos</option>
                <option value="Casa">Casa</option>
                <option value="Apartamento">Apartamento</option>
                <option value="Terreno">Terreno</option>
                <option value="Sala Comercial">Sala Comercial</option>
                <option value="Loja">Loja</option>
                <option value="Galpão">Galpão</option>
                <option value="Sítio">Sítio</option>
              </select>
            </div>

            {/* Tipo de Negócio */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Negócio
              </label>
              <select
                value={filters.negocio}
                onChange={(e) => handleFilterChange('negocio', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="todos">Todos</option>
                <option value="Venda">Venda</option>
                <option value="Aluguel">Aluguel</option>
                <option value="Venda/Aluguel">Venda/Aluguel</option>
              </select>
            </div>

            {/* Cidade */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cidade
              </label>
              <input
                type="text"
                placeholder="Digite a cidade"
                value={filters.cidade}
                onChange={(e) => handleFilterChange('cidade', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Bairro */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bairro
              </label>
              <input
                type="text"
                placeholder="Digite o bairro"
                value={filters.bairro}
                onChange={(e) => handleFilterChange('bairro', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Filtros Expandidos */}
          {isExpanded && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 pt-4 border-t border-gray-200">
              {/* Preço Mínimo */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preço Mínimo
                </label>
                <input
                  type="number"
                  placeholder="R$ 0"
                  value={filters.precoMin}
                  onChange={(e) => handleFilterChange('precoMin', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Preço Máximo */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preço Máximo
                </label>
                <input
                  type="number"
                  placeholder="R$ 999.999"
                  value={filters.precoMax}
                  onChange={(e) => handleFilterChange('precoMax', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Quartos */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quartos
                </label>
                <select
                  value={filters.quartos}
                  onChange={(e) => handleFilterChange('quartos', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="todos">Qualquer</option>
                  <option value="1">1 quarto</option>
                  <option value="2">2 quartos</option>
                  <option value="3">3 quartos</option>
                  <option value="4">4+ quartos</option>
                </select>
              </div>

              {/* Banheiros */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Banheiros
                </label>
                <select
                  value={filters.banheiros}
                  onChange={(e) => handleFilterChange('banheiros', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="todos">Qualquer</option>
                  <option value="1">1 banheiro</option>
                  <option value="2">2 banheiros</option>
                  <option value="3">3 banheiros</option>
                  <option value="4">4+ banheiros</option>
                </select>
              </div>

              {/* Vagas de Garagem */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vagas
                </label>
                <select
                  value={filters.vagas}
                  onChange={(e) => handleFilterChange('vagas', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="todos">Qualquer</option>
                  <option value="0">Sem vaga</option>
                  <option value="1">1 vaga</option>
                  <option value="2">2 vagas</option>
                  <option value="3">3+ vagas</option>
                </select>
              </div>

              {/* Área Mínima */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Área Mínima (m²)
                </label>
                <input
                  type="number"
                  placeholder="0"
                  value={filters.areaMin}
                  onChange={(e) => handleFilterChange('areaMin', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Área Máxima */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Área Máxima (m²)
                </label>
                <input
                  type="number"
                  placeholder="999"
                  value={filters.areaMax}
                  onChange={(e) => handleFilterChange('areaMax', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}

          {/* Botões de Ação */}
          <div className="flex flex-wrap gap-3 justify-between items-center">
            <div className="flex gap-3">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors"
              >
                <Icon name="SlidersHorizontal" className="w-4 h-4 mr-2" />
                {isExpanded ? 'Menos filtros' : 'Mais filtros'}
              </button>
              <button
                onClick={clearFilters}
                className="flex items-center px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                <Icon name="RotateCcw" className="w-4 h-4 mr-2" />
                Limpar
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">
                {filteredProperties.length} imóveis encontrados
              </span>
              <div className="flex border border-gray-300 rounded-md overflow-hidden">
                <button
                  onClick={() => setView('grid')}
                  className={`p-2 ${view === 'grid' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Icon name="Grid3X3" className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setView('list')}
                  className={`p-2 ${view === 'list' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Icon name="List" className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className={`grid gap-6 ${view === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {filteredProperties.map(property => (
            <PropertyCard
              key={property.id}
              property={property}
              view={view}
            />
          ))}
        </div>

        {/* Mensagem quando não há resultados */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Home" className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Nenhum imóvel encontrado
            </h3>
            <p className="text-gray-500 mb-4">
              Tente ajustar os filtros para encontrar mais opções
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Limpar todos os filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

// Componente do Card de Propriedade
interface PropertyCardProps {
  property: Property;
  view: 'grid' | 'list';
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, view }) => {
  // Função para formatar preço
  const formatPrice = (price: number, transactionType: string) => {
    const formatted = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
    
    return transactionType === 'Aluguel' ? `${formatted}/mês` : formatted;
  };

  // Função para formatar área
  const formatArea = (area: number) => {
    return `${area}m²`;
  };

  if (view === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-48 md:h-full object-cover"
            />
          </div>
          <div className="md:w-2/3 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 text-xs font-medium text-green-600 bg-green-100 rounded-full">
                    {property.transactionType}
                  </span>
                  <span className="text-xs text-gray-500">#{property.code}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{property.title}</h3>
                <div className="flex items-center mb-4 text-gray-600">
                  <Icon name="MapPin" className="w-4 h-4 mr-2" />
                  <span className="text-sm">{property.location}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="mb-2 text-2xl font-bold text-blue-600">
                  {formatPrice(property.price, property.transactionType)}
                </div>
                <div className="text-sm text-gray-500">{formatArea(property.area)}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Icon name="Bed" className="w-4 h-4 mr-1" />
                <span>{property.bedrooms} quartos</span>
              </div>
              <div className="flex items-center">
                <Icon name="Bath" className="w-4 h-4 mr-1" />
                <span>{property.bathrooms} banheiros</span>
              </div>
              <div className="flex items-center">
                <Icon name="Car" className="w-4 h-4 mr-1" />
                <span>{property.parking} vagas</span>
              </div>
            </div>

            <p className="text-gray-600 mb-4 line-clamp-2">{property.description}</p>

            <div className="flex justify-between items-center">
              <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                Ver detalhes
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                <Icon name="Phone" className="w-4 h-4 mr-2 inline" />
                Contato
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        {property.featured && (
          <div className="absolute top-2 left-2">
            <span className="px-2 py-1 text-xs font-medium text-white bg-orange-500 rounded-full">
              Destaque
            </span>
          </div>
        )}
        {property.new && (
          <div className="absolute top-2 right-2">
            <span className="px-2 py-1 text-xs font-medium text-white bg-green-500 rounded-full">
              Novo
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-1 text-xs font-medium text-green-600 bg-green-100 rounded-full">
            {property.transactionType}
          </span>
          <span className="text-xs text-gray-500">#{property.code}</span>
        </div>
        <h3 className="mb-2 text-lg font-bold text-gray-900">{property.title}</h3>
        <div className="flex items-center mb-3 text-gray-600">
          <Icon name="MapPin" className="w-4 h-4 mr-2" />
          <span className="text-sm">{property.location}</span>
        </div>
        <div className="mb-3 text-2xl font-bold text-blue-600">
          {formatPrice(property.price, property.transactionType)}
        </div>
        <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Icon name="Home" className="w-4 h-4 mr-1" />
            <span>{formatArea(property.area)}</span>
          </div>
          <div className="flex items-center">
            <Icon name="Bed" className="w-4 h-4 mr-1" />
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center">
            <Icon name="Bath" className="w-4 h-4 mr-1" />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center">
            <Icon name="Car" className="w-4 h-4 mr-1" />
            <span>{property.parking}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 px-3 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors text-sm">
            Ver detalhes
          </button>
          <button className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm">
            Contato
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuscarImoveisSection;