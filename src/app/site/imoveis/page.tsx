"use client";

import { useState } from 'react';
import Header from '@/components/site/layout/header/Header';
import Footer from '@/components/site/layout/footer/Footer';
import BuscarImoveisSection from '@/components/site/sections/BuscarImoveisSection';

export default function ImoveisPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Função placeholder para setActiveSection (não usado nesta página)
  const handleSectionChange = (section: string) => {
    // Para navegação entre páginas, poderia usar router.push() aqui
    console.log('Navigate to:', section);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        activeSection="imoveis"
        setActiveSection={handleSectionChange}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <main>
        <BuscarImoveisSection />
      </main>
      
      <Footer />
    </div>
  );
}