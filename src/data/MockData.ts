// Tipos
export interface Property {
  id: number;
  title: string;
  type: 'Casa' | 'Apartamento' | 'Terreno' | 'Sala Comercial' | 'Loja' | 'Galpão' | 'Sítio';
  transactionType: 'Venda' | 'Aluguel' | 'Venda/Aluguel';
  price: number;
  priceLabel?: string; // Para aluguéis: "/mês"
  area: number;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  location: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode?: string;
  images: string[];
  featured: boolean;
  new?: boolean;
  code: string;
  description?: string;
  amenities?: string[];
  yearBuilt?: number;
  condominiumFee?: number;
  iptu?: number;
  virtualTour?: string;
  video?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  propertyType?: string;
  date?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  phone: string;
  email: string;
  whatsapp: string;
  specialties: string[];
  objectives?: string;
  social?: {
    instagram?: string;
    tiktok?: string;
  };
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: number;
  tags: string[];
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: 'Compra' | 'Venda' | 'Aluguel' | 'Documentação' | 'Financiamento';
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
  website?: string;
  type: 'Banco' | 'Construtora' | 'Parceiro' | 'Serviço';
}

// ============= DADOS MOCKADOS =============

// Informações da Empresa
export const companyInfo = {
  name: "Gomes & Noronha",
  fullName: "Gomes & Noronha Negócios Imobiliários",
  tagline: "Transformamos Sonhos em Endereços",
  description: "A Gomes & Noronha é especialista em vendas em Juiz de Fora.",
  foundedYear: 2024,
  creci: "CRECI PJ 9297",
  logo: "/images/logo-principal.png", // Logo principal (fundo claro)
  logoWhite: "/images/logo-teste.png", // Logo branca (fundo escuro)
  logoCompact: "/images/logo-alternativa.png", // Logo compacta/quadrada
  favicon: "/favicon.ico",
  
  // Missão e Visão
  mission: "Conectar pessoas aos seus imóveis ideais com excelência e confiança",
  vision: "Ser a imobiliária de referência em Minas Gerais até 2030",
  
  // Contato
  contact: {
    despachante: "5532988451817",
    mobile: "(32) 98708-4750",
    whatsapp: "5532987084750",
    email: "gomesenoronha@gmail.com",
    emailVendas: "corretorwesleygomes@gmail.com",
  },
  
  // Endereço
  address: {
    street: "Rua Halfeld",
    number: "828",
    complement: "Sala 504",
    neighborhood: "Centro",
    city: "Juiz de Fora",
    state: "MG",
    zipCode: "36010-003",
    country: "Brasil",
    googleMapsUrl: "https://maps.google.com/?q=Rua.+Halfeld,+828,+Juiz+de+Fora",
  },
  
  // Horário de Funcionamento
  businessHours: {
    weekdays: "Segunda a Sexta: 9h às 18h",
    saturday: "Sábado: Fechado",
    sunday: "Domingo: Fechado",
    holidays: "Feriados: Fechado",
  },
  
  // Redes Sociais
  social: {
    instagram: "https://instagram.com/gomesenoronha",
  },
};

// Estatísticas
export const companyStats = [
  { 
    number: '10+', 
    label: 'Imóveis exclusivos', 
    icon: 'Crown',
    highlight: true 
  },
  { 
    number: '100+', 
    label: 'Imóveis Vendidos', 
    icon: 'Home' 
  },
  { 
    number: '95%', 
    label: 'Clientes Satisfeitos', 
    icon: 'Star' 
  },
  { 
    number: '50+', 
    label: 'Imóveis Disponíveis', 
    icon: 'Building' 
  }
];

// Valores da Empresa
export const companyValues = [
  {
    icon: 'Star',
    title: 'Excelência',
    description: 'Buscamos sempre a perfeição em cada atendimento, negociação e entrega.',
    variant: 'success'
  },
  {
    icon: 'Users',
    title: 'Confiança',
    description: 'Construímos relacionamentos sólidos baseados na transparência e honestidade.',
    variant: 'primary'
  },
  {
    icon: 'Home',
    title: 'Compromisso',
    description: 'Estamos comprometidos em realizar o sonho da casa própria de cada cliente.',
    variant: 'secondary'
  },
  {
    icon: 'Clock',
    title: 'Agilidade',
    description: 'Processos eficientes para que você tenha rapidez em todas as etapas.',
    variant: 'warning'
  }
];

