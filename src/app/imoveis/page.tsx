"use client";

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/site/layout/header/Header';
import Footer from '@/components/site/layout/footer/Footer';
import BuscarImoveisSection from '@/components/site/sections/BuscarImoveisSection';
import { useNavigation } from '@/hooks/useNavigation';

// Componente que lê os parâmetros da URL
function ImoveisContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { handleSectionChange } = useNavigation();
  const searchParams = useSearchParams();

  // Extrair filtros da URL
  const initialFilters = {
    tipo: searchParams.get('tipo') || 'todos',
    negocio: searchParams.get('negocio') || 'todos',
    cidadeId: searchParams.get('cidadeId') || '',
    bairroId: searchParams.get('bairroId') || '',
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
        <BuscarImoveisSection initialFilters={initialFilters} />
      </main>

      <Footer />
    </div>
  );
}

// Componente principal com Suspense para useSearchParams
export default function ImoveisPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    }>
      <ImoveisContent />
    </Suspense>
  );
}
