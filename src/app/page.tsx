"use client";

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  HeroSection,
  AboutSection, 
  ServicesSection, 
  ContactSection 
} from '@/components/sections';
import HomeSection from '@/components/sections/HeroSection';
import BuscarImoveisSection from '@/components/sections/BuscarImoveisSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
      case 'inicio':
        return <HomeSection />;
      case 'quem-somos':
        return <AboutSection />;
      case 'buscar':
        return <BuscarImoveisSection />;
      case 'servicos':
        return <ServicesSection />;
      case 'contato':
        return <ContactSection />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <main className="transition-all duration-300">
        {renderContent()}
      </main>
      
      <Footer />
    </div>
  );
}