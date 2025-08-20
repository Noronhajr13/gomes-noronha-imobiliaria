"use client";

import React, { useState, useEffect } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { Icon } from '@/utils/iconMapper';
import { cn } from '@/utils/helpers';
import NavigationItem from '@/components/header/NavigationItem';
import ContactInfo from '@/components/header/ContactInfo';
import MobileMenu from '@/components/header/MobileMenu';

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

  const handleContactClick = () => {
    setActiveSection('contato');
  };

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500",
      // FUNDO PRETO SEMPRE
      "bg-black/95 backdrop-blur-md shadow-lg border-b border-gray-800"
    )}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          
          {/* Logo */}
          <img 
            src={""}
            alt="Gomes Noronha Imobiliária" 
            onClick={() => handleSectionChange('home')}
          />

          {/* Desktop Navigation */}
          <nav className="hidden space-x-2 md:flex">
            {siteConfig.navigation.map((item, index) => (
              <NavigationItem
                key={item.id}
                id={item.id}
                name={item.name}
                icon={item.icon}
                isActive={activeSection === item.id}
                onClick={handleSectionChange}
                variant="dark" // Para funcionar no fundo preto
                index={index}
              />
            ))}
          </nav>

          {/* Contact Info */}
          <ContactInfo 
            phone={siteConfig.contact.phone}
            onContactClick={handleContactClick}
            variant="dark" // Para funcionar no fundo preto
          />

          {/* Mobile menu button */}
          <button 
            className="relative p-3 transition-colors duration-300 md:hidden rounded-xl hover:bg-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {/* Hamburger animado - BRANCO para fundo preto */}
            <div className="relative w-6 h-6">
              <span className={cn(
                "absolute block h-0.5 w-6 bg-white transform transition-all duration-300",
                mobileMenuOpen ? "rotate-45 top-3" : "top-1"
              )}></span>
              <span className={cn(
                "absolute block h-0.5 w-6 bg-white transform transition-all duration-300 top-3",
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              )}></span>
              <span className={cn(
                "absolute block h-0.5 w-6 bg-white transform transition-all duration-300",
                mobileMenuOpen ? "-rotate-45 top-3" : "top-5"
              )}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <MobileMenu 
          isOpen={mobileMenuOpen}
          navigation={siteConfig.navigation}
          activeSection={activeSection}
          phone={siteConfig.contact.phone}
          onNavigate={handleSectionChange}
          onContactClick={handleContactClick}
          variant="dark" // Para funcionar no fundo preto
        />
      </div>
    </header>
  );
};

export default Header;