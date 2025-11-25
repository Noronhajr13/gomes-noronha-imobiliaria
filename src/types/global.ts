import { ReactNode } from 'react';

export interface NavigationItem {
  id: string;
  name: string;
  icon: string;
}

export interface SiteConfig {
  siteName: string;
  siteDescription: string;
  navigation: NavigationItem[];
  contact: ContactInfo;
  social: SocialLinks;
  theme: ThemeColors;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  city: string;
  workingHours: string;
}

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  whatsapp?: string;
  twitter?: string;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
}

export interface FormData {
  nome: string;
  email: string;
  telefone?: string;
  mensagem: string;
}

export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

export interface SectionProps extends BaseComponentProps {
  id?: string;
  title?: string;
  subtitle?: string;
}