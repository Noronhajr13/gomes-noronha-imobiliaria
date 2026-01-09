"use client";

import React from 'react';
import { Button } from '@/components/site/ui';
import { getPropertyWhatsAppUrl, Property } from '@/services/api';
import { companyInfo } from '@/data/MockData';
import { trackPropertyAction } from './PropertyAnalytics';

interface PropertyContactCardProps {
  property: Property;
  onScheduleClick: () => void;
}

const PropertyContactCard: React.FC<PropertyContactCardProps> = React.memo(({
  property,
  onScheduleClick
}) => {
  return (
    <div className="p-6 bg-white border-2 border-gray-200 rounded-xl shadow-lg">
      <h3 className="text-xl font-bold mb-4">Interessado?</h3>
      <p className="text-gray-600 mb-6">
        Entre em contato conosco para agendar uma visita ou tirar dúvidas.
      </p>

      <div className="space-y-3">
        <Button
          icon="Phone"
          variant="success"
          fullWidth
          href={getPropertyWhatsAppUrl(property, companyInfo.contact.whatsapp)}
          onClick={() => trackPropertyAction('whatsapp_click', property.code, { price: property.price })}
        >
          WhatsApp
        </Button>

        <Button
          icon="Phone"
          variant="secondary"
          fullWidth
          href={`tel:${companyInfo.contact.mobile}`}
          onClick={() => trackPropertyAction('phone_click', property.code, { price: property.price })}
        >
          Ligar
        </Button>

        <Button
          icon="Calendar"
          variant="primary"
          fullWidth
          onClick={onScheduleClick}
        >
          Agendar Visita
        </Button>
      </div>

      <div className="mt-6 pt-6 border-t">
        <p className="text-sm text-gray-500 mb-2">Atendimento:</p>
        <p className="text-sm font-semibold">Seg-Sex: 9h-18h</p>
        <p className="text-sm text-gray-600 mt-2">
          {companyInfo.contact.mobile}
        </p>
      </div>
    </div>
  );
});

PropertyContactCard.displayName = 'PropertyContactCard';

export default PropertyContactCard;
