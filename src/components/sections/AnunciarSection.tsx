"use client";

import React, { useState } from 'react';
import { Icon, type IconName } from '@/utils/iconMapper';
import { companyInfo, propertyTypes } from '@/data/MockData';

const AnunciarSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    tipoImovel: '',
    endereco: '',
    preco: '',
    observacoes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    const whatsappMessage = `Olá! Gostaria de anunciar meu imóvel:
Nome: ${formData.nome}
Telefone: ${formData.telefone}
Email: ${formData.email}
Tipo: ${formData.tipoImovel}
Endereço: ${formData.endereco}
Preço: R$ ${formData.preco}
Observações: ${formData.observacoes}`;

    window.open(`https://wa.me/55${companyInfo.contact.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    {
      icon: 'TrendingUp',
      title: 'Melhor Preço',
      description: 'Avaliação gratuita para conseguir o melhor valor de mercado'
    },
    {
      icon: 'Camera',
      title: 'Fotos Profissionais',
      description: 'Fotografias de alta qualidade para destacar seu imóvel'
    },
    {
      icon: 'Globe',
      title: 'Divulgação Ampla',
      description: 'Anunciamos em múltiplas plataformas e redes sociais'
    },
    {
      icon: 'Shield',
      title: 'Segurança Total',
      description: 'Acompanhamento jurídico em todo o processo de venda'
    }
  ];

  return (
    <div className="min-h-screen py-24 bg-white">
      <div className="max-w-6xl px-4 mx-auto">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Anuncie seu <span className="text-green-600">Imóvel</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Vendemos seu imóvel com rapidez e pelo melhor preço. Cuidamos de tudo para você!
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* Benefits */}
          <div>
            <h3 className="mb-8 text-2xl font-bold text-gray-900">
              Por que escolher a Gomes & Noronha?
            </h3>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                  <div className="flex items-center justify-center w-12 h-12 text-white bg-green-600 rounded-lg">
                    <Icon name={benefit.icon as IconName} className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 p-6 mt-8 bg-green-600 rounded-lg">
              <div className="text-center text-white">
                <div className="text-3xl font-bold">100+</div>
                <div className="text-green-100">Imóveis Vendidos</div>
              </div>
              <div className="text-center text-white">
                <div className="text-3xl font-bold">30</div>
                <div className="text-green-100">Dias Médios</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 bg-white shadow-lg rounded-xl">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Solicite uma Avaliação Gratuita
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Tipo de Imóvel *
                </label>
                <select
                  name="tipoImovel"
                  value={formData.tipoImovel}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                >
                  <option value="">Selecione o tipo</option>
                  {propertyTypes.map((type, index) => (
                    <option key={index} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Endereço Completo *
                </label>
                <input
                  type="text"
                  name="endereco"
                  value={formData.endereco}
                  onChange={handleChange}
                  placeholder="Rua, número, bairro, cidade"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Preço Desejado
                </label>
                <input
                  type="text"
                  name="preco"
                  value={formData.preco}
                  onChange={handleChange}
                  placeholder="Ex: 350.000"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Observações
                </label>
                <textarea
                  name="observacoes"
                  value={formData.observacoes}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Informações adicionais sobre o imóvel..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              
              <button
                type="submit"
                className="flex items-center justify-center w-full gap-2 px-6 py-3 font-semibold text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700"
              >
                <Icon name="MessageCircle" className="w-5 h-5" />
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnunciarSection;