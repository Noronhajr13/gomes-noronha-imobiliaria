"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Property, fetchProperties } from '@/services/api';
import PropertyGrid from '@/components/site/property/PropertyGrid';
import { PropertyDisplay } from '@/types/property';
import { toPropertyDisplay } from '@/utils/propertyConverter';

interface RelatedPropertiesProps {
  currentProperty: Property;
}

const RelatedProperties: React.FC<RelatedPropertiesProps> = React.memo(({ currentProperty }) => {
  const [relatedProperties, setRelatedProperties] = useState<PropertyDisplay[]>([]);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer para lazy loading
  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      {
        rootMargin: '100px', // Carregar 100px antes da seção entrar no viewport
        threshold: 0.1
      }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [isVisible]);

  // Carregar imóveis apenas quando a seção estiver visível
  useEffect(() => {
    if (!isVisible) return;

    const loadRelatedProperties = async () => {
      setLoading(true);
      try {
        // Buscar imóveis do mesmo tipo e na mesma cidade, exceto o atual
        const properties = await fetchProperties({
          type: currentProperty.type,
          city: currentProperty.city,
          limit: 4
        });

        // Filtrar o imóvel atual e converter para o formato de exibição
        const filtered = properties
          .filter(p => p.code !== currentProperty.code)
          .slice(0, 3)
          .map(toPropertyDisplay);

        setRelatedProperties(filtered);
      } catch (error) {
        console.error('Erro ao carregar imóveis relacionados:', error);
      } finally {
        setLoading(false);
      }
    };

    loadRelatedProperties();
  }, [isVisible, currentProperty.code, currentProperty.type, currentProperty.city]);

  // Renderizar placeholder até a seção estar visível
  if (!isVisible || loading) {
    return (
      <section ref={sectionRef} className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8">Imóveis Semelhantes</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-96 bg-gray-100 rounded-xl animate-pulse" />
          ))}
        </div>
      </section>
    );
  }

  if (relatedProperties.length === 0) {
    return null;
  }

  return (
    <section ref={sectionRef} className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 bg-gray-50">
      <PropertyGrid
        title="Imóveis Semelhantes"
        properties={relatedProperties}
        showViewAll={true}
        onViewAll={() => window.location.href = '/imoveis'}
      />
    </section>
  );
});

RelatedProperties.displayName = 'RelatedProperties';

export default RelatedProperties;
