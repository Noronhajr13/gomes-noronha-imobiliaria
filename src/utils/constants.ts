// Breakpoints do Tailwind
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Duração de animações
export const ANIMATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;

// Z-index layers
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modal: 1040,
  popover: 1050,
  tooltip: 1060,
} as const;

// Mensagens padrão
export const MESSAGES = {
  success: {
    contact: 'Mensagem enviada com sucesso!',
    newsletter: 'Inscrição realizada com sucesso!',
  },
  error: {
    contact: 'Erro ao enviar mensagem. Tente novamente.',
    newsletter: 'Erro ao realizar inscrição. Tente novamente.',
    generic: 'Algo deu errado. Tente novamente.',
  },
  validation: {
    required: 'Este campo é obrigatório',
    email: 'Digite um email válido',
    phone: 'Digite um telefone válido',
  }
} as const;

// Configurações de SEO
export const SEO = {
  defaultTitle: 'Projeto Base',
  titleTemplate: '%s | Projeto Base',
  defaultDescription: 'Template base para desenvolvimento de sites com Next.js',
  defaultImage: '/images/og-image.jpg',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
} as const;