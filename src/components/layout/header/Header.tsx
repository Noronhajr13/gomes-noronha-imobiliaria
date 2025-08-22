"use client";

import React, { useState, useEffect } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { Icon } from '@/utils/iconMapper';
import { cn } from '@/utils/helpers';
import NavigationItem from '@/components/layout/header/NavigationItem';
import ContactInfo from '@/components/layout/header/ContactInfo';
import MobileMenu from '@/components/layout/header/MobileMenu';
import Image from 'next/image';

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
      scrolled 
        ? "bg-black shadow-lg border-b border-gray-200" 
        : "bg-black/95 backdrop-blur-md shadow-sm border-b border-gray-200"
    )}>
      <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          
          {/* CRECI e Logo*/}
          <div className="flex items-center gap-4">
            {/* CRECI Badge - Desktop */}
            <div className="hidden lg:flex items-center bg-white text-black px-3 py-1.5 rounded-full">
              <Icon name="Award" className="w-4 h-4 mr-2" />
              <span className="text-xs font-semibold">CRECI PJ 9297</span>
            </div>
            
            {/* Logo - Quando você tiver a imagem, substitua por: */}
            {/* <Image 
              src="/logo.png"
              alt="Gomes & Noronha Imobiliária" 
              width={160}
              height={50}
              className="w-auto h-12 cursor-pointer"
              onClick={() => handleSectionChange('home')}
              priority
            /> */}
            
            {/* Placeholder da Logo enquanto não tem a imagem */}
            <div 
              onClick={() => handleSectionChange('home')}
              className="flex items-center cursor-pointer"
            >
              <div className="p-2 mr-3 bg-black rounded-lg">
                <Icon name="Home" className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-sm font-bold text-white">Gomes & Noronha</h1>
                <p className="text-xs text-gray-300">Negócios Imobiliários</p>
              </div>
            </div>
          </div>
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
                variant="light" // Mudamos para light já que o fundo é branco
                index={index}
              />
            ))}
          </nav>

          {/* Contact Info */}
          <ContactInfo 
            phone={siteConfig.contact.phone}
            onContactClick={handleContactClick}
            variant="light" // Mudamos para light já que o fundo é branco
          />

          {/* Mobile menu button */}
          <button 
            className="relative p-3 transition-colors duration-300 md:hidden rounded-xl hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
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
          variant="light"
          showCreci={true} // Nova prop para mostrar CRECI no mobile
        />
      </div>
    </header>
  );
};

export default Header;