// Diferenciais da Empresa
export const companyFeatures = [
  {
    icon: 'Users',
    title: 'Atendimento Personalizado',
    description: 'Cada cliente é único. Oferecemos consultoria especializada e acompanhamento completo durante todo o processo de compra ou venda.',
    variant: 'success'
  },
  {
    icon: 'Globe',
    title: 'Tecnologia Moderna',
    description: 'Plataforma digital completa com tours virtuais, documentação online e processo de negociação ágil e transparente.',
    variant: 'purple'
  },
  {
    icon: 'FileText',
    title: 'Transparência Total',
    description: 'Informações claras sobre preços, documentação e processos. Sem taxas ocultas ou surpresas desagradáveis.',
    variant: 'orange'
  },
  {
    icon: 'Clock',
    title: 'Suporte Completo',
    description: 'Acompanhamos você desde a primeira visita até a entrega das chaves, incluindo toda documentação e financiamento.',
    variant: 'indigo'
  }
];

// Propriedades/Imóveis
export const properties: Property[] = [
  {
    id: 1,
    title: "Apartamento de Luxo no Centro",
    type: "Apartamento",
    transactionType: "Venda",
    price: 650000,
    area: 120,
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    location: "Rua Halfeld, 890",
    neighborhood: "Centro",
    city: "Juiz de Fora",
    state: "MG",
    zipCode: "36010-000",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop"
    ],
    featured: true,
    new: true,
    code: "AP001",
    description: "Apartamento de alto padrão no coração de Juiz de Fora, com acabamento de primeira qualidade e vista privilegiada.",
    amenities: ["Piscina", "Academia", "Churrasqueira", "Salão de Festas", "Playground", "Portaria 24h"],
    yearBuilt: 2022,
    condominiumFee: 850,
    iptu: 450,
    virtualTour: "https://matterport.com/example",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15")
  },
  {
    id: 2,
    title: "Casa em Condomínio São Mateus",
    type: "Casa",
    transactionType: "Venda",
    price: 890000,
    area: 250,
    bedrooms: 4,
    bathrooms: 3,
    parking: 3,
    location: "Condomínio Solar dos Lagos",
    neighborhood: "São Mateus",
    city: "Juiz de Fora",
    state: "MG",
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=800&h=600&fit=crop"
    ],
    featured: true,
    code: "CA002",
    description: "Casa moderna em condomínio fechado com total segurança e lazer completo.",
    amenities: ["Área Gourmet", "Piscina Privativa", "Jardim", "Suíte Master", "Closet"],
    yearBuilt: 2021,
    condominiumFee: 450,
    iptu: 580,
    createdAt: new Date("2024-01-20"),
    updatedAt: new Date("2024-01-20")
  },
  {
    id: 3,
    title: "Terreno Comercial Alto dos Passos",
    type: "Terreno",
    transactionType: "Venda",
    price: 450000,
    area: 500,
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    location: "Av. Juiz de Fora",
    neighborhood: "Alto dos Passos",
    city: "Juiz de Fora",
    state: "MG",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop"
    ],
    featured: false,
    code: "TE003",
    description: "Terreno comercial em localização estratégica, ideal para construção de prédio comercial ou residencial.",
    yearBuilt: 0,
    iptu: 280,
    createdAt: new Date("2024-02-01"),
    updatedAt: new Date("2024-02-01")
  },
  {
    id: 4,
    title: "Apartamento 2 Quartos Granbery",
    type: "Apartamento",
    transactionType: "Aluguel",
    price: 2200,
    priceLabel: "/mês",
    area: 75,
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    location: "Rua Oscar Vidal",
    neighborhood: "Granbery",
    city: "Juiz de Fora",
    state: "MG",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop"
    ],
    featured: false,
    code: "AP004",
    description: "Apartamento bem localizado, próximo a comércios e universidades.",
    amenities: ["Elevador", "Garagem Coberta", "Área de Serviço"],
    yearBuilt: 2018,
    condominiumFee: 350,
    iptu: 180,
    createdAt: new Date("2024-02-05"),
    updatedAt: new Date("2024-02-05")
  },
  {
    id: 5,
    title: "Sala Comercial Centro",
    type: "Sala Comercial",
    transactionType: "Venda/Aluguel",
    price: 320000,
    area: 60,
    bedrooms: 0,
    bathrooms: 1,
    parking: 0,
    location: "Galeria Pio X",
    neighborhood: "Centro",
    city: "Juiz de Fora",
    state: "MG",
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop"
    ],
    featured: false,
    code: "SC005",
    description: "Sala comercial em galeria movimentada no centro da cidade.",
    amenities: ["Banheiro Privativo", "Ar Condicionado", "Recepção"],
    yearBuilt: 2010,
    condominiumFee: 250,
    iptu: 150,
    createdAt: new Date("2024-02-10"),
    updatedAt: new Date("2024-02-10")
  },
  {
    id: 6,
    title: "Cobertura Duplex Bom Pastor",
    type: "Apartamento",
    transactionType: "Venda",
    price: 1200000,
    area: 280,
    bedrooms: 4,
    bathrooms: 4,
    parking: 3,
    location: "Rua São Sebastião",
    neighborhood: "Bom Pastor",
    city: "Juiz de Fora",
    state: "MG",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop"
    ],
    featured: true,
    new: true,
    code: "CO006",
    description: "Cobertura duplex com vista panorâmica, acabamento de luxo e terraço gourmet.",
    amenities: ["Terraço Gourmet", "Jacuzzi", "Sauna", "Home Theater", "Adega"],
    yearBuilt: 2023,
    condominiumFee: 1200,
    iptu: 800,
    virtualTour: "https://matterport.com/example2",
    createdAt: new Date("2024-02-15"),
    updatedAt: new Date("2024-02-15")
  }
];

