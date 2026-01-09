import { Metadata } from 'next';
import { seoData, companyInfo } from '@/data/MockData';
import QuemSomosClient from './QuemSomosClient';

export const metadata: Metadata = {
  title: seoData.quemsomos.title,
  description: seoData.quemsomos.description,
  keywords: seoData.quemsomos.keywords,
  openGraph: {
    title: seoData.quemsomos.title,
    description: seoData.quemsomos.description,
    images: [seoData.quemsomos.ogImage],
    type: 'website',
    locale: 'pt_BR',
    siteName: companyInfo.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: seoData.quemsomos.title,
    description: seoData.quemsomos.description,
    images: [seoData.quemsomos.ogImage],
  },
};

export default function QuemSomosPage() {
  return <QuemSomosClient />;
}
