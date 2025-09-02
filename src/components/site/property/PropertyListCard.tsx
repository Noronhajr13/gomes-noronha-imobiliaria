import React from 'react';
import Image from 'next/image';
import { Icon } from '@/utils/iconMapper';
import { Button, Card, Text, Badge } from '@/components/site/ui';
import { Property, formatPrice, formatArea, getPropertyWhatsAppMessage, getWhatsAppUrl, companyInfo } from '@/data/MockData';
import { cn } from '@/utils/helpers';

interface PropertyListCardProps {
  property: Property;
  view: 'grid' | 'list';
  onViewDetails?: (property: Property) => void;
  className?: string;
}

const PropertyListCard: React.FC<PropertyListCardProps> = React.memo(({ 
  property, 
  view, 
  onViewDetails,
  className 
}) => {
  const handleWhatsApp = () => {
    const message = getPropertyWhatsAppMessage(property);
    const whatsappUrl = getWhatsAppUrl(companyInfo.contact.whatsapp, message);
    window.open(whatsappUrl, '_blank');
  };

  const handleViewDetails = () => {
    onViewDetails?.(property);
  };

  // Card em modo lista
  if (view === 'list') {
    return (
      <Card variant="DEFAULT" className={cn("overflow-hidden hover:shadow-lg transition-shadow", className)}>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <Image
              src={property.images[0]}
              alt={property.title}
              width={400}
              height={300}
              className="object-cover w-full h-48 md:h-full"
            />
          </div>
          <div className="p-6 md:w-2/3">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="success">{property.transactionType}</Badge>
                  <Text variant="muted" className="text-xs">#{property.code}</Text>
                </div>
                <Text as="h3" variant="primary" className="mb-2 text-xl font-bold">
                  {property.title}
                </Text>
                <div className="flex items-center mb-4 text-gray-600">
                  <Icon name="MapPin" className="w-4 h-4 mr-2" />
                  <Text variant="secondary" className="text-sm">{property.location}</Text>
                </div>
              </div>
              <div className="text-right">
                <div className="mb-2 text-2xl font-bold text-green-600">
                  {formatPrice(property.price, property.priceLabel)}
                </div>
                <Text variant="muted" className="text-sm">{formatArea(property.area)}</Text>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Icon name="Bed" className="w-4 h-4 mr-1" />
                <span>{property.bedrooms} quartos</span>
              </div>
              <div className="flex items-center">
                <Icon name="Bath" className="w-4 h-4 mr-1" />
                <span>{property.bathrooms} banheiros</span>
              </div>
              <div className="flex items-center">
                <Icon name="Car" className="w-4 h-4 mr-1" />
                <span>{property.parking} vagas</span>
              </div>
            </div>

            {property.description && (
              <Text variant="secondary" className="mb-4 text-sm line-clamp-2">
                {property.description}
              </Text>
            )}

            <div className="flex items-center justify-between">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleViewDetails}
              >
                Ver detalhes
              </Button>
              <Button 
                variant="success" 
                size="sm" 
                onClick={handleWhatsApp}
                className="flex items-center"
              >
                <Icon name="Phone" className="w-4 h-4 mr-2" />
                Contato
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  // Card em modo grid
  return (
    <Card variant="DEFAULT" className={cn("overflow-hidden hover:shadow-lg transition-shadow", className)}>
      <div className="relative">
        <Image
          src={property.images[0]}
          alt={property.title}
          width={600}
          height={400}
          className="object-cover w-full h-48"
        />
        {property.featured && (
          <div className="absolute top-2 left-2">
            <Badge variant="warning">Destaque</Badge>
          </div>
        )}
        {property.new && (
          <div className="absolute top-2 right-2">
            <Badge variant="success">Novo</Badge>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="success">{property.transactionType}</Badge>
          <Text variant="muted" className="text-xs">#{property.code}</Text>
        </div>
        <Text as="h3" variant="primary" className="mb-2 text-lg font-bold">
          {property.title}
        </Text>
        <div className="flex items-center mb-3 text-gray-600">
          <Icon name="MapPin" className="w-4 h-4 mr-2" />
          <Text variant="secondary" className="text-sm">{property.location}</Text>
        </div>
        <div className="mb-3 text-2xl font-bold text-green-600">
          {formatPrice(property.price, property.priceLabel)}
        </div>
        <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Icon name="Home" className="w-4 h-4 mr-1" />
            <span>{formatArea(property.area)}</span>
          </div>
          <div className="flex items-center">
            <Icon name="Bed" className="w-4 h-4 mr-1" />
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center">
            <Icon name="Bath" className="w-4 h-4 mr-1" />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center">
            <Icon name="Car" className="w-4 h-4 mr-1" />
            <span>{property.parking}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleViewDetails}
            className="flex-1"
          >
            Ver detalhes
          </Button>
          <Button 
            variant="success" 
            size="sm" 
            onClick={handleWhatsApp}
            className="flex-1"
          >
            Contato
          </Button>
        </div>
      </div>
    </Card>
  );
});

PropertyListCard.displayName = 'PropertyListCard';

export default PropertyListCard;