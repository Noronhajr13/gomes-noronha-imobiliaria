"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/site/layout/header/Header';
import Footer from '@/components/site/layout/footer/Footer';
import { AboutSection } from '@/components/site/sections';

export default function QuemSomosPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  // Função para navegação entre páginas
  const handleSectionChange = (section: string) => {
    const routes: { [key: string]: string } = {
      'home': '/',
      'imoveis': '/imoveis',
      'quemsomos': '/quemsomos',
      'despachante': '/despachante',
      'anunciar': '/anunciar',
      'contato': '/#contato'
    };

    if (routes[section]) {
      router.push(routes[section]);
    }
  };

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