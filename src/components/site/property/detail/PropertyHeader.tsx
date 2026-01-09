import React from 'react';
import { Icon } from '@/utils/iconMapper';
import { formatPrice } from '@/services/api';

interface PropertyHeaderProps {
  code: string;
  title: string;
  neighborhood: string;
  city: string;
  transactionType?: string;
  price: number;
  priceLabel?: string | null;
}

const PropertyHeader: React.FC<PropertyHeaderProps> = React.memo(({
  code,
  title,
  neighborhood,
  city,
  transactionType,
  price,
  priceLabel
}) => {
  return (
    <div>
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-gray-500 mb-1">Código: {code}</p>
          <h1 className="text-3xl font-bold text-black mb-2">
            {title}
          </h1>
          <p className="text-lg text-gray-600 flex items-center gap-2">
            <Icon name="MapPin" className="w-5 h-5" />
            {neighborhood}, {city}
          </p>
        </div>
        <div className="text-right">
          {transactionType && (
            <p className="text-sm text-gray-500 mb-1">{transactionType}</p>
          )}
          <p className="text-3xl font-bold text-green-600">
            {formatPrice(price)}
            {priceLabel && (
              <span className="text-lg text-gray-600">{priceLabel}</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
});

PropertyHeader.displayName = 'PropertyHeader';

export default PropertyHeader;
