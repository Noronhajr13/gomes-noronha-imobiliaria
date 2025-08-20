"use client";

import React from 'react';
import { Icon } from '@/utils/iconMapper';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: 'Star',
      title: 'Desenvolvimento Web',
      description: 'Criamos sites modernos, responsivos e otimizados para oferecer a melhor experiência do usuário.',
      features: ['React/Next.js', 'Design Responsivo', 'SEO Otimizado', 'Performance'],
      color: 'blue',
      price: 'A partir de R$ 2.500'
    },
    {
      icon: 'Phone',
      title: 'Aplicativos Mobile',
      description: 'Desenvolvemos aplicativos nativos e híbridos para iOS e Android com foco na usabilidade.',
      features: ['React Native', 'Interface Intuitiva', 'Push Notifications', 'Offline First'],
      color: 'purple',
      price: 'A partir de R$ 5.000'
    },
    {
      icon: 'Briefcase',
      title: 'Sistemas Corporativos',
      description: 'Soluções completas para gestão empresarial, desde CRMs até ERPs personalizados.',
      features: ['Dashboard Admin', 'Relatórios', 'Integração APIs', 'Segurança'],
      color: 'green',
      price: 'Sob consulta'
    },
    {
      icon: 'ExternalLink',
      title: 'E-commerce',
      description: 'Lojas virtuais completas com sistema de pagamento, estoque e gestão de pedidos.',
      features: ['Carrinho Completo', 'Pagamentos', 'Gestão Estoque', 'Analytics'],
      color: 'orange',
      price: 'A partir de R$ 4.000'
    },
    {
      icon: 'Users',
      title: 'Consultoria Tech',
      description: 'Orientação estratégica para transformação digital e otimização de processos tecnológicos.',
      features: ['Análise Técnica', 'Roadmap', 'Treinamentos', 'Suporte'],
      color: 'indigo',
      price: 'R$ 200/hora'
    },
    {
      icon: 'Clock',
      title: 'Manutenção & Suporte',
      description: 'Suporte contínuo, atualizações de segurança e melhorias para seus sistemas existentes.',
      features: ['Suporte 24/7', 'Updates', 'Backup', 'Monitoramento'],
      color: 'red',
      price: 'A partir de R$ 500/mês'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'from-blue-500 to-blue-600',
        light: 'bg-blue-50 border-blue-200',
        icon: 'bg-blue-100 text-blue-600',
        text: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700'
      },
      purple: {
        bg: 'from-purple-500 to-purple-600',
        light: 'bg-purple-50 border-purple-200',
        icon: 'bg-purple-100 text-purple-600',
        text: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700'
      },
      green: {
        bg: 'from-green-500 to-green-600',
        light: 'bg-green-50 border-green-200',
        icon: 'bg-green-100 text-green-600',
        text: 'text-green-600',
        button: 'bg-green-600 hover:bg-green-700'
      },
      orange: {
        bg: 'from-orange-500 to-orange-600',
        light: 'bg-orange-50 border-orange-200',
        icon: 'bg-orange-100 text-orange-600',
        text: 'text-orange-600',
        button: 'bg-orange-600 hover:bg-orange-700'
      },
      indigo: {
        bg: 'from-indigo-500 to-indigo-600',
        light: 'bg-indigo-50 border-indigo-200',
        icon: 'bg-indigo-100 text-indigo-600',
        text: 'text-indigo-600',
        button: 'bg-indigo-600 hover:bg-indigo-700'
      },
      red: {
        bg: 'from-red-500 to-red-600',
        light: 'bg-red-50 border-red-200',
        icon: 'bg-red-100 text-red-600',
        text: 'text-red-600',
        button: 'bg-red-600 hover:bg-red-700'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-24 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-blue-100 text-blue-600 px-6 py-3 rounded-full text-sm font-bold mb-6 border border-blue-200">
            <Icon name="Briefcase" className="w-4 h-4 inline mr-2" />
            Nossos Serviços
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
            Soluções <span className="text-blue-600">Completas</span>
            <span className="block">para seu <span className="text-purple-600">Negócio</span></span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de serviços de desenvolvimento e consultoria 
            para levar sua empresa ao próximo nível digital.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            
            return (
              <div key={index} className="group relative">
                {/* Card Principal */}
                <div className="bg-white rounded-3xl p-8 shadow-strong border-2 border-gray-100 hover:border-gray-200 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
                  
                  {/* Header do Card */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 ${colors.icon} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon name={service.icon as any} className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>

                  {/* Features */}
                  <div className="flex-grow mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Incluído:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className={`w-4 h-4 ${colors.icon} rounded-full flex items-center justify-center flex-shrink-0`}>
                            <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer do Card */}
                  <div className={`border-t-2 ${colors.light} pt-6`}>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-sm text-gray-500">Preço</div>
                        <div className={`text-lg font-bold ${colors.text}`}>{service.price}</div>
                      </div>
                    </div>
                    
                    <button className={`w-full ${colors.button} text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105`}>
                      Saiba Mais
                    </button>
                  </div>
                </div>

                {/* Accent Decoration */}
                <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-r ${colors.bg} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-3xl p-12 shadow-strong border border-gray-100">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Não encontrou o que precisa?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Desenvolvemos soluções personalizadas para atender exatamente às suas necessidades. 
            Entre em contato e vamos conversar sobre seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              <Icon name="Phone" className="w-5 h-5" />
              Solicitar Orçamento
            </button>
            <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2">
              <Icon name="ExternalLink" className="w-5 h-5" />
              Ver Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;