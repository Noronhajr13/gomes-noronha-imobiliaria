"use client";

import React from 'react';
import Container from '../ui/Container';
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
    <Container title="Serviços de Despachante" subtitle="Cuidamos de toda a documentação do seu imóvel com agilidade e segurança jurídica.">
      <div className="grid gap-8 mt-24 mb-24 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div 
            key={index}
            className="p-6 text-center transition-all duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-2"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-white bg-black rounded-full">
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

      <div className="p-8 mt-16 text-center text-black bg-white rounded-xl">
        <h3 className="mb-4 text-2xl font-bold">
          Precisa de ajuda com documentação?
        </h3>
        <p className="mb-6 text-black">
          Nossa equipe especializada está pronta para cuidar de toda a papelada do seu imóvel.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`https://wa.me/55${companyInfo.contact.despachante}?text=Olá! Preciso de ajuda com serviços de despachante.`}
            className="flex items-center gap-2 px-6 py-3 font-semibold text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700"
          >
            <Icon name="MessageCircle" className="w-5 h-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </Container>
  );
};

export default DespachanteSection;