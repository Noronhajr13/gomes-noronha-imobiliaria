import { companyInfo } from '@/data/MockData';

interface StructuredDataProps {
  type?: 'Organization' | 'LocalBusiness' | 'RealEstateAgent';
  data?: Record<string, unknown>;
}

const StructuredData: React.FC<StructuredDataProps> = ({ 
  type = 'RealEstateAgent',
  data 
}) => {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type,
      name: companyInfo.fullName,
      alternateName: companyInfo.name,
      description: companyInfo.description,
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://gomesnoronha.com.br',
      logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://gomesnoronha.com.br'}${companyInfo.logo}`,
      image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://gomesnoronha.com.br'}${companyInfo.logo}`,
      telephone: companyInfo.contact.mobile,
      email: companyInfo.contact.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${companyInfo.address.street}, ${companyInfo.address.number}`,
        addressLocality: companyInfo.address.city,
        addressRegion: companyInfo.address.state,
        postalCode: companyInfo.address.zipCode,
        addressCountry: 'BR'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '-21.7587',
        longitude: '-43.3496'
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00'
        }
      ],
      priceRange: '$$',
      areaServed: {
        '@type': 'City',
        name: 'Juiz de Fora',
        '@id': 'https://www.wikidata.org/wiki/Q192009'
      },
      serviceType: [
        'Venda de Imóveis',
        'Compra de Imóveis', 
        'Locação de Imóveis',
        'Avaliação de Imóveis',
        'Consultoria Imobiliária'
      ],
      foundingDate: companyInfo.foundedYear.toString(),
      sameAs: [
        companyInfo.social.instagram
      ].filter(Boolean)
    };

    return data ? { ...baseData, ...data } : baseData;
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData())
      }}
    />
  );
};

export default StructuredData;