import { Metadata } from 'next';
import { seoData } from '@/data/MockData';

export const metadata: Metadata = {
  title: seoData.imoveis.title,
  description: seoData.imoveis.description,
  keywords: seoData.imoveis.keywords,
  openGraph: {
    title: seoData.imoveis.title,
    description: seoData.imoveis.description,
    images: [seoData.imoveis.ogImage],
  },
  twitter: {
    title: seoData.imoveis.title,
    description: seoData.imoveis.description,
  },
};

export default function ImoveisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}