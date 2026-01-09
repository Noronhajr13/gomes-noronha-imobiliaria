"use client";

import { useState } from 'react';
import Header from '@/components/site/layout/header/Header';
import Footer from '@/components/site/layout/footer/Footer';
import { AboutSection } from '@/components/site/sections';
import { useNavigation } from '@/hooks/useNavigation';

export default function QuemSomosClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { handleSectionChange } = useNavigation();

  return (
    <div className="min-h-screen bg-white">
      <Header
        activeSection="quemsomos"
        setActiveSection={handleSectionChange}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main>
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
}
