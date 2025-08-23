"use client";

import { useState, useCallback } from 'react';

export const useActiveSection = (initialSection: string = 'home') => {
  const [activeSection, setActiveSection] = useState(initialSection);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Função principal para mudar seção
  const changeSection = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false); // Fecha menu mobile ao navegar
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return {
    activeSection,
    mobileMenuOpen,
    changeSection,
    toggleMobileMenu,
    closeMobileMenu,
    setActiveSection,
    setMobileMenuOpen
  };
};