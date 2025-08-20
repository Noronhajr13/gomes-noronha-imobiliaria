import { SiteConfig } from '@/types/global';

export const siteConfig: SiteConfig = {
  // Informações básicas do site
  siteName: "GOMES & NORONHA",
  siteDescription: "Imobiliária especializada em vendas e locações em Juiz de Fora há mais de 20 anos",
  
  // Navegação principal
  navigation: [
    { 
      id: 'home', 
      name: 'Home', 
      icon: 'Home'
    },
    { 
      id: 'buscar', 
      name: 'Buscar Imóveis', 
      icon: 'Building'
    },
    { 
      id: 'quem-somos', 
      name: 'Quem Somos', 
      icon: 'Users'
    },
    { 
      id: 'despachante', 
      name: 'Despachante', 
      icon: 'FileText'
    },
    { 
      id: 'anunciar', 
      name: 'Anunciar', 
      icon: 'Star'
    },
    { 
      id: 'login', 
      name: 'Login', 
      icon: 'ExternalLink'
    }
  ],

  // Informações de contato
  contact: {
    phone: "(32) 3215-8900",
    email: "contato@gomesenoronha.com.br",
    address: "Rua Principal, 123",
    city: "Juiz de Fora, MG",
    workingHours: "Segunda à Sexta: 8h às 18h | Sábado: 8h às 12h"
  },

  // Redes sociais
  social: {
    facebook: "https://facebook.com/gomesenoronha",
    instagram: "https://instagram.com/gomesenoronha",
    whatsapp: "https://wa.me/5532000000000"
  },

  // Cores do tema
  theme: {
    primary: "#000000",       // Preto
    secondary: "#6B7280",     // Cinza médio  
    accent: "#059669"         // Verde de apoio
  }
};