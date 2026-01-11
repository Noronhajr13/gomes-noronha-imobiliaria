"use client";

import { useState, useEffect, useCallback } from 'react';
import { fetchNeighborhoods, Neighborhood } from '@/services/api';

export interface UseNeighborhoodsReturn {
  neighborhoods: Neighborhood[];
  isLoading: boolean;
  error: string | null;
  refetch: (cityId?: string) => Promise<void>;
}

/**
 * Hook para buscar e gerenciar bairros do CRM
 * @param cityId - ID da cidade para filtrar bairros (opcional)
 */
export function useNeighborhoods(cityId?: string): UseNeighborhoodsReturn {
  const [neighborhoods, setNeighborhoods] = useState<Neighborhood[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadNeighborhoods = useCallback(async (id?: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchNeighborhoods(id);
      setNeighborhoods(data);
    } catch (err) {
      console.error('Erro ao carregar bairros:', err);
      setError('Erro ao carregar bairros');
      setNeighborhoods([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Só carrega bairros se tiver cityId ou se quiser todos
    if (cityId) {
      loadNeighborhoods(cityId);
    } else {
      // Limpa bairros quando não há cidade selecionada
      setNeighborhoods([]);
    }
  }, [cityId, loadNeighborhoods]);

  return {
    neighborhoods,
    isLoading,
    error,
    refetch: loadNeighborhoods,
  };
}

/**
 * Converte lista de bairros para opções de select
 */
export function neighborhoodsToSelectOptions(neighborhoods: Neighborhood[]): { value: string; label: string }[] {
  return neighborhoods.map(neighborhood => ({
    value: neighborhood.id,
    label: neighborhood.name,
  }));
}

export default useNeighborhoods;
