"use client";

import { useEffect } from 'react';

interface PropertyAnalyticsProps {
  propertyCode: string;
  propertyTitle: string;
  propertyPrice: number;
  propertyType: string;
}

const PropertyAnalytics: React.FC<PropertyAnalyticsProps> = ({
  propertyCode,
  propertyTitle,
  propertyPrice,
  propertyType
}) => {
  useEffect(() => {
    // Track page view
    trackPropertyView({
      code: propertyCode,
      title: propertyTitle,
      price: propertyPrice,
      type: propertyType
    });

    // Track scroll depth
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      if (scrollPercentage > maxScroll) {
        maxScroll = scrollPercentage;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Track time on page
    const startTime = Date.now();

    return () => {
      window.removeEventListener('scroll', handleScroll);

      // Send analytics when component unmounts
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackPropertyEngagement({
        code: propertyCode,
        timeSpent,
        maxScroll
      });
    };
  }, [propertyCode, propertyTitle, propertyPrice, propertyType]);

  return null; // Este componente não renderiza nada
};

// Tipos para window com analytics
declare global {
  interface Window {
    gtag?: (command: string, action: string, params: Record<string, unknown>) => void;
    fbq?: (command: string, action: string, params: Record<string, unknown>) => void;
  }
}

// Função para tracking de visualização
function trackPropertyView(data: {
  code: string;
  title: string;
  price: number;
  type: string;
}) {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item', {
      currency: 'BRL',
      value: data.price,
      items: [{
        item_id: data.code,
        item_name: data.title,
        item_category: data.type,
        price: data.price
      }]
    });
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_ids: [data.code],
      content_name: data.title,
      content_type: 'product',
      value: data.price,
      currency: 'BRL'
    });
  }

  // Registro local para debugging (remover em produção)
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Property View:', data);
  }

  // Salvar em localStorage para estatísticas internas
  savePropertyView(data);
}

// Função para tracking de engajamento
function trackPropertyEngagement(data: {
  code: string;
  timeSpent: number;
  maxScroll: number;
}) {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'property_engagement', {
      property_code: data.code,
      time_spent: data.timeSpent,
      scroll_depth: data.maxScroll
    });
  }

  // Registro local para debugging
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Property Engagement:', data);
  }
}

// Salvar visualização em localStorage
function savePropertyView(data: {
  code: string;
  title: string;
  price: number;
  type: string;
}) {
  if (typeof window === 'undefined') return;

  try {
    const viewsKey = 'property_views';
    const views = JSON.parse(localStorage.getItem(viewsKey) || '[]');

    views.push({
      ...data,
      timestamp: new Date().toISOString(),
      url: window.location.href
    });

    // Manter apenas os últimos 50 registros
    const recentViews = views.slice(-50);
    localStorage.setItem(viewsKey, JSON.stringify(recentViews));
  } catch (error) {
    console.error('Erro ao salvar visualização:', error);
  }
}

// Função auxiliar para tracking de eventos de ação do usuário
export function trackPropertyAction(action: string, propertyCode: string, extra?: Record<string, unknown>) {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      property_code: propertyCode,
      ...extra
    });
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    const fbEventMap: Record<string, string> = {
      'whatsapp_click': 'Contact',
      'phone_click': 'Contact',
      'share': 'Share',
      'image_zoom': 'ViewContent',
      'schedule_visit': 'Schedule'
    };

    const fbEvent = fbEventMap[action];
    if (fbEvent) {
      window.fbq('track', fbEvent, {
        content_ids: [propertyCode],
        ...extra
      });
    }
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Property Action:', action, propertyCode, extra);
  }
}

export default PropertyAnalytics;
