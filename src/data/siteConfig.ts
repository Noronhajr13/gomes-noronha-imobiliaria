// ============= data/siteConfig.ts =============

export const siteConfig = {
  // Informações da Empresa
  company: {
    name: "Gomes & Noronha",
    fullName: "Gomes & Noronha Negócios Imobiliários",
    tagline: "Transformamos Sonhos em endereços",
    description: "A Gomes & Noronha é especialista em vendas em Juiz de Fora.",
    experience: "Venha realizar seu sonho conosco!",
    creci: "CRECI PJ 9297",
    logo: "/logo.png", // Caminho da logo quando você adicionar
  },

  // Navegação
  navigation: [
    { id: 'home', name: 'Início', icon: 'Home' },
    { id: 'imoveis', name: 'Imóveis', icon: 'Building' },
    { id: 'quemsomos', name: 'Quem Somos', icon: 'Users' },
    { id: 'despachante', name: 'Despachante', icon: 'Briefcase' },
    { id: 'anunciar', name: 'Anunciar', icon: 'Star' },
  ],

  // Informações de Contato
  contact: {
    phone: '(32) 99999-9999',
    whatsapp: '32999999999',
    email: 'contato@gomesnoronha.com.br',
    address: {
      street: 'Rua Halfeld, 828/Sala 504',
      neighborhood: 'Centro',
      city: 'Juiz de Fora',
      state: 'MG',
      zipCode: '36000-000',
      fullAddress: 'Rua Halfeld, 828/Sala 504 - Centro, Juiz de Fora - MG'
    },
    businessHours: {
      weekdays: 'Segunda a Sexta: 8h às 18h',
      saturday: 'Sábado: Fechado',
      sunday: 'Domingo: Fechado'
    }
  },

  // Redes Sociais
  social: {
    instagram: 'https://instagram.com/gomesenoronha'
  },

  // SEO e Metadados
  seo: {
    title: 'Gomes & Noronha - Imóveis em Juiz de Fora | CRECI PJ 9297',
    description: 'Especialistas em vendas de imóveis em Juiz de Fora. Há alguns anos realizando sonhos e transformando sonhos em endereços. CRECI PJ 9297.',
    keywords: [
      'imóveis juiz de fora',
      'apartamentos juiz de fora',
      'casas juiz de fora',
      'gomes noronha',
      'imobiliária juiz de fora',
      'CRECI PJ 9297',
      'comprar imóvel juiz de fora',
      'vender imóvel juiz de fora'
    ],
    ogImage: '/og-image.jpg'
  },

  // Tipos de Imóveis
  propertyTypes: [
    { value: 'casa', label: 'Casa', icon: 'Home' },
    { value: 'apartamento', label: 'Apartamento', icon: 'Building' },
    { value: 'terreno', label: 'Terreno', icon: 'MapPin' },
    { value: 'sala-comercial', label: 'Sala Comercial', icon: 'Briefcase' },
    { value: 'loja', label: 'Loja', icon: 'ShoppingBag' },
    { value: 'galpao', label: 'Galpão', icon: 'Warehouse' },
    { value: 'sitio', label: 'Sítio/Chácara', icon: 'Trees' },
  ],

  // Bairros Populares de Juiz de Fora
  popularNeighborhoods: [
    'Centro',
    'São Mateus',
    'Alto dos Passos',
    'Bom Pastor',
    'Santa Helena',
    'Cascatinha',
    'Jardim Glória',
    'São Pedro',
    'Teixeiras',
    'Benfica',
    'Granbery',
    'Paineiras'
  ],

  // Estatísticas da Empresa
  stats: {
    propertiesSold: '500+',
    yearsExperience: '15+',
    satisfiedClients: '98%',
    activeListings: '150+'
  },

  // Serviços Oferecidos
  services: [
    {
      id: 'venda',
      title: 'Venda de Imóveis',
      description: 'Assessoria completa para venda do seu imóvel com a melhor avaliação do mercado.',
      icon: 'TrendingUp'
    },
    {
      id: 'compra',
      title: 'Compra de Imóveis',
      description: 'Encontramos o imóvel ideal para você com segurança e transparência.',
      icon: 'ShoppingCart'
    },
    {
      id: 'aluguel',
      title: 'Administração de Aluguel',
      description: 'Gestão completa de locação com garantia e segurança jurídica.',
      icon: 'Key'
    },
    {
      id: 'avaliacao',
      title: 'Avaliação de Imóveis',
      description: 'Avaliação profissional e precisa do valor de mercado do seu imóvel.',
      icon: 'Calculator'
    },
    {
      id: 'documentacao',
      title: 'Documentação',
      description: 'Regularização e análise completa de toda documentação imobiliária.',
      icon: 'FileText'
    },
    {
      id: 'consultoria',
      title: 'Consultoria Imobiliária',
      description: 'Orientação especializada para investimentos e negócios imobiliários.',
      icon: 'MessageSquare'
    }
  ],

  // Depoimentos
  testimonials: [
    {
      id: 1,
      name: 'Maria Silva',
      role: 'Compradora',
      content: 'Excelente atendimento! A equipe da Gomes & Noronha foi fundamental para encontrarmos nosso apartamento dos sonhos.',
      rating: 5,
      image: '/testimonials/maria.jpg'
    },
    {
      id: 2,
      name: 'João Santos',
      role: 'Vendedor',
      content: 'Profissionalismo e dedicação. Venderam minha casa em tempo recorde e pelo melhor preço.',
      rating: 5,
      image: '/testimonials/joao.jpg'
    },
    {
      id: 3,
      name: 'Ana Costa',
      role: 'Investidora',
      content: 'A consultoria da Gomes & Noronha foi essencial para meus investimentos imobiliários em Juiz de Fora.',
      rating: 5,
      image: '/testimonials/ana.jpg'
    }
  ],

  // CTAs (Call to Actions)
  ctas: {
    primary: {
      text: 'Ver Imóveis Disponíveis',
      href: '/imoveis'
    },
    secondary: {
      text: 'Falar com Corretor',
      href: '/contato'
    },
    whatsapp: {
      text: 'Chamar no WhatsApp',
      href: 'https://wa.me/5532999999999'
    }
  }
};