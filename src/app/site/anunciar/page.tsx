"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/site/layout/header/Header';
import Footer from '@/components/site/layout/footer/Footer';
import { AnunciarSection } from '@/components/site/sections';

export default function AnunciarPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  // Função para navegação entre páginas
  const handleSectionChange = (section: string) => {
    const routes: { [key: string]: string } = {
      'home': '/',
      'imoveis': '/site/imoveis',
      'quemsomos': '/site/quemsomos',
      'despachante': '/site/despachante',
      'anunciar': '/site/anunciar',
      'contato': '/#contato'
    };
    
    if (routes[section]) {
      router.push(routes[section]);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        activeSection="anunciar"
        setActiveSection={handleSectionChange}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <main>
        <AnunciarSection />
      </main>
      
      <Footer />
    </div>
  );
}