// Equipe
export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Wesley Gomes",
    role: "Sócio/Corretor",
    image: "/images/WesleyGomes.png",
    phone: "(32) 98708-4750",
    email: "corretorwesleygomes@gmail.com",
    whatsapp: "5532987084750",
    specialties: ["Imóveis perfeitos", "Investimentos", "Negociação"],
    objectives: "Wesley Gomes é um corretor dedicado a encontrar o imóvel ideal para cada cliente, com foco em investimentos inteligentes e negociações vantajosas.",
    social: {
      instagram: "@wesleygomes.corretor",
      tiktok: "@gomess_wesley"
    }
  },
  {
    id: 2,
    name: "Claudio Noronha",
    role: "Sócio/Despachante Imobiliário",
    image: "/images/ClaudioNoronha.png",
    phone: "(32) 98845-1817",
    email: "noronhadespachante@gmail.com",
    whatsapp: "5532988451817",
    specialties: ["Regularização", "Assessoria", "Consultoria"],
    objectives: "Claudio Noronha é um especialista em regularização de imóveis, oferecendo assessoria e consultoria para facilitar a vida dos clientes."
  },
  {
    id: 3,
    name: "Mariana Noronha",
    role: "Sócia/Social Mídia",
    image: "/images/MarianaNoronha.png",
    phone: "(32) 99119-0192",
    email: "marianarodriguesnoronha@gmail.com",
    whatsapp: "5532991190192",
    specialties: ["Inovação", "Atendimento", "Relacionamento"],
    objectives: "Apaixonada por conectar pessoas e criar experiências memoráveis, Mariana Noronha é a mente criativa por trás das estratégias de marketing digital da Gomes & Noronha."
  }
];

