"use client";

import { useState, useEffect, useMemo } from 'react';
import { fetchPropertyPurposes } from '@/services/api';

export interface PropertyPurposeOption {
  value: string;
  label: string;
}

// Mapeamento de tipos de negócio da API para labels amigáveis
const purposeLabels: Record<string, string> = {
  VENDA: 'Venda',
  ALUGUEL: 'Aluguel',
};

/**
 * Hook para buscar tipos de negócio (finalidades) da API
 * Retorna options formatadas para select com "Todos" como primeiro item
 */
export function usePropertyPurposes() {
  const [propertyPurposes, setPropertyPurposes] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadPropertyPurposes() {
      try {
        setIsLoading(true);
        setError(null);
        const purposes = await fetchPropertyPurposes();

        if (isMounted) {
          setPropertyPurposes(purposes);
        }
      } catch (err) {
        if (isMounted) {
          setError('Erro ao carregar tipos de negócio');
          console.error('Erro ao carregar tipos de negócio:', err);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadPropertyPurposes();

    return () => {
      isMounted = false;
    };
  }, []);

  // Converter para formato de options do select
  const propertyPurposeOptions: PropertyPurposeOption[] = useMemo(() => {
    const options: PropertyPurposeOption[] = [
      { value: 'todos', label: 'Todos' }
    ];

    propertyPurposes.forEach(purpose => {
      options.push({
        value: purpose,
        label: purposeLabels[purpose] || purpose
      });
    });

    return options;
  }, [propertyPurposes]);

  return {
    propertyPurposes,
    propertyPurposeOptions,
    isLoading,
    error
  };
}

export default usePropertyPurposes;
