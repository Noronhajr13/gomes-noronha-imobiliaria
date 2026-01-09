import { Metadata } from 'next';
import { seoData, companyInfo } from '@/data/MockData';
import DespachanteClient from './DespachanteClient';

export const metadata: Metadata = {
  title: seoData.despachante.title,
  description: seoData.despachante.description,
  keywords: seoData.despachante.keywords,
  openGraph: {
    title: seoData.despachante.title,
    description: seoData.despachante.description,
    images: [seoData.despachante.ogImage],
    type: 'website',
    locale: 'pt_BR',
    siteName: companyInfo.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: seoData.despachante.title,
    description: seoData.despachante.description,
    images: [seoData.despachante.ogImage],
  },
};

export default function DespachantePage() {
  return <DespachanteClient />;
}