// FAQ
export const faqs: FAQ[] = [
  {
    id: 1,
    question: "Quais documentos preciso para comprar um imóvel?",
    answer: "Para comprar um imóvel, você precisará de: RG, CPF, comprovante de renda, comprovante de residência, certidão de nascimento ou casamento, e documentos específicos caso utilize financiamento.",
    category: "Compra"
  },
  {
    id: 2,
    question: "Como funciona o processo de venda com a Gomes & Noronha?",
    answer: "Nosso processo inclui: avaliação gratuita do imóvel, elaboração de estratégia de venda, divulgação em múltiplos canais, agendamento de visitas, negociação e acompanhamento até a escritura.",
    category: "Venda"
  },
  {
    id: 3,
    question: "Qual o valor da comissão de corretagem?",
    answer: "A comissão de corretagem geralmente é de 6% do valor de venda para imóveis urbanos, podendo variar conforme negociação e tipo de imóvel.",
    category: "Venda"
  },
  {
    id: 4,
    question: "Posso alugar meu imóvel mobiliado?",
    answer: "Sim! Imóveis mobiliados geralmente têm valor de aluguel 20-30% maior. Fazemos toda a documentação específica incluindo inventário dos móveis.",
    category: "Aluguel"
  },
  {
    id: 5,
    question: "Como funciona a análise de crédito para locação?",
    answer: "Realizamos análise completa incluindo consulta ao SPC/Serasa, comprovação de renda (3x o valor do aluguel) e referências. O processo leva até 48h.",
    category: "Aluguel"
  }
];

// Parceiros
export const partners: Partner[] = [
  {
    id: 1,
    name: "Caixa Econômica Federal",
    logo: "/partners/caixa.png",
    website: "https://www.caixa.gov.br",
    type: "Banco"
  },
  {
    id: 2,
    name: "Banco do Brasil",
    logo: "/partners/bb.png",
    website: "https://www.bb.com.br",
    type: "Banco"
  },
  {
    id: 3,
    name: "MRV Engenharia",
    logo: "/partners/mrv.png",
    website: "https://www.mrv.com.br",
    type: "Construtora"
  },
  {
    id: 4,
    name: "Cartório 1º Ofício",
    logo: "/partners/cartorio.png",
    type: "Serviço"
  }
];

// Bairros de Juiz de Fora
export const neighborhoods = [
  { value: 'todos', label: 'Todos os bairros' },
  { value: 'alto-dos-passos', label: 'Alto dos Passos' },
  { value: 'bairu', label: 'Bairú' },
  { value: 'benfica', label: 'Benfica' },
  { value: 'bom-pastor', label: 'Bom Pastor' },
  { value: 'cascatinha', label: 'Cascatinha' },
  { value: 'centro', label: 'Centro' },
  { value: 'dom-bosco', label: 'Dom Bosco' },
  { value: 'granbery', label: 'Granbery' },
  { value: 'jardim-gloria', label: 'Jardim Glória' },
  { value: 'manoel-honorio', label: 'Manoel Honório' },
  { value: 'mariano-procopio', label: 'Mariano Procópio' },
  { value: 'morro-da-gloria', label: 'Morro da Glória' },
  { value: 'paineiras', label: 'Paineiras' },
  { value: 'santa-helena', label: 'Santa Helena' },
  { value: 'santa-luzia', label: 'Santa Luzia' },
  { value: 'santa-terezinha', label: 'Santa Terezinha' },
  { value: 'sao-mateus', label: 'São Mateus' },
  { value: 'sao-pedro', label: 'São Pedro' },
  { value: 'teixeiras', label: 'Teixeiras' },
];

export const negociableTypes = [
  { value: 'todos', label: 'Todos' },
  { value: 'venda', label: 'Venda' },
  { value: 'aluguel', label: 'Aluguel' }
];

// Tipos de Imóveis
export const propertyTypes = [
  { value: 'todos', label: 'Todos os tipos' },
  { value: 'apartamento', label: 'Apartamento'},
  { value: 'casa', label: 'Casa' },
  { value: 'cobertura', label: 'Cobertura' },
  { value: 'flat', label: 'Flat' },
  { value: 'galpao', label: 'Galpão' },
  { value: 'kitnet', label: 'Kitnet/Studio' },
  { value: 'loja', label: 'Loja' },
  { value: 'sala-comercial', label: 'Sala Comercial' },
  { value: 'sitio', label: 'Sítio/Chácara' },
  { value: 'terreno', label: 'Terreno' }
];

export const comboSelects = [
  { id: "negocio", label: "Tipos de Negócio", options: negociableTypes},
  { id: "imovel", label: "Tipos de Imóvel", options: propertyTypes},
  { id: "bairro", label: "Bairros", options: neighborhoods},
];

