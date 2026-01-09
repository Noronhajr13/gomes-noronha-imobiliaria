import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@/utils/iconMapper';
import { Button, Card, Text, Badge } from '@/components/site/ui';
import { companyInfo } from '@/data/MockData';
import { PropertyDisplay } from '@/types/property';

const PLACEHOLDER_IMAGE = '/images/placeholder-property.svg';

interface PropertyCardProps {
  property: PropertyDisplay;
}

const PropertyCard: React.FC<PropertyCardProps> = React.memo(({
  property,
}) => {
  const [imgError, setImgError] = useState(false);
  const imageUrl = property.images?.[0] || PLACEHOLDER_IMAGE;

  return (
    <Card variant="DEFAULT" className="overflow-hidden transform hover:-translate-y-2">
      <div className="relative">
        <Image
          src={imgError ? PLACEHOLDER_IMAGE : imageUrl}
          alt={property.title}
          width={600}
          height={400}
          className="object-cover w-full h-64"
          onError={() => setImgError(true)}
        />
        <div className="absolute top-4 left-4">
          <Badge variant="photo">{property.type}</Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge variant="secondary">#{property.code}</Badge>
        </div>
        {property.featured && (
          <div className="absolute bottom-4 left-4">
            <Badge variant="photo">⭐ Destaque</Badge>
          </div>
        )}
      </div>

      <div className="p-6">
        <Text as="h3" variant="primary" className="mb-2 text-xl font-bold">
          {property.title}
        </Text>
        
        <div className="flex items-center mb-4">
          <Icon name="MapPin" className="w-4 h-4 mr-2 text-gray-400" />
          <Text variant="secondary" className="text-sm">{property.location}</Text>
        </div>
        
        <div className="flex items-center justify-between mb-6 text-sm">
          <Text variant="secondary" className="font-medium">{property.area}</Text>
          <div className="flex gap-3">
            {property.bedrooms > 0 && (
              <span className="flex items-center gap-1 text-gray-600">
                <Icon name="Home" className="w-4 h-4" />
                {property.bedrooms}
              </span>
            )}
            {property.bathrooms > 0 && (
              <span className="flex items-center gap-1 text-gray-600">
                🚿 {property.bathrooms}
              </span>
            )}
            {property.parking > 0 && (
              <span className="flex items-center gap-1 text-gray-600">
                🚗 {property.parking}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <Text variant="accent" className="text-2xl font-bold">{property.price}</Text>
          <Button
            icon="ArrowRight"
            iconPosition="right"
            variant="primary"
            size="sm"
            href={`/imoveis/${property.code}`}
          >
            Ver mais
          </Button>
        </div>

        <Button
          icon="Phone"
          variant="success"
          size="sm"
          fullWidth
          href={`https://wa.me/${companyInfo.contact.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de falar com um corretor.')}`}
        >
          Falar via WhatsApp
        </Button>
      </div>
    </Card>
  );
});

PropertyCard.displayName = 'PropertyCard';

export default PropertyCard;