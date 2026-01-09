"use client";

import React from 'react';
import Container from '../ui/Container';
import { Text, Button } from '@/components/site/ui';
import { ValueCard, TeamMemberCard } from '@/components/site/about';
import {
  companyInfo,
  companyValues,
  teamMembers,
  getWhatsAppUrl
} from '@/data/MockData';
import { type IconName } from '@/utils/iconMapper';
import CompanySection from './CompanySection';

const AboutSection: React.FC = () => {
  const handleContactTeam = () => {
    const message = `Olá! Gostaria de falar sobre imóveis com a equipe da ${companyInfo.name}.`;
    const whatsappUrl = getWhatsAppUrl(companyInfo.contact.whatsapp, message);
    window.open(whatsappUrl, '_blank');
  };

  const handleViewProperties = () => {
    // Futuramente: navegação para página de imóveis
    window.location.href = '/imoveis';
  };

  return (
    <Container title="Quem Somos" subtitle={companyInfo.description + ' ' + companyInfo.tagline}>
      <CompanySection />

      <div className="mb-24">
        <Text as="h3" variant="primary" className="mb-16 text-4xl font-bold text-center">
          Nossos <span className="text-green-600">Valores</span>
        </Text>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {companyValues.map((value) => (
            <ValueCard
              key={value.title}
              icon={value.icon as IconName}
              title={value.title}
              description={value.description}
              variant={value.variant as 'primary' | 'secondary' | 'success' | 'warning'}
            />
          ))}
        </div>
      </div>

      <div>
        <Text as="h3" variant="primary" className="mb-16 text-4xl text-center">
          Conheça Nossa <span className="font-bold">EQUIPE</span>
        </Text>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.name}
              member={member}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="p-12 mt-24 text-center text-white bg-gradient-to-r from-green-600 to-green-700 rounded-3xl">
        <Text as="h3" variant="white" className="mb-4 text-3xl font-bold">
          Pronto para encontrar seu próximo imóvel?
        </Text>
        <Text className="max-w-2xl mx-auto mb-8 text-lg text-green-100">
          Nossa equipe especializada está pronta para ajudá-lo a encontrar 
          o imóvel perfeito. Entre em contato conosco hoje mesmo!
        </Text>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            variant="secondary"
            size="lg"
            onClick={handleViewProperties}
            className="px-8 py-4 font-bold text-green-600 bg-white hover:bg-gray-100"
          >
            Ver Imóveis Disponíveis
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={handleContactTeam}
            className="px-8 py-4 font-bold text-white border-white hover:bg-white hover:text-green-600"
          >
            Falar com Consultor
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default AboutSection;