"use client";

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Mapa centralizado de rotas da aplicação
 */
export const routes: Record<string, string> = {
  'home': '/',
  'imoveis': '/imoveis',
  'quemsomos': '/quemsomos',
  'despachante': '/despachante',
  'anunciar': '/anunciar',
  'contato': '/#contato'
};

/**
 * Hook para navegação centralizada
 * Retorna função handleSectionChange para uso em páginas
 */
export const useNavigation = () => {
  const router = useRouter();

  const handleSectionChange = useCallback((section: string) => {
    const route = routes[section];
    if (route) {
      router.push(route);
    }
  }, [router]);

  const navigateTo = useCallback((path: string) => {
    router.push(path);
  }, [router]);

  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  return {
    handleSectionChange,
    navigateTo,
    goBack,
    routes
  };
};

export default useNavigation;
