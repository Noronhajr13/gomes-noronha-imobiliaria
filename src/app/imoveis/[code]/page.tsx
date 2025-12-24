import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { fetchPropertyById, formatPrice } from '@/services/api';
import PropertyDetailClient from '@/components/site/property/detail/PropertyDetailClient';

// Forçar renderização dinâmica (SSR)
export const dynamic = 'force-dynamic';

interface PropertyPageProps {
  params: Promise<{
    code: string;
  }>;
}

// Gerar metadados dinâmicos
export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const { code } = await params;
  const property = await fetchPropertyById(code);

  if (!property) {
    return {
      title: 'Imóvel não encontrado',
    };
  }

  const title = `${property.title} - ${formatPrice(property.price)} | Gomes & Noronha`;
  const description = property.description ||
    `${property.type} com ${property.bedrooms} quartos, ${property.bathrooms} banheiros e ${property.area}m² em ${property.neighborhood}, ${property.city}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: property.images.length > 0 ? [property.images[0]] : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: property.images.length > 0 ? [property.images[0]] : [],
    },
  };
}

// Página do imóvel
export default async function PropertyPage({ params }: PropertyPageProps) {
  const { code } = await params;
  const property = await fetchPropertyById(code);

  if (!property) {
    notFound();
  }

  return <PropertyDetailClient property={property} />;
}
