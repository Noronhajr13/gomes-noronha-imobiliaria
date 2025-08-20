"use client";

import React, { useState, useEffect } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { Icon, IconName } from '@/utils/iconMapper';
import { cn } from '@/utils/helpers';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  activeSection, 
  setActiveSection, 
  mobileMenuOpen, 
  setMobileMenuOpen 
}) => {
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para mudar aparência do header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500",
      scrolled 
        ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50" 
        : "bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-100"
    )}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          
          {/* Logo com animação */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => handleSectionChange('inicio')}
          >
            <div className={cn(
              "relative overflow-hidden rounded-xl font-bold text-xl transition-all duration-300 transform group-hover:scale-105",
              scrolled 
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 shadow-lg" 
                : "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 shadow-md"
            )}>
              {/* Efeito de brilho no hover */}
              <div className="absolute inset-0 transition-transform duration-1000 transform -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full"></div>
              <span className="relative z-10">{siteConfig.siteName}</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-2 md:flex">
            {siteConfig.navigation.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleSectionChange(item.id)}
                className={cn(
                  "relative flex items-center gap-2 font-medium transition-all duration-300 px-4 py-3 rounded-xl group",
                  activeSection === item.id 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg transform scale-105' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                )}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Ícone com animação */}
                <div className={cn(
                  "transition-transform duration-300",
                  activeSection === item.id ? "scale-110" : "group-hover:scale-110"
                )}>
                  <Icon name={item.icon as IconName} className="w-4 h-4" />
                </div>
                
                <span className="relative">
                  {item.name}
                  
                  {/* Underline animado */}
                  <div className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300",
                    activeSection === item.id 
                      ? "w-full opacity-100" 
                      : "w-0 group-hover:w-full opacity-0 group-hover:opacity-100"
                  )}></div>
                </span>

                {/* Badge para seção ativa */}
                {activeSection === item.id && (
                  <div className="absolute w-2 h-2 bg-yellow-400 rounded-full -top-1 -right-1 animate-pulse"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Contact Info - Desktop */}
          <div className="items-center hidden space-x-6 lg:flex">
            {/* Telefone */}
            <a 
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-2 text-gray-600 transition-colors duration-300 hover:text-blue-600 group"
            >
              <div className="flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-blue-50 rounded-xl group-hover:bg-blue-100">
                <Icon name="Phone" className="w-4 h-4" />
              </div>
              <div className="text-sm">
                <div className="font-medium">{siteConfig.contact.phone}</div>
                <div className="text-xs text-gray-500">Ligue agora</div>
              </div>
            </a>

            {/* CTA Button */}
            <button 
              onClick={() => handleSectionChange('contato')}
              className="flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 transform shadow-lg bg-gradient-to-r from-green-500 to-green-600 rounded-xl hover:from-green-600 hover:to-green-700 hover:scale-105"
            >
              <Icon name="Mail" className="w-4 h-4" />
              Orçamento
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="relative p-3 transition-colors duration-300 md:hidden rounded-xl hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {/* Hamburger animado */}
            <div className="relative w-6 h-6">
              <span className={cn(
                "absolute block h-0.5 w-6 bg-gray-700 transform transition-all duration-300",
                mobileMenuOpen ? "rotate-45 top-3" : "top-1"
              )}></span>
              <span className={cn(
                "absolute block h-0.5 w-6 bg-gray-700 transform transition-all duration-300 top-3",
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              )}></span>
              <span className={cn(
                "absolute block h-0.5 w-6 bg-gray-700 transform transition-all duration-300",
                mobileMenuOpen ? "-rotate-45 top-3" : "top-5"
              )}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
          mobileMenuOpen 
            ? "max-h-96 opacity-100 pb-6" 
            : "max-h-0 opacity-0"
        )}>
          <div className="pt-6 border-t border-gray-100">
            <nav className="flex flex-col space-y-2">
              {siteConfig.navigation.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleSectionChange(item.id)}
                  className={cn(
                    "flex items-center gap-4 font-medium transition-all duration-300 text-left p-4 rounded-xl",
                    activeSection === item.id 
                      ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  )}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300",
                    activeSection === item.id 
                      ? 'bg-white/20' 
                      : 'bg-gray-100'
                  )}>
                    <Icon name={item.icon as IconName} className="w-5 h-5" />
                  </div>
                  <span className="text-lg">{item.name}</span>
                  
                  {activeSection === item.id && (
                    <div className="w-2 h-2 ml-auto bg-yellow-400 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
              
              {/* Contact info mobile */}
              <div className="pt-6 mt-4 space-y-4 border-t border-gray-100">
                <a 
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-4 p-4 text-gray-600 transition-colors hover:bg-gray-50 rounded-xl"
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-xl">
                    <Icon name="Phone" className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">{siteConfig.contact.phone}</div>
                    <div className="text-sm text-gray-500">Ligue agora</div>
                  </div>
                </a>
                
                <button 
                  onClick={() => handleSectionChange('contato')}
                  className="flex items-center justify-center w-full gap-2 p-4 font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 rounded-xl"
                >
                  <Icon name="Mail" className="w-5 h-5" />
                  Solicitar Orçamento
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;