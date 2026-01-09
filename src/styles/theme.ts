// Sistema de Design - Gomes & Noronha
export const theme = {
  colors: {
    // Cores principais
    primary: {
      DEFAULT: '#000000',      // Preto principal
      light: '#374151',        // Cinza escuro
      dark: '#000000',         // Preto puro
    },
    secondary: {
      DEFAULT: '#6B7280',      // Cinza médio
      light: '#9CA3AF',        // Cinza claro
      dark: '#4B5563',         // Cinza escuro
    },
    accent: {
      DEFAULT: '#059669',      // Verde
      light: '#10B981',        // Verde claro
      dark: '#047857',         // Verde escuro
    },
    // Cores de estado
    success: '#059669',
    warning: '#F59E0B',
    danger: '#DC2626',
    // Cores neutras
    white: '#FFFFFF',
    black: '#000000',
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    }
  },
  // Classes CSS pré-definidas
  components: {
    // Botões
    button: {
      primary: 'bg-black text-white hover:bg-gray-800 transition-colors duration-300 font-semibold rounded-lg shadow-lg',
      secondary: 'bg-white text-black border-2 border-black hover:bg-gray-50 transition-colors duration-300 font-semibold rounded-lg',
      success: 'bg-green-600 text-white hover:bg-green-700 transition-colors duration-300 font-semibold rounded-lg',
      outline: 'bg-transparent border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-semibold rounded-lg',
      danger: 'bg-red-600 text-white hover:bg-red-700 transition-colors duration-300 font-semibold rounded-lg',
    },
    // Cards
    card: {
      DEFAULT: 'bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300',
      elevated: 'bg-white rounded-2xl shadow-xl border border-gray-100',
      simple: 'bg-white border border-gray-100 rounded-lg',
    },
    // Seções
    section: {
      DEFAULT: 'bg-white',
      alternate: 'bg-gray-50',
      dark: 'bg-gray-900 text-white',
    },
    // Textos
    text: {
      primary: 'text-black',
      secondary: 'text-gray-600',
      muted: 'text-gray-500',
      white: 'text-white',
      accent: 'text-green-600',
    },
    // Badges/Tags
    badge: {
      primary: 'bg-black text-gray-200 px-3 py-1 rounded-full text-sm font-medium',
      secondary: 'bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium',
      success: 'bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium',
      warning: 'bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium',
      danger: 'bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium',
      photo: 'bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium',
      // Variante para especialidades (TeamMemberCard)
      specialty: 'px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full',
    },
    // Links e interações
    link: {
      primary: 'text-black hover:text-gray-700 transition-colors',
      secondary: 'text-gray-600 hover:text-black transition-colors',
      muted: 'text-gray-400 hover:text-gray-300 transition-colors',
      accent: 'text-green-600 hover:text-green-700 transition-colors',
    },
    // Input/Form elements
    input: {
      DEFAULT: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all',
      error: 'w-full px-3 py-2 border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all',
      select: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all bg-white',
    },
    // Labels
    label: {
      DEFAULT: 'block mb-2 text-sm font-medium text-gray-700',
    },
    // Mensagens de feedback
    message: {
      error: 'text-red-500',
      success: 'text-green-600',
      warning: 'text-yellow-600',
      info: 'text-blue-600',
    },
  }
} as const;

// Funções helper
export const getButtonClass = (variant: keyof typeof theme.components.button = 'primary', size: 'sm' | 'md' | 'lg' = 'md') => {
  const baseClass = theme.components.button[variant];
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  return `${baseClass} ${sizeClasses[size]}`;
};

export const getCardClass = (variant: keyof typeof theme.components.card = 'DEFAULT') => {
  return theme.components.card[variant];
};

export const getTextClass = (variant: keyof typeof theme.components.text = 'primary') => {
  return theme.components.text[variant];
};

export const getBadgeClass = (variant: keyof typeof theme.components.badge = 'primary') => {
  return theme.components.badge[variant];
};

export const getSectionClass = (variant: keyof typeof theme.components.section = 'DEFAULT') => {
  return theme.components.section[variant];
};

export const getLinkClass = (variant: keyof typeof theme.components.link = 'primary') => {
  return theme.components.link[variant];
};

export const getInputClass = (variant: keyof typeof theme.components.input = 'DEFAULT') => {
  return theme.components.input[variant];
};

export const getLabelClass = () => {
  return theme.components.label.DEFAULT;
};

export const getMessageClass = (variant: keyof typeof theme.components.message = 'error') => {
  return theme.components.message[variant];
};