// Faixas de Preço
export const priceRanges = [
  { value: '0-150000', label: 'Até R$ 150.000', min: 0, max: 150000 },
  { value: '150000-300000', label: 'R$ 150.000 - R$ 300.000', min: 150000, max: 300000 },
  { value: '300000-500000', label: 'R$ 300.000 - R$ 500.000', min: 300000, max: 500000 },
  { value: '500000-800000', label: 'R$ 500.000 - R$ 800.000', min: 500000, max: 800000 },
  { value: '800000-1200000', label: 'R$ 800.000 - R$ 1.200.000', min: 800000, max: 1200000 },
  { value: '1200000+', label: 'Acima de R$ 1.200.000', min: 1200000, max: null }
];

// Faixas de Preço para Aluguel
export const rentPriceRanges = [
  { value: '0-1000', label: 'Até R$ 1.000', min: 0, max: 1000 },
  { value: '1000-2000', label: 'R$ 1.000 - R$ 2.000', min: 1000, max: 2000 },
  { value: '2000-3000', label: 'R$ 2.000 - R$ 3.000', min: 2000, max: 3000 },
  { value: '3000-5000', label: 'R$ 3.000 - R$ 5.000', min: 3000, max: 5000 },
  { value: '5000+', label: 'Acima de R$ 5.000', min: 5000, max: null }
];

// Navegação
export const navigationItems = [
  { id: 'home', name: 'Início', icon: 'Home', href: '/' },
  { id: 'imoveis', name: 'Imóveis', icon: 'Building', href: '/imoveis' },
  { id: 'quemsomos', name: 'Quem Somos', icon: 'Users', href: '/quemsomos' },
  { id: 'despachante', name: 'Despachante', icon: 'Briefcase', href: '/despachante' },
  { id: 'anunciar', name: 'Anunciar', icon: 'Star', href: '/anunciar' },
];

// Footer Links
export const footerLinks = {
  imoveis: [
    { label: 'Casas à Venda', href: '/imoveis?tipo=casa&transacao=venda' },
    { label: 'Apartamentos à Venda', href: '/imoveis?tipo=apartamento&transacao=venda' },
    { label: 'Imóveis para Alugar', href: '/imoveis?transacao=aluguel' },
    { label: 'Lançamentos', href: '/lancamentos' },
    { label: 'Imóveis em Destaque', href: '/destaques' }
  ],
  empresa: [
    { label: 'Sobre Nós', href: '/sobre' },
    { label: 'Nossa Equipe', href: '/equipe' },
    { label: 'Depoimentos', href: '/depoimentos' },
    { label: 'Parceiros', href: '/parceiros' },
    { label: 'Trabalhe Conosco', href: '/trabalhe-conosco' }
  ]
};

// Metadados SEO
export const seoData = {
  home: {
    title: 'Gomes & Noronha - Imóveis em Juiz de Fora | CRECI PJ 9297',
    description: 'A Gomes & Noronha é especialista em vendas em Juiz de Fora. Transformamos sonhos em endereços. Há alguns anos realizando sonhos.',
    keywords: ['imóveis juiz de fora', 'apartamentos', 'casas', 'gomes noronha', 'imobiliária', 'CRECI PJ 9297'],
    ogImage: '/og-home.jpg'
  },
  imoveis: {
    title: 'Imóveis à Venda e Aluguel em Juiz de Fora | Gomes & Noronha',
    description: 'Encontre casas, apartamentos e terrenos à venda ou para alugar em Juiz de Fora. Mais de 150 imóveis disponíveis.',
    keywords: ['comprar imóvel', 'alugar imóvel', 'casas juiz de fora', 'apartamentos juiz de fora'],
    ogImage: '/og-imoveis.jpg'
  },
  servicos: {
    title: 'Serviços Imobiliários em Juiz de Fora | Gomes & Noronha',
    description: 'Venda, compra, aluguel e avaliação de imóveis. Assessoria completa com profissionais especializados.',
    keywords: ['corretor juiz de fora', 'vender imóvel', 'avaliar imóvel', 'administração de aluguel'],
    ogImage: '/og-servicos.jpg'
  },
  sobre: {
    title: 'Sobre a Gomes & Noronha - Tradição em Imóveis | CRECI PJ 9297',
    description: 'Conheça a Gomes & Noronha, há anos realizando sonhos e transformando sonhos em endereços em Juiz de Fora.',
    keywords: ['sobre gomes noronha', 'imobiliária tradicional', 'CRECI PJ 9297'],
    ogImage: '/og-sobre.jpg'
  },
  contato: {
    title: 'Contato - Gomes & Noronha Imóveis | Juiz de Fora',
    description: 'Entre em contato com a Gomes & Noronha. Atendimento personalizado para compra, venda e locação de imóveis.',
    keywords: ['contato imobiliária', 'telefone gomes noronha', 'endereço gomes noronha'],
    ogImage: '/og-contato.jpg'
  }
};

