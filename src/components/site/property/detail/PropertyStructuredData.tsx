import React from 'react';
import { Property } from '@/services/api';
import { companyInfo } from '@/data/MockData';

interface PropertyStructuredDataProps {
  property: Property;
}

const PropertyStructuredData: React.FC<PropertyStructuredDataProps> = ({ property }) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: property.title,
    description: property.description || `${property.type} em ${property.neighborhood}, ${property.city}`,
    image: property.images,
    offers: {
      '@type': 'Offer',
      price: property.price,
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
      priceValidUntil: new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString().split('T')[0],
      seller: {
        '@type': 'Organization',
        name: companyInfo.fullName,
        telephone: companyInfo.contact.mobile,
        address: {
          '@type': 'PostalAddress',
          streetAddress: `${companyInfo.address.street}, ${companyInfo.address.number}`,
          addressLocality: companyInfo.address.city,
          addressRegion: companyInfo.address.state,
          postalCode: companyInfo.address.zipCode,
          addressCountry: 'BR'
        }
      }
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Área',
        value: `${property.area} m²`
      },
      ...(property.bedrooms > 0 ? [{
        '@type': 'PropertyValue',
        name: 'Quartos',
        value: property.bedrooms
      }] : []),
      ...(property.bathrooms > 0 ? [{
        '@type': 'PropertyValue',
        name: 'Banheiros',
        value: property.bathrooms
      }] : []),
      ...(property.parking > 0 ? [{
        '@type': 'PropertyValue',
        name: 'Vagas de Garagem',
        value: property.parking
      }] : [])
    ]
  };

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: 'https://gomesnoronha.com.br'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Imóveis',
        item: 'https://gomesnoronha.com.br/imoveis'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: property.title,
        item: `https://gomesnoronha.com.br/imoveis/${property.code}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
    </>
  );
};

export default PropertyStructuredData;
