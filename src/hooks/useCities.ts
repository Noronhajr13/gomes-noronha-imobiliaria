"use client";

import { useState, useEffect, useCallback } from 'react';
import { fetchCities, City } from '@/services/api';

export interface UseCitiesReturn {
  cities: City[];
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

/**
 * Hook para buscar e gerenciar cidades do CRM
 */
export function useCities(): UseCitiesReturn {
  const [cities, setCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadCities = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchCities();
      setCities(data);
    } catch (err) {
      console.error('Erro ao carregar cidades:', err);
      setError('Erro ao carregar cidades');
      setCities([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCities();
  }, [loadCities]);

  return {
    cities,
    isLoading,
    error,
    refetch: loadCities,
  };
}

/**
 * Converte lista de cidades para opções de select
 */
export function citiesToSelectOptions(cities: City[]): { value: string; label: string }[] {
  return cities.map(city => ({
    value: city.id,
    label: `${city.name} - ${city.state}`,
  }));
}

export default useCities;
