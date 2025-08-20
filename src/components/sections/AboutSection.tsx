"use client";

import React from 'react';
import { Icon, type IconName } from '@/utils/iconMapper';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  const values = [
    {
      icon: 'Star',
      title: 'Excelência',
      description: 'Buscamos sempre a perfeição em cada atendimento, negociação e entrega.',
      color: 'blue'
    },
    {
      icon: 'Users',
      title: 'Confiança',
      description: 'Construímos relacionamentos sólidos baseados na transparência e honestidade.',
      color: 'green'
    },
    {
      icon: 'Home',
      title: 'Compromisso',
      description: 'Estamos comprometidos em realizar o sonho da casa própria de cada cliente.',
      color: 'purple'
    },
    {
      icon: 'Clock',
      title: 'Agilidade',
      description: 'Processos eficientes para que você tenha rapidez em todas as etapas.',
      color: 'orange'
    }
  ];

  const team = [
    {
      name: 'Wesley Gomes',
      role: 'Corretor de Imóveis',
      experience: 'Carisma em pessoa',
      description: 'Especialista em negociações de alto valor e atendimento personalizado.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Claudio Noronha',
      role: 'Despachante Imobiliário',
      experience: '35 anos de experiência',
      description: 'Responsável pela gestão estratégica e relacionamento com clientes.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b97c?w=300&h=300&fit=crop&crop=face'
    }
  ];
{/*
  const achievements = [
    { number: '20+', label: 'Anos no Mercado', color: 'blue' },
    { number: '1.500+', label: 'Imóveis Vendidos', color: 'green' },
    { number: '98%', label: 'Satisfação dos Clientes', color: 'purple' },
    { number: '50+', label: 'Bairros Atendidos', color: 'orange' }
  ];
  */}

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
      green: 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white',
      purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
      orange: 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="min-h-screen py-24 mt-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="inline-block px-6 py-3 mb-6 text-sm font-bold text-blue-600 bg-blue-100 border border-blue-200 rounded-full">
            <Icon name="Users" className="inline w-4 h-4 mr-2" />
            Nossa História
          </div>
          
          <h2 className="mb-8 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
            Quem <span className="text-blue-600">Somos</span>
          </h2>
          
          <p className="max-w-4xl mx-auto text-xl leading-relaxed text-gray-600">
            Há mais de 20 anos, a <span className="font-semibold text-blue-600">Gomes & Noronha</span> tem 
            sido sinônimo de confiança e excelência no mercado imobiliário de Juiz de Fora. 
            Nossa missão é transformar sonhos em endereços.
          </p>
        </div>

        {/* Achievements Grid 
        <div className="grid grid-cols-2 gap-8 mb-24 lg:grid-cols-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className={`w-20 h-20 ${getColorClasses(achievement.color)} rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 shadow-lg`}>
                <span className="text-2xl font-bold">{achievement.number}</span>
              </div>
              <div className="text-lg font-medium text-gray-600">{achievement.label}</div>
            </div>
          ))}
        </div>
        */}

        {/* Main Content - Two Columns */}
        <div className="grid items-center gap-20 mb-24 lg:grid-cols-2">
          
          {/* Left Content */}
          <div>
            <h3 className="mb-8 text-4xl font-bold leading-tight text-gray-900">
              Mais que uma Imobiliária, 
              <span className="text-blue-600"> uma Família</span>
            </h3>
            
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                A <strong>Gomes & Noronha</strong> nasceu em 2004 com uma visão clara: 
                revolucionar o mercado imobiliário de Juiz de Fora através do atendimento 
                personalizado e da busca constante pela excelência.
              </p>
              
              <p>
                Ao longo de mais de duas décadas, construímos nossa reputação baseada 
                em três pilares fundamentais: <strong>transparência</strong>, 
                <strong> confiabilidade</strong> e <strong>compromisso</strong> 
                com a realização dos sonhos de nossos clientes.
              </p>
              
              <p>
                Hoje, somos uma das imobiliárias mais respeitadas da região, 
                com um portfólio diversificado que inclui imóveis residenciais, 
                comerciais e terrenos em toda Juiz de Fora e região metropolitana.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                <Icon name="Star" className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="font-semibold text-gray-900">Nossa Missão</div>
                  <div className="text-gray-600">Conectar pessoas aos seus imóveis ideais com excelência e confiança</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                <Icon name="ExternalLink" className="w-6 h-6 text-green-600" />
                <div>
                  <div className="font-semibold text-gray-900">Nossa Visão</div>
                  <div className="text-gray-600">Ser a imobiliária de referência em Minas Gerais até 2030</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Diferenciais */}
          <div>
            <h4 className="mb-8 text-2xl font-bold text-gray-900">
              Por que Escolher a <span className="text-blue-600">Gomes & Noronha?</span>
            </h4>
            
            <div className="space-y-6">
              
              {/* Diferencial 1 */}
              <div className="flex items-start gap-4 p-6 transition-colors duration-300 border-l-4 border-blue-600 bg-blue-50 rounded-xl hover:bg-blue-100">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl">
                  <Icon name="Users" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="mb-2 text-lg font-bold text-gray-900">Atendimento Personalizado</h5>
                  <p className="text-gray-600">
                    Cada cliente é único. Oferecemos consultoria especializada e acompanhamento 
                    completo durante todo o processo de compra ou venda.
                  </p>
                </div>
              </div>

              {/* Diferencial 2 */}
              <div className="flex items-start gap-4 p-6 transition-colors duration-300 border-l-4 border-purple-600 bg-purple-50 rounded-xl hover:bg-purple-100">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-purple-600 rounded-xl">
                  <Icon name="ExternalLink" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="mb-2 text-lg font-bold text-gray-900">Tecnologia Moderna</h5>
                  <p className="text-gray-600">
                    Plataforma digital completa com tours virtuais, documentação online 
                    e processo de negociação ágil e transparente.
                  </p>
                </div>
              </div>

              {/* Diferencial 3 */}
              <div className="flex items-start gap-4 p-6 transition-colors duration-300 border-l-4 border-orange-600 bg-orange-50 rounded-xl hover:bg-orange-100">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-orange-600 rounded-xl">
                  <Icon name="FileText" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="mb-2 text-lg font-bold text-gray-900">Transparência Total</h5>
                  <p className="text-gray-600">
                    Informações claras sobre preços, documentação e processos. 
                    Sem taxas ocultas ou surpresas desagradáveis.
                  </p>
                </div>
              </div>

              {/* Diferencial 4 */}
              <div className="flex items-start gap-4 p-6 transition-colors duration-300 border-l-4 border-indigo-600 bg-indigo-50 rounded-xl hover:bg-indigo-100">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-xl">
                  <Icon name="Clock" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="mb-2 text-lg font-bold text-gray-900">Suporte Completo</h5>
                  <p className="text-gray-600">
                    Acompanhamos você desde a primeira visita até a entrega das chaves, 
                    incluindo toda documentação e financiamento.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button className="flex items-center justify-center w-full gap-2 px-6 py-4 text-lg font-bold text-white transition-all duration-300 transform shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 hover:scale-105">
                <Icon name="Phone" className="w-5 h-5" />
                Fale Conosco Agora
              </button>
            </div>
          </div>
          </div>

        {/* Values Section */}
        <div className="mb-24">
          <h3 className="mb-16 text-4xl font-bold text-center text-gray-900">
            Nossos <span className="text-blue-600">Valores</span>
          </h3>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="p-8 text-center transition-all duration-300 transform bg-white border border-gray-100 shadow-lg group rounded-2xl hover:shadow-xl hover:-translate-y-2">
                <div className={`w-16 h-16 ${getColorClasses(value.color)} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300`}>
                  <Icon name={value.icon as IconName} className="w-8 h-8 transition-colors duration-300" />
                </div>
                
                <h4 className="mb-4 text-xl font-bold text-gray-900">{value.title}</h4>
                <p className="leading-relaxed text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="mb-16 text-4xl font-bold text-center text-gray-900">
            Conheça Nossa <span className="text-blue-600">Equipe</span>
          </h3>
          
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member, index) => (
              <div key={index} className="overflow-hidden transition-all duration-300 transform bg-white shadow-lg rounded-2xl hover:shadow-xl hover:-translate-y-2">
                
                {/* Photo */}
                <div className="relative">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    className="object-cover w-full h-64"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute text-white bottom-4 left-4">
                    <div className="text-sm opacity-90">{member.experience}</div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h4 className="mb-2 text-xl font-bold text-gray-900">{member.name}</h4>
                  <div className="mb-4 font-semibold text-blue-600">{member.role}</div>
                  <p className="leading-relaxed text-gray-600">{member.description}</p>
                  
                  <div className="flex gap-3 mt-6">
                    <button className="flex-1 px-4 py-2 text-sm font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
                      Falar com {member.name.split(' ')[0]}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="p-12 mt-24 text-center text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl">
          <h3 className="mb-4 text-3xl font-bold">
            Pronto para encontrar seu próximo imóvel?
          </h3>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-blue-100">
            Nossa equipe especializada está pronta para ajudá-lo a encontrar 
            o imóvel perfeito. Entre em contato conosco hoje mesmo!
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="px-8 py-4 font-bold text-blue-600 transition-colors bg-white rounded-xl hover:bg-gray-100">
              Ver Imóveis Disponíveis
            </button>
            <button className="px-8 py-4 font-bold text-white transition-colors bg-blue-500 rounded-xl hover:bg-blue-400">
              Falar com Consultor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;