"use client";

import React from 'react';
import { companyInfo, footerLinks, navigationItems, formatPhone } from '@/data/MockData';
import { SocialLinks, Logo } from '@/components/site/ui';
import { Icon } from '@/utils/iconMapper';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden text-white bg-black">
        <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <Logo 
                  variant="footer"
                  theme="dark"
                  size="lg"
                  className="mb-6"
                />
                
                <div className="space-y-2 text-sm text-gray-400">
                  <p><strong>Endereço:</strong> {companyInfo.address.street}, {companyInfo.address.number}, {companyInfo.address.neighborhood}, {companyInfo.address.city}/{companyInfo.address.state}</p>
                  <p><strong>WhatsApp:</strong> {formatPhone(companyInfo.contact.mobile)}</p>
                  <p><strong>Email:</strong> {companyInfo.contact.email}</p>
                </div>
              </div>

              <SocialLinks />
            </div>

            <div>
              <h4 className="flex items-center mb-6 text-lg font-bold">
                <Icon name="ExternalLink" className="w-5 h-5 mr-2 text-white" />
                Links Rápidos
              </h4>
              <ul className="space-y-3">
                {navigationItems.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="flex items-center text-gray-300 transition-colors duration-300 transform hover:text-white hover:translate-x-1 group">
                      <Icon name="ArrowRight" className="w-4 h-4 mr-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="flex items-center mb-6 text-lg font-bold">
                <Icon name="Building" className="w-5 h-5 mr-2 text-white" />
                Imóveis
              </h4>
              <ul className="space-y-3">
                {footerLinks.imoveis.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="flex items-center text-sm text-gray-300 transition-colors duration-300 transform hover:text-white hover:translate-x-1 group">
                      <Icon name="ArrowRight" className="w-3 h-3 mr-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-6 px-4 py-8 mx-auto border-t border-gray-700 max-w-7xl sm:px-6 lg:px-8 md:flex-row">
          <div className="flex flex-col items-center gap-4 text-sm text-gray-400 md:flex-row">
            <p>&copy; {currentYear} Site desenvolvido pela CN CONECTA.</p>
          </div>
          
          <div className="flex flex-col items-center gap-4 text-sm text-gray-400 md:flex-row">
              <a href="https://www.cnconecta.com.br" className="text-white">www.cnconecta.com.br</a>
          </div>
        </div>
    </footer>
  );
};

export default Footer;