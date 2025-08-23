"use client";

import React from 'react';
import { companyInfo, footerLinks, navigationItems, formatPhone } from '@/data/MockData';
import { SocialLinks, Logo } from '@/components/ui';
import { Icon } from '@/utils/iconMapper';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden text-white bg-gradient-to-br from-black via-gray-900 to-black">
      
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 rounded-full w-96 h-96 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 bg-gray-600 rounded-full w-96 h-96 blur-3xl"></div>
      </div>

      <div className="relative z-10">

        {/* Main Footer Content */}
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            
            {/* Company Info */}
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
                  <p><strong>Telefone:</strong> {formatPhone(companyInfo.contact.phone)}</p>
                  <p><strong>WhatsApp:</strong> {formatPhone(companyInfo.contact.mobile)}</p>
                  <p><strong>Email:</strong> {companyInfo.contact.email}</p>
                </div>
              </div>
              
              {/* Social Links */}
              <SocialLinks />
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="flex items-center mb-6 text-lg font-bold">
                <Icon name="ExternalLink" className="w-5 h-5 mr-2 text-green-400" />
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
            
            {/* Imóveis Links */}
            <div>
              <h4 className="flex items-center mb-6 text-lg font-bold">
                <Icon name="Building" className="w-5 h-5 mr-2 text-green-400" />
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
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex flex-col items-center gap-4 text-sm text-gray-400 md:flex-row">
                <p>&copy; {currentYear} Site desenvolvido pela CN CONECTA.</p>
              </div>
              
              <div className="flex gap-6 text-sm">
                {footerLinks.suporte.slice(3).map((link, index) => (
                  <a key={index} href={link.href} className="text-gray-400 transition-colors duration-300 hover:text-white">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;