"use client";

import { useState } from 'react';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/Footer';
import { DespachanteSection } from '@/components/sections';

export default function DespachantePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Função placeholder para setActiveSection (não usado nesta página)
  const handleSectionChange = (section: string) => {
    // Para navegação entre páginas, poderia usar router.push() aqui
    console.log('Navigate to:', section);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        activeSection="despachante"
        setActiveSection={handleSectionChange}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <main>
        <DespachanteSection />
      </main>
      
      <Footer />
    </div>
  );
}