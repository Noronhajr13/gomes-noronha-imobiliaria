import { Metadata } from 'next';
import { seoData } from '@/data/MockData';

export const metadata: Metadata = {
  title: seoData.sobre.title,
  description: seoData.sobre.description,
  keywords: seoData.sobre.keywords,
  openGraph: {
    title: seoData.sobre.title,
    description: seoData.sobre.description,
    images: [seoData.sobre.ogImage],
  },
  twitter: {
    title: seoData.sobre.title,
    description: seoData.sobre.description,
  },
};

export default function QuemSomosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}