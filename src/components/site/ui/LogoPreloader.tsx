"use client";

import { useLogoPreload } from '@/hooks/useLogoPreload';

/**
 * Componente para pré-carregar as imagens do logo
 * Deve ser usado uma vez no layout principal
 */
const LogoPreloader: React.FC = () => {
  useLogoPreload();
  return null; // Não renderiza nada visualmente
};

export default LogoPreloader;