import { useEffect } from 'react';
import { companyInfo } from '@/data/MockData';

/**
 * Hook para pré-carregar as imagens do logo
 * Melhora a performance ao carregar as imagens antes de serem necessárias
 */
export const useLogoPreload = () => {
  useEffect(() => {
    // Lista de logos para pré-carregar
    const logoUrls = [
      companyInfo.logo,
      companyInfo.logoWhite,
      companyInfo.logoCompact,
      companyInfo.favicon
    ].filter(Boolean); // Remove valores null/undefined

    // Pré-carregar cada imagem
    logoUrls.forEach((url) => {
      if (url && url !== "/logo.png") { // Só carrega se não for o placeholder padrão
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = url;
        document.head.appendChild(link);
      }
    });

    // Cleanup não é necessário para preload links
  }, []);
};

/**
 * Hook para detectar se as imagens do logo estão disponíveis
 */
export const useLogoAvailability = () => {
  const hasMainLogo = companyInfo.logo && companyInfo.logo !== "/logo.png";
  const hasWhiteLogo = companyInfo.logoWhite && companyInfo.logoWhite !== "/logo-white.png";
  const hasCompactLogo = companyInfo.logoCompact && companyInfo.logoCompact !== "/logo-compact.png";

  return {
    hasMainLogo,
    hasWhiteLogo,
    hasCompactLogo,
    hasAnyLogo: hasMainLogo || hasWhiteLogo || hasCompactLogo
  };
};