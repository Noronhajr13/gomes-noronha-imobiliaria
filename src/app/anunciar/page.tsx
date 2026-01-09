import { Metadata } from 'next';
import { seoData, companyInfo } from '@/data/MockData';
import AnunciarClient from './AnunciarClient';

export const metadata: Metadata = {
  title: seoData.anunciar.title,
  description: seoData.anunciar.description,
  keywords: seoData.anunciar.keywords,
  openGraph: {
    title: seoData.anunciar.title,
    description: seoData.anunciar.description,
    images: [seoData.anunciar.ogImage],
    type: 'website',
    locale: 'pt_BR',
    siteName: companyInfo.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: seoData.anunciar.title,
    description: seoData.anunciar.description,
    images: [seoData.anunciar.ogImage],
  },
};

export default function AnunciarPage() {
  return <AnunciarClient />;
}
