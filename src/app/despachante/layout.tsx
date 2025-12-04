import { Metadata } from 'next';
import { seoData } from '@/data/MockData';

export const metadata: Metadata = {
  title: seoData.servicos.title,
  description: seoData.servicos.description,
  keywords: seoData.servicos.keywords,
  openGraph: {
    title: seoData.servicos.title,
    description: seoData.servicos.description,
    images: [seoData.servicos.ogImage],
  },
  twitter: {
    title: seoData.servicos.title,
    description: seoData.servicos.description,
  },
};

export default function DespachanteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}