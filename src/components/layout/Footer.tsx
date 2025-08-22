"use client";

import React from 'react';
import { siteConfig } from '@/data/siteConfig';
import { Icon, IconName } from '@/utils/iconMapper';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Início', id: 'inicio' },
    { name: 'Sobre Nós', id: 'sobre' },
    { name: 'Serviços', id: 'servicos' },
    { name: 'Contato', id: 'contato' }
  ];

  const services = [
    'Desenvolvimento Web',
    'Apps Mobile',
    'E-commerce',
    'Sistemas Corporativos',
    'Consultoria Tech',
    'Suporte & Manutenção'
  ];

  const socialLinks = [
    { 
      name: 'WhatsApp', 
      url: `https://wa.me/5532000000000`, 
      icon: 'Phone',
      color: 'green'
    },
    { 
      name: 'Email', 
      url: `mailto:${siteConfig.contact.email}`, 
      icon: 'Mail',
      color: 'blue'
    },
    { 
      name: 'LinkedIn', 
      url: '#', 
      icon: 'ExternalLink',
      color: 'indigo'
    },
    { 
      name: 'Instagram', 
      url: '#', 
      icon: 'Star',
      color: 'pink'
    }
  ];

  const getSocialColor = (color: string) => {
    const colors = {
      green: 'bg-green-100 text-green-600 hover:bg-green-600 hover:text-white',
      blue: 'bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white',
      indigo: 'bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white',
      pink: 'bg-pink-100 text-pink-600 hover:bg-pink-600 hover:text-white'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <footer className="relative overflow-hidden text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full w-96 h-96 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 bg-purple-500 rounded-full w-96 h-96 blur-3xl"></div>
      </div>

      <div className="relative z-10">
        
        {/* Newsletter Section */}
        <div className="border-b border-gray-700">
          <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="mb-4 text-3xl font-bold">
                Fique por dentro das <span className="text-blue-400">novidades</span>
              </h3>
              <p className="mb-8 text-lg text-gray-300">
                Receba dicas exclusivas sobre tecnologia, desenvolvimento e as últimas tendências do mercado digital.
              </p>
              <div className="flex flex-col max-w-md gap-4 mx-auto sm:flex-row">
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  className="flex-1 px-6 py-4 text-white placeholder-gray-400 border border-gray-600 rounded-xl bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-8 py-4 font-semibold text-white transition-all duration-300 transform shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 hover:scale-105">
                  Inscrever
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="inline-block px-6 py-3 mb-6 text-2xl font-bold text-white shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                  {siteConfig.company.fullName}
                </div>
                <p className="max-w-md mb-6 text-lg leading-relaxed text-gray-300">
                  {siteConfig.company.description}
                </p>
                <p className="leading-relaxed text-gray-400">
                  Transformando ideias em soluções digitais extraordinárias. 
                  Nossa missão é ajudar empresas a crescerem através da tecnologia.
                </p>
              </div>
              
              {/* Social Links */}
              <div>
                <h4 className="flex items-center mb-6 text-lg font-bold">
                  <Icon name="ExternalLink" className="w-5 h-5 mr-2 text-blue-400" />
                  Conecte-se Conosco
                </h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${getSocialColor(social.color)}`}
                      title={social.name}
                    >
                      <Icon name={social.icon as IconName} className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="flex items-center mb-6 text-lg font-bold">
                <Icon name="ExternalLink" className="w-5 h-5 mr-2 text-blue-400" />
                Links Rápidos
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button className="flex items-center text-gray-300 transition-colors duration-300 transform hover:text-white hover:translate-x-1 group">
                      <Icon name="ArrowRight" className="w-4 h-4 mr-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="flex items-center mb-6 text-lg font-bold">
                <Icon name="Briefcase" className="w-5 h-5 mr-2 text-blue-400" />
                Nossos Serviços
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#" className="flex items-center text-sm text-gray-300 transition-colors duration-300 transform hover:text-white hover:translate-x-1 group">
                      <Icon name="ArrowRight" className="w-3 h-3 mr-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex flex-col items-center gap-4 text-sm text-gray-400 md:flex-row">
                <p>&copy; {currentYear} {siteConfig.company.name}. Todos os direitos reservados.</p>
                <div className="hidden w-1 h-1 bg-gray-600 rounded-full md:block"></div>
                <p>Desenvolvido com ❤️ e ☕</p>
              </div>
              
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 transition-colors duration-300 hover:text-white">
                  Política de Privacidade
                </a>
                <a href="#" className="text-gray-400 transition-colors duration-300 hover:text-white">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;