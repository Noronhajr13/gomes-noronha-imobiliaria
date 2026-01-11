// Tipos
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
  tagline: "Transformamos sonhos em endereços",
  description: "A Gomes & Noronha é especialista em vendas em Juiz de Fora.",
  foundedYear: 2024,
  creci: "CRECI PJ 9297",
  logo: "/images/logo-principal.png", // Logo principal (fundo claro)
  logoWhite: "/images/logo-principal.png", // Logo branca (fundo escuro)
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
  ],
  empresa: [
    { label: 'Sobre Nós', href: '/quemsomos' },
    { label: 'Nossa Equipe', href: '/quemsomos' },
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
  quemsomos: {
    title: 'Quem Somos - Conheça a Equipe Gomes & Noronha | CRECI PJ 9297',
    description: 'Conheça a equipe de profissionais da Gomes & Noronha. Corretores especializados em imóveis em Juiz de Fora com atendimento personalizado.',
    keywords: ['equipe gomes noronha', 'corretores juiz de fora', 'sobre a imobiliária', 'CRECI PJ 9297'],
    ogImage: '/og-quemsomos.jpg'
  },
  anunciar: {
    title: 'Anunciar Imóvel - Venda ou Alugue com a Gomes & Noronha',
    description: 'Anuncie seu imóvel com a Gomes & Noronha. Avaliação gratuita, divulgação profissional e acompanhamento completo até a venda ou locação.',
    keywords: ['anunciar imóvel', 'vender imóvel juiz de fora', 'alugar imóvel', 'avaliar imóvel'],
    ogImage: '/og-anunciar.jpg'
  },
  despachante: {
    title: 'Despachante Imobiliário - Regularização de Imóveis | Gomes & Noronha',
    description: 'Serviços de despachante imobiliário em Juiz de Fora. Regularização de documentos, escrituras, inventários e assessoria documental completa.',
    keywords: ['despachante imobiliário', 'regularização de imóveis', 'documentação imobiliária', 'escritura juiz de fora'],
    ogImage: '/og-despachante.jpg'
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
  teamMembers,
  faqs,
  partners,
  priceRanges,
  rentPriceRanges,
  navigationItems,
  footerLinks,
  seoData
};

export default MockData;