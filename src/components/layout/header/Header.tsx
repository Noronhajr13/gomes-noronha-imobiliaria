"use client";

import React, { useState, useEffect } from 'react';
import { companyInfo, navigationItems } from '@/data/MockData';
import { Icon } from '@/utils/iconMapper';
import { cn } from '@/utils/helpers';
import Button from '@/components/ui/Button';
import { Logo } from '@/components/ui';
import NavigationItem from '@/components/layout/header/NavigationItem';
import LoginButton from '@/components/layout/header/LoginButton';
import MobileMenu from '@/components/layout/header/MobileMenu';

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
        ? "bg-black shadow-lg border-b border-gray-100" 
        : "bg-black backdrop-blur-md shadow-sm border-b border-gray-100"
    )}>
      <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center bg-white text-black px-3 py-1.5 rounded-full">
              <Icon name="Award" className="w-4 h-4 mr-2" />
              <span className="text-xs font-semibold">{companyInfo.creci}</span>
            </div>
            <Logo 
              variant="header"
              theme="dark"
              size="md"
              priority={true}
              onClick={() => handleSectionChange('home')}
            />
            <span className="text-xs font-semibold text-white md:hidden">{companyInfo.creci}</span>
          </div>

          <nav className="hidden space-x-2 md:flex">
            {navigationItems.map((item, index) => (
              <NavigationItem
                key={item.id}
                name={item.name}
                icon={item.icon}
                href={item.href}
                isActive={activeSection === item.id}
                index={index}
              />
            ))}
          </nav>
          <Button
            text="Área do corretor"
            variant="inverser"
            size="sm"
            base="card"
            href="/login"
            className="hidden md:flex"
          />
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

        <MobileMenu 
          isOpen={mobileMenuOpen}
          navigation={navigationItems}
          activeSection={activeSection}
          phone={companyInfo.contact.mobile}
          onContactClick={handleContactClick}
          variant="light"
        />
      </div>
    </header>
  );
};

export default Header;