import { Metadata } from 'next';
import { companyInfo } from '@/data/MockData';

export const metadata: Metadata = {
  title: `CRM - ${companyInfo.name}`,
  description: `Sistema CRM da ${companyInfo.fullName} para gestão de imóveis e clientes.`,
  robots: 'noindex, nofollow', // Impedir indexação de páginas administrativas
};

export default function CRMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}