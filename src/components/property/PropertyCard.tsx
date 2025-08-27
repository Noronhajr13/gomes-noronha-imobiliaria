import React from 'react';
import Image from 'next/image';
import { Icon } from '@/utils/iconMapper';
import Button from '../ui/Button';
import { Card, Text, Badge } from '@/components/ui';
import { 
  companyInfo
} from '@/data/MockData';

export interface Property {
  id: number;
  title: string;
  type: string;
  price: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  location: string;
  images: string[];
  featured: boolean;
  code: string;
}

interface PropertyCardProps {
  property: Property;
  onViewDetails?: (property: Property) => void;
  onWhatsApp?: (property: Property) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = React.memo(({ 
  property, 
  // onViewDetails, // Props para uso futuro
  // onWhatsApp // Props para uso futuro
}) => {
  // Handlers for future use
  // const handleViewDetails = () => {
  //   onViewDetails?.(property);
  // };

  // const handleWhatsApp = () => {
  //   onWhatsApp?.(property);
  // };

  return (
    <Card variant="DEFAULT" className="overflow-hidden transform hover:-translate-y-2">
      <div className="relative">
        <Image 
          src={property.images[0]}
          alt={property.title}
          width={600}
          height={400}
          className="object-cover w-full h-64"
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
            text="Ver mais"
            icon="ArrowRight"
            variant="standard" 
            size="sm" 
            href=""
            base="smallBottom"
          />
        </div>
        
        <Button
          text="Falar via WhatsApp"
          icon="Search"
          variant="contact"
          size="sm"
          base="card"
          className="w-full"
          href={`https://wa.me/${companyInfo.contact.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de falar com um corretor.')}`}
        />
      </div>
    </Card>
  );
});

PropertyCard.displayName = 'PropertyCard';

export default PropertyCard;