"use client";

import { useState } from 'react';
import Header from '@/components/site/layout/header/Header';
import Footer from '@/components/site/layout/footer/Footer';
import BuscarImoveisSection from '@/components/site/sections/BuscarImoveisSection';
import { useNavigation } from '@/hooks/useNavigation';

export default function ImoveisPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { handleSectionChange } = useNavigation();

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
