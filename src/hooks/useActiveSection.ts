"use client";

import { useState, useCallback } from 'react';

export const useActiveSection = (initialSection: string = 'inicio') => {
  const [activeSection, setActiveSection] = useState(initialSection);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const changeSection = useCallback((section: string) => {
    setActiveSection(section);
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