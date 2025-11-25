import { Metadata } from 'next';
import { seoData } from '@/data/MockData';

export const metadata: Metadata = {
  title: seoData.contato.title,
  description: seoData.contato.description,
  keywords: seoData.contato.keywords,
  openGraph: {
    title: seoData.contato.title,
    description: seoData.contato.description,
    images: [seoData.contato.ogImage],
  },
  twitter: {
    title: seoData.contato.title,
    description: seoData.contato.description,
  },
};

export default function AnunciarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}