// Funções Auxiliares

/**
 * Busca imóveis em destaque
 */
export const getFeaturedProperties = (limit: number = 6): Property[] => {
  return properties
    .filter(p => p.featured)
    .slice(0, limit);
};

/**
 * Busca imóveis novos
 */
export const getNewProperties = (limit: number = 4): Property[] => {
  return properties
    .filter(p => p.new)
    .slice(0, limit);
};

/**
 * Busca imóveis por tipo
 */
export const getPropertiesByType = (type: string): Property[] => {
  return properties.filter(p => p.type.toLowerCase() === type.toLowerCase());
};

/**
 * Busca imóveis por bairro
 */
export const getPropertiesByNeighborhood = (neighborhood: string): Property[] => {
  return properties.filter(p => 
    p.neighborhood.toLowerCase().includes(neighborhood.toLowerCase())
  );
};

/**
 * Busca imóveis por faixa de preço
 */
export const getPropertiesByPriceRange = (min: number, max: number | null): Property[] => {
  return properties.filter(p => {
    if (max === null) return p.price >= min;
    return p.price >= min && p.price <= max;
  });
};

/**
 * Busca imóvel por código
 */
export const getPropertyByCode = (code: string): Property | undefined => {
  return properties.find(p => p.code === code);
};

/**
 * Formata preço para exibição
 */
export const formatPrice = (price: number, label?: string): string => {
  const formatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
  
  return label ? `${formatted}${label}` : formatted;
};

/**
 * Formata área para exibição
 */
export const formatArea = (area: number): string => {
  return `${area}m²`;
};

/**
 * Formata telefone para exibição
 */
export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 11) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
  }
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
};

/**
 * Gera URL do WhatsApp
 */
export const getWhatsAppUrl = (phone: string, message?: string): string => {
  const cleanPhone = phone.replace(/\D/g, '');
  const baseUrl = `https://wa.me/55${cleanPhone}`;
  
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  
  return baseUrl;
};

/**
 * Gera mensagem padrão para WhatsApp sobre imóvel
 */
export const getPropertyWhatsAppMessage = (property: Property): string => {
  return `Olá! Tenho interesse no imóvel:
${property.title}
Código: ${property.code}
Localização: ${property.neighborhood}, ${property.city}
Valor: ${formatPrice(property.price, property.priceLabel)}

Gostaria de mais informações.`;
};

/**
 * Busca membros da equipe por especialidade
 */
export const getTeamBySpecialty = (specialty: string): TeamMember[] => {
  return teamMembers.filter(member => 
    member.specialties.some(s => 
      s.toLowerCase().includes(specialty.toLowerCase())
    )
  );
};

/**
 * Busca FAQs por categoria
 */
export const getFAQsByCategory = (category: FAQ['category']): FAQ[] => {
  return faqs.filter(faq => faq.category === category);
};

/**
 * Busca parceiros por tipo
 */
export const getPartnersByType = (type: Partner['type']): Partner[] => {
  return partners.filter(partner => partner.type === type);
};

// Export default com todos os dados principais
const MockData = {
  companyInfo,
  companyStats,
  companyValues,
  companyFeatures,
  properties,
  teamMembers,
  faqs,
  partners,
  neighborhoods,
  propertyTypes,
  priceRanges,
  rentPriceRanges,
  navigationItems,
  footerLinks,
  seoData
};

export default MockData;