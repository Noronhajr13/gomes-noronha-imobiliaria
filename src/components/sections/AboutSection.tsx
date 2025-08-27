"use client";

import React from 'react';
import { Section, Text, Button } from '@/components/ui';
import { ValueCard, TeamMemberCard, FeatureHighlight, CompanyMission } from '@/components/about';
import StatsGrid from '@/components/stats/StatsGrid';
import { 
  companyInfo, 
  companyStats, 
  companyValues, 
  companyFeatures, 
  teamMembers,
  getWhatsAppUrl 
} from '@/data/MockData';
import { Icon, type IconName } from '@/utils/iconMapper';

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
    <div className="min-h-screen mt-8 bg-white">
      <Section variant="DEFAULT" className="py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

          <div className="mb-24 text-center">
            <Text as="h2" variant="primary" className="mb-8 text-5xl font-extrabold leading-tight md:text-6xl">
              Quem Somos
            </Text>
            
            <Text variant="secondary" className="max-w-4xl mx-auto text-xl leading-relaxed">
              {companyInfo.description} {companyInfo.tagline}. 
            </Text>
          </div>

          <div className="mt-24 mb-24">
            <StatsGrid stats={companyStats} />
          </div>

          {/* Main Content - Two Columns */}
          <div className="grid items-center gap-20 mb-24 lg:grid-cols-2">
            
            {/* Left Content */}
            <div>
              <Text as="h3" variant="primary" className="mb-8 text-4xl font-bold leading-tight">
                Mais que uma Imobiliária, 
                <span className="text-green-600"> uma Família</span>
              </Text>
              
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <Text variant="secondary">
                  {companyInfo.story.foundation}
                </Text>
                
                <Text variant="secondary">
                  {companyInfo.story.journey}
                </Text>
                
                <Text variant="secondary">
                  {companyInfo.story.present}
                </Text>
              </div>

              <CompanyMission 
                mission={companyInfo.mission}
                vision={companyInfo.vision}
                className="mt-8"
              />
            </div>

            {/* Right Content - Diferenciais */}
            <div>
              <Text as="h4" variant="primary" className="mb-8 text-2xl font-bold">
                Por que Escolher a <span className="text-green-600">{companyInfo.name}?</span>
              </Text>
              
              <div className="space-y-6">
                {companyFeatures.map((feature, index) => (
                  <FeatureHighlight
                    key={index}
                    icon={feature.icon as IconName}
                    title={feature.title}
                    description={feature.description}
                    variant={feature.variant as 'primary' | 'secondary' | 'success' | 'warning' | 'purple' | 'orange' | 'indigo'}
                  />
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <Button
                  variant="success"
                  size="lg"
                  onClick={handleContactTeam}
                  className="flex items-center justify-center w-full gap-2"
                >
                  <Icon name="Phone" className="w-5 h-5" />
                  Fale Conosco Agora
                </Button>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-24">
            <Text as="h3" variant="primary" className="mb-16 text-4xl font-bold text-center">
              Nossos <span className="text-green-600">Valores</span>
            </Text>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {companyValues.map((value, index) => (
                <ValueCard
                  key={index}
                  icon={value.icon as IconName}
                  title={value.title}
                  description={value.description}
                  variant={value.variant as 'primary' | 'secondary' | 'success' | 'warning'}
                />
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div>
            <Text as="h3" variant="primary" className="mb-16 text-4xl text-center">
              Conheça Nossa <span className="font-bold">EQUIPE</span>
            </Text>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <TeamMemberCard
                  key={index}
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
        </div>
      </Section>
    </div>
  );
};

export default AboutSection;