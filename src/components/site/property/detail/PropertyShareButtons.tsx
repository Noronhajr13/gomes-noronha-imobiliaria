"use client";

import React, { useState, useCallback } from 'react';
import { Icon } from '@/utils/iconMapper';
import { trackPropertyAction } from './PropertyAnalytics';

interface PropertyShareButtonsProps {
  propertyTitle: string;
  propertyCode: string;
}

const PropertyShareButtons: React.FC<PropertyShareButtonsProps> = React.memo(({
  propertyTitle,
  propertyCode
}) => {
  const [copied, setCopied] = useState(false);

  const handleWhatsAppShare = useCallback(() => {
    const url = window.location.href;
    const text = `Confira este imóvel: ${propertyTitle}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text + '\n' + url)}`, '_blank');
    trackPropertyAction('share', propertyCode, { method: 'whatsapp' });
  }, [propertyCode, propertyTitle]);

  const handleCopyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      trackPropertyAction('share', propertyCode, { method: 'copy_link' });

      // Reset após 2 segundos
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback para navegadores antigos
      const textArea = document.createElement('textarea');
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [propertyCode]);

  return (
    <div className="p-6 bg-gray-50 rounded-xl">
      <h4 className="font-semibold mb-3">Compartilhar</h4>
      <div className="flex gap-2">
        <button
          onClick={handleWhatsAppShare}
          className="flex-1 p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Compartilhar no WhatsApp"
        >
          <Icon name="MessageCircle" className="w-5 h-5 mx-auto" />
        </button>
        <button
          onClick={handleCopyLink}
          className="flex-1 p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors relative"
          aria-label="Copiar link"
        >
          {copied ? (
            <Icon name="Check" className="w-5 h-5 mx-auto text-green-600" />
          ) : (
            <Icon name="Globe" className="w-5 h-5 mx-auto" />
          )}
        </button>
      </div>

      {/* Feedback visual */}
      {copied && (
        <p className="text-center text-sm text-green-600 mt-2 animate-fade-in">
          Link copiado!
        </p>
      )}
    </div>
  );
});

PropertyShareButtons.displayName = 'PropertyShareButtons';

export default PropertyShareButtons;
