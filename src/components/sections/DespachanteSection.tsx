"use client";

import React from 'react';
import { Icon, type IconName } from '@/utils/iconMapper';
import { companyInfo } from '@/data/MockData';

const DespachanteSection: React.FC = () => {
  const services = [
    {
      icon: 'FileText',
      title: 'Documentação Imobiliária',
      description: 'Regularização completa de documentos para compra e venda de imóveis.'
    },
    {
      icon: 'Shield',
      title: 'IPTU e Taxas',
      description: 'Quitação de débitos municipais e regularização fiscal do imóvel.'
    },
    {
      icon: 'Users',
      title: 'Inventários',
      description: 'Processamento de inventários e partilhas de bens imobiliários.'
    },
    {
      icon: 'MapPin',
      title: 'Certidões',
      description: 'Emissão de certidões negativas e documentos cartoriais necessários.'
    }
  ];

  return (
    <div className="min-h-screen py-24 bg-gray-50">
      <div className="max-w-6xl px-4 mx-auto">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Serviços de <span className="text-green-600">Despachante</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Cuidamos de toda a documentação do seu imóvel com agilidade e segurança jurídica.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 text-center transition-all duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-white bg-green-600 rounded-full">
                <Icon name={service.icon as IconName} className="w-8 h-8" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="p-8 mt-16 text-center text-white bg-green-600 rounded-xl">
          <h3 className="mb-4 text-2xl font-bold">
            Precisa de ajuda com documentação?
          </h3>
          <p className="mb-6 text-green-100">
            Nossa equipe especializada está pronta para cuidar de toda a papelada do seu imóvel.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${companyInfo.contact.phone}`}
              className="flex items-center gap-2 px-6 py-3 font-semibold text-green-600 transition-colors bg-white rounded-lg hover:bg-gray-100"
            >
              <Icon name="Phone" className="w-5 h-5" />
              Ligar Agora
            </a>
            <a
              href={`https://wa.me/55${companyInfo.contact.whatsapp}?text=Olá! Preciso de ajuda com serviços de despachante.`}
              className="flex items-center gap-2 px-6 py-3 font-semibold text-white transition-colors bg-green-700 rounded-lg hover:bg-green-800"
            >
              <Icon name="MessageCircle" className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DespachanteSection;