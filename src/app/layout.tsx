import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { companyInfo, seoData } from '@/data/MockData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: seoData.home.title,
    template: `%s | ${companyInfo.name}`
  },
  description: seoData.home.description,
  keywords: seoData.home.keywords,
  authors: [{ name: companyInfo.name }],
  creator: companyInfo.name,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: seoData.home.title,
    description: seoData.home.description,
    siteName: companyInfo.name,
    images: [{ url: seoData.home.ogImage }],
  },
  twitter: {
    card: 'summary_large_image',
    title: seoData.home.title,
    description: seoData.home.description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}