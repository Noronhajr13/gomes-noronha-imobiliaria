import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { companyInfo, seoData } from '@/data/MockData'
import StructuredData from '@/components/site/seo/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://gomesenoronha.com.br'),
  title: {
    default: seoData.home.title,
    template: `%s | ${companyInfo.name}`
  },
  description: seoData.home.description,
  keywords: seoData.home.keywords,
  authors: [{ name: companyInfo.name }],
  creator: companyInfo.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://gomesnoronha.com.br',
    title: seoData.home.title,
    description: seoData.home.description,
    siteName: companyInfo.name,
    images: [{ 
      url: seoData.home.ogImage,
      width: 1200,
      height: 630,
      alt: `${companyInfo.name} - ${companyInfo.tagline}`
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: seoData.home.title,
    description: seoData.home.description,
    images: [seoData.home.ogImage],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://gomesnoronha.com.br',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}