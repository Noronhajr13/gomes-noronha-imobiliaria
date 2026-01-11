"use client";

import { useState, useEffect, useMemo } from 'react';
import { fetchPropertyTypes } from '@/services/api';

export interface PropertyTypeOption {
  value: string;
  label: string;
}

// Mapeamento de tipos da API para labels amigáveis
const typeLabels: Record<string, string> = {
  APARTAMENTO: 'Apartamento',
  CASA: 'Casa',
  COBERTURA: 'Cobertura',
  COMERCIAL: 'Comercial',
  FAZENDA: 'Fazenda',
  FLAT: 'Flat',
  GALPAO: 'Galpão',
  KITNET: 'Kitnet/Studio',
  LOJA: 'Loja',
  RURAL: 'Rural',
  SALA_COMERCIAL: 'Sala Comercial',
  SITIO: 'Sítio/Chácara',
  SOBRADO: 'Sobrado',
  TERRENO: 'Terreno',
};

/**
 * Hook para buscar tipos de imóvel da API
 * Retorna options formatadas para select com "Todos os tipos" como primeiro item
 */
export function usePropertyTypes() {
  const [propertyTypes, setPropertyTypes] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadPropertyTypes() {
      try {
        setIsLoading(true);
        setError(null);
        const types = await fetchPropertyTypes();

        if (isMounted) {
          setPropertyTypes(types);
        }
      } catch (err) {
        if (isMounted) {
          setError('Erro ao carregar tipos de imóvel');
          console.error('Erro ao carregar tipos de imóvel:', err);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadPropertyTypes();

    return () => {
      isMounted = false;
    };
  }, []);

  // Converter para formato de options do select
  const propertyTypeOptions: PropertyTypeOption[] = useMemo(() => {
    const options: PropertyTypeOption[] = [
      { value: 'todos', label: 'Todos os tipos' }
    ];

    propertyTypes.forEach(type => {
      options.push({
        value: type,
        label: typeLabels[type] || type
      });
    });

    return options;
  }, [propertyTypes]);

  return {
    propertyTypes,
    propertyTypeOptions,
    isLoading,
    error
  };
}

export default usePropertyTypes;
