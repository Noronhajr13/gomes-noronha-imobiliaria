# 📋 DOCUMENTAÇÃO COMPLETA DO PROJETO
## Gomes & Noronha - Sistema Imobiliário

**Data de Documentação:** 01/12/2025  
**Versão:** 0.1.0  
**Status:** Produção

---

## 📑 ÍNDICE

1. [Visão Geral](#1-visão-geral)
2. [Arquitetura Atual](#2-arquitetura-atual)
3. [Stack Tecnológica](#3-stack-tecnológica)
4. [Estrutura de Pastas](#4-estrutura-de-pastas)
5. [Módulo SITE (Público)](#5-módulo-site-público)
6. [Módulo CRM (Privado)](#6-módulo-crm-privado)
7. [Dados e MockData](#7-dados-e-mockdata)
8. [Sistema de Design](#8-sistema-de-design)
9. [Componentes Reutilizáveis](#9-componentes-reutilizáveis)
10. [Hooks Customizados](#10-hooks-customizados)
11. [Utilitários](#11-utilitários)
12. [SEO e Performance](#12-seo-e-performance)
13. [Configurações](#13-configurações)
14. [Plano de Separação CRM/Site](#14-plano-de-separação-crmsite)

---

## 1. VISÃO GERAL

### 1.1 Descrição do Projeto
O projeto **Gomes & Noronha** é um sistema completo para imobiliária que atualmente combina:
- **Site Público:** Vitrine de imóveis, captação de leads, informações da empresa
- **CRM Privado:** Gestão de imóveis, leads, clientes e operações internas

### 1.2 Informações da Empresa
```
Nome: Gomes & Noronha Negócios Imobiliários
CRECI: PJ 9297
Localização: Juiz de Fora - MG
Tagline: "Transformamos Sonhos em Endereços"
Fundação: 2024
Site: https://gomesnoronha.com.br
```

### 1.3 Contatos
| Tipo | Valor |
|------|-------|
| WhatsApp (Vendas) | (32) 98708-4750 |
| WhatsApp (Despachante) | (32) 98845-1817 |
| Email | gomesenoronha@gmail.com |
| Endereço | Rua Halfeld, 828, Sala 504 - Centro, JF/MG |

### 1.4 Equipe
| Nome | Cargo | Especialidades |
|------|-------|----------------|
| Wesley Gomes | Sócio/Corretor | Imóveis, Investimentos, Negociação |
| Claudio Noronha | Sócio/Despachante | Regularização, Assessoria, Consultoria |
| Mariana Noronha | Sócia/Social Mídia | Inovação, Atendimento, Relacionamento |

---

## 2. ARQUITETURA ATUAL

### 2.1 Diagrama Simplificado
```
┌─────────────────────────────────────────────────────────────────┐
│                     PROJETO MONOLÍTICO                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────┐  ┌─────────────────────────────┐  │
│  │      SITE (Público)     │  │       CRM (Privado)         │  │
│  ├─────────────────────────┤  ├─────────────────────────────┤  │
│  │ /                       │  │ /crm/login                  │  │
│  │ /site/imoveis           │  │ /crm/dashboard (planejado)  │  │
│  │ /site/quemsomos         │  │ /crm/imoveis (planejado)    │  │
│  │ /site/despachante       │  │ /crm/leads (planejado)      │  │
│  │ /site/anunciar          │  │ /crm/pipeline (planejado)   │  │
│  └─────────────────────────┘  │ /crm/tarefas (planejado)    │  │
│                               │ /crm/relatorios (planejado) │  │
│                               │ /crm/automacao (planejado)  │  │
│                               │ /crm/configuracoes (plan.)  │  │
│                               └─────────────────────────────┘  │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                 DADOS COMPARTILHADOS                     │   │
│  │                    (MockData.ts)                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 2.2 Fluxo de Dados Atual
- **MockData.ts** é a fonte única de verdade para todos os dados
- Não há backend/API implementado
- Dados são estáticos (hardcoded)
- Prisma está instalado mas não configurado

---

## 3. STACK TECNOLÓGICA

### 3.1 Core
| Tecnologia | Versão | Uso |
|------------|--------|-----|
| Next.js | 15.5.0 | Framework principal (App Router) |
| React | 19.1.0 | Biblioteca UI |
| TypeScript | ^5 | Tipagem estática |
| Tailwind CSS | ^3.4.14 | Estilização |

### 3.2 Bibliotecas UI
| Biblioteca | Versão | Uso |
|------------|--------|-----|
| Lucide React | ^0.540.0 | Ícones |
| Radix UI | Vários | Componentes headless (Dialog, Dropdown, Select, Tabs, Tooltip, Checkbox) |
| class-variance-authority | ^0.7.1 | Variantes de classes |
| clsx | ^2.1.1 | Concatenação de classes |
| tailwind-merge | ^3.3.1 | Merge de classes Tailwind |

### 3.3 Formulários e Validação
| Biblioteca | Versão | Uso |
|------------|--------|-----|
| React Hook Form | ^7.62.0 | Gestão de formulários |
| @hookform/resolvers | ^5.2.1 | Resolvers de validação |
| Zod | ^4.1.5 | Schema de validação |

### 3.4 Data Fetching e Estado
| Biblioteca | Versão | Uso |
|------------|--------|-----|
| TanStack React Query | ^5.87.1 | Cache e fetching |
| Axios | ^1.11.0 | Cliente HTTP |

### 3.5 Outras Dependências
| Biblioteca | Versão | Uso |
|------------|--------|-----|
| @dnd-kit | Core, Sortable, Utilities | Drag and Drop |
| Prisma Client | ^6.15.0 | ORM (não configurado) |
| date-fns | ^4.1.0 | Manipulação de datas |
| react-hot-toast | ^2.6.0 | Notificações |
| recharts | ^3.1.2 | Gráficos |

### 3.6 Configurações de Build
- **PostCSS** com Tailwind CSS
- **ESLint** configurado
- **TypeScript** com paths aliases (`@/*` -> `./src/*`)

---

## 4. ESTRUTURA DE PASTAS

```
src/
├── app/                          # Next.js App Router
│   ├── globals.css               # Estilos globais
│   ├── layout.tsx                # Layout raiz (SEO, fonts)
│   ├── page.tsx                  # Página inicial
│   ├── robots.ts                 # Configuração robots.txt
│   ├── sitemap.ts                # Sitemap dinâmico
│   ├── crm/                      # Módulo CRM (privado)
│   │   ├── layout.tsx            # Layout CRM (noindex)
│   │   ├── login/page.tsx        # Página de login
│   │   ├── automacao/            # (vazio - planejado)
│   │   ├── configuracoes/        # (vazio - planejado)
│   │   ├── dashboard/            # (vazio - planejado)
│   │   ├── imoveis/              # (vazio - planejado)
│   │   ├── leads/                # (vazio - planejado)
│   │   ├── pipeline/             # (vazio - planejado)
│   │   ├── relatorios/           # (vazio - planejado)
│   │   └── tarefas/              # (vazio - planejado)
│   └── site/                     # Módulo Site (público)
│       ├── anunciar/             # Formulário de anúncio
│       ├── despachante/          # Serviços de despachante
│       ├── imoveis/              # Listagem e busca
│       └── quemsomos/            # Sobre a empresa
│
├── components/
│   ├── crm/                      # Componentes exclusivos CRM
│   │   ├── features/             # (vazio)
│   │   ├── layout/               # (vazio)
│   │   └── ui/
│   │       ├── button.tsx        # Botão CRM (dark theme)
│   │       └── card.tsx          # Card CRM (dark theme)
│   ├── shared/                   # (vazio - para compartilhados)
│   └── site/                     # Componentes do site
│       ├── about/                # Componentes sobre
│       ├── layout/               # Header, Footer, Navigation
│       ├── property/             # Cards, Filtros, Grid de imóveis
│       ├── sections/             # Seções das páginas
│       ├── seo/                  # StructuredData (JSON-LD)
│       ├── stats/                # Estatísticas
│       └── ui/                   # UI Kit do site
│
├── data/
│   ├── HomeData.ts               # (vazio/comentado)
│   └── MockData.ts               # FONTE ÚNICA DE DADOS
│
├── hooks/
│   ├── useActiveSection.ts       # Detecção de seção ativa
│   ├── useLogoPreload.ts         # Preload de logos
│   ├── usePropertyFilters.ts     # Filtros de imóveis
│   └── usePropertySearch.ts      # Busca de imóveis
│
├── lib/
│   └── crm/
│       ├── api.ts                # (vazio - para API)
│       ├── utils.ts              # Utilitários CRM
│       └── validators.ts         # (vazio - para validações)
│
├── styles/
│   ├── crm-global.css            # CSS variables CRM (dark theme)
│   └── theme.ts                  # Sistema de design Site
│
├── types/
│   └── global.ts                 # Tipos TypeScript globais
│
└── utils/
    ├── constants.ts              # Constantes globais
    ├── helpers.ts                # Funções helper
    └── iconMapper.ts             # Mapeamento de ícones Lucide
```

---

## 5. MÓDULO SITE (Público)

### 5.1 Páginas Implementadas

| Rota | Arquivo | Seção | Status |
|------|---------|-------|--------|
| `/` | `app/page.tsx` | HomeSection | ✅ Completo |
| `/site/imoveis` | `app/site/imoveis/page.tsx` | BuscarImoveisSection | ✅ Completo |
| `/site/quemsomos` | `app/site/quemsomos/page.tsx` | AboutSection | ✅ Completo |
| `/site/despachante` | `app/site/despachante/page.tsx` | DespachanteSection | ✅ Completo |
| `/site/anunciar` | `app/site/anunciar/page.tsx` | AnunciarSection | ✅ Completo |

### 5.2 Componentes de Layout

#### Header (`components/site/layout/header/Header.tsx`)
- Logo responsivo
- Navegação desktop com itens ativos
- Menu mobile hamburger
- Badge CRECI
- Botão "Área do Corretor"
- Efeito de scroll (background change)

#### Footer (`components/site/layout/footer/Footer.tsx`)
- Logo e informações de contato
- Links rápidos de navegação
- Links de imóveis por tipo
- Redes sociais
- Créditos do desenvolvedor

#### MobileMenu (`components/site/layout/header/MobileMenu.tsx`)
- Menu expandível para mobile
- Animações de transição
- Links de navegação

### 5.3 Seções (Sections)

| Seção | Descrição | Componentes Usados |
|-------|-----------|-------------------|
| HomeSection | Hero com busca, stats, imóveis destaque | PropertySearch, PropertyGrid, StatsGrid |
| BuscarImoveisSection | Filtros avançados e listagem | PropertyFilters, PropertyListCard, PropertyViewToggle |
| AboutSection | Empresa, valores, equipe, CTAs | ValueCard, TeamMemberCard, CompanySection |
| DespachanteSection | Serviços de documentação | Cards de serviços, CTA WhatsApp |
| AnunciarSection | Formulário de anúncio | Formulário, benefícios, stats |
| ContactSection | Formulário de contato | Info cards, formulário |
| ServicesSection | Serviços da imobiliária | Cards de serviços |
| CompanySection | Detalhes da empresa | Diferenciais, features |

### 5.4 Componentes de Propriedades

| Componente | Descrição |
|------------|-----------|
| PropertyCard | Card de imóvel com foto, detalhes, preço, CTAs |
| PropertyListCard | Versão lista/grid do card |
| PropertyGrid | Grid de cards com título e "Ver todos" |
| PropertyFilters | Filtros (tipo, negócio, localização, preço, etc.) |
| PropertySearch | Barra de busca compacta (hero) |
| AdvancedPropertySearch | Busca com mais opções |
| PropertyViewToggle | Toggle grid/lista |
| PropertySearchResults | Container de resultados |
| NoPropertiesFound | Estado vazio |

### 5.5 Componentes UI Site

| Componente | Descrição |
|------------|-----------|
| Button | Botão com variantes (standard, contact, inverser, ghost) |
| Container | Wrapper de seção com título/subtítulo |
| Card | Card genérico com variantes |
| Text | Texto com variantes de cor |
| Badge | Labels e tags |
| Logo | Logo responsivo com variantes |
| LogoPreloader | Preload de imagens do logo |
| SocialLinks | Links de redes sociais |
| CreciBadge | Badge do CRECI |
| ComboFilter | Select de filtro |
| InputFilter | Input de filtro |

### 5.6 Componentes About

| Componente | Descrição |
|------------|-----------|
| ValueCard | Card de valor da empresa |
| TeamMemberCard | Card de membro da equipe |
| FeatureHighlight | Destaque de feature |
| CompanyMission | Missão da empresa |

---

## 6. MÓDULO CRM (Privado)

### 6.1 Status Atual
O CRM está em fase inicial com:
- ✅ Layout base configurado
- ✅ Página de login funcional (mock)
- ✅ Componentes UI base (Button, Card)
- ✅ CSS variables para tema escuro
- ⏳ Rotas de funcionalidades (vazias)
- ❌ Autenticação real
- ❌ Conexão com backend
- ❌ Funcionalidades implementadas

### 6.2 Páginas Planejadas

| Rota | Funcionalidade | Status |
|------|----------------|--------|
| `/crm/login` | Autenticação | ✅ UI Mock |
| `/crm/dashboard` | Painel principal, KPIs | ⏳ Pasta criada |
| `/crm/imoveis` | CRUD de imóveis | ⏳ Pasta criada |
| `/crm/leads` | Gestão de leads | ⏳ Pasta criada |
| `/crm/pipeline` | Funil de vendas | ⏳ Pasta criada |
| `/crm/tarefas` | Gestão de tarefas | ⏳ Pasta criada |
| `/crm/relatorios` | Relatórios e analytics | ⏳ Pasta criada |
| `/crm/automacao` | Automações e fluxos | ⏳ Pasta criada |
| `/crm/configuracoes` | Configurações do sistema | ⏳ Pasta criada |

### 6.3 Tema Visual CRM (Dark Mode)
```css
/* Backgrounds */
--crm-bg-primary: #0B0F14
--crm-bg-secondary: #12161C
--crm-bg-surface: #161B22
--crm-bg-elevated: #1C232D
--crm-bg-hover: #262D3A

/* Textos */
--crm-text-primary: #FFFFFF
--crm-text-secondary: #E6EAF2
--crm-text-muted: #C9D1D9
--crm-text-disabled: #6E7681

/* Bordas */
--crm-border-default: #30363D
--crm-border-hover: #484F58
--crm-border-focus: #58A6FF

/* Status */
--crm-success: #238636
--crm-warning: #9E6A03
--crm-error: #DA3633
--crm-info: #1F6FEB
```

### 6.4 Componentes CRM UI

#### Button (`components/crm/ui/button.tsx`)
```typescript
variants: {
  variant: {
    primary: "bg-white text-gray-900 hover:bg-gray-100",
    secondary: "border border-white text-white hover:bg-white/10",
    ghost: "text-white hover:bg-white/10",
    danger: "bg-red-600 text-white hover:bg-red-700",
  },
  size: { sm, md, lg }
}
```

#### Card (`components/crm/ui/card.tsx`)
- Card, CardHeader, CardTitle, CardContent
- Tema escuro com bordas sutis

---

## 7. DADOS E MOCKDATA

### 7.1 Localização
`src/data/MockData.ts` - **Fonte única de verdade**

### 7.2 Interfaces Principais

```typescript
interface Property {
  id: number;
  title: string;
  type: 'Casa' | 'Apartamento' | 'Terreno' | 'Sala Comercial' | 'Loja' | 'Galpão' | 'Sítio';
  transactionType: 'Venda' | 'Aluguel' | 'Venda/Aluguel';
  price: number;
  priceLabel?: string;
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

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  phone: string;
  email: string;
  whatsapp: string;
  specialties: string[];
  objectives?: string;
  social?: { instagram?: string; tiktok?: string; };
}

interface Testimonial { ... }
interface BlogPost { ... }
interface FAQ { ... }
interface Partner { ... }
```

### 7.3 Dados Exportados

| Constante | Tipo | Descrição |
|-----------|------|-----------|
| companyInfo | Object | Dados da empresa |
| companyStats | Array | Estatísticas (10+ exclusivos, 100+ vendidos, etc.) |
| companyValues | Array | Valores (Excelência, Confiança, Compromisso, Agilidade) |
| companyFeatures | Array | Diferenciais |
| properties | Array | 6 imóveis mockados |
| teamMembers | Array | 3 membros da equipe |
| faqs | Array | Perguntas frequentes |
| partners | Array | Parceiros |
| neighborhoods | Array | Bairros de JF |
| propertyTypes | Array | Tipos de imóveis |
| priceRanges | Array | Faixas de preço venda |
| rentPriceRanges | Array | Faixas de preço aluguel |
| navigationItems | Array | Itens de navegação |
| footerLinks | Object | Links do rodapé |
| seoData | Object | Metadados SEO por página |

### 7.4 Funções Helper

| Função | Descrição |
|--------|-----------|
| getFeaturedProperties(limit) | Retorna imóveis em destaque |
| getNewProperties(limit) | Retorna imóveis novos |
| getPropertiesByType(type) | Filtra por tipo |
| getPropertiesByNeighborhood(neighborhood) | Filtra por bairro |
| getPropertiesByPriceRange(min, max) | Filtra por preço |
| getPropertyByCode(code) | Busca por código |
| formatPrice(price, label) | Formata preço em BRL |
| formatArea(area) | Formata área em m² |
| formatPhone(phone) | Formata telefone |
| getWhatsAppUrl(phone, message) | Gera URL WhatsApp |
| getPropertyWhatsAppMessage(property) | Mensagem padrão de imóvel |
| getTeamBySpecialty(specialty) | Filtra equipe por especialidade |
| getFAQsByCategory(category) | Filtra FAQs |
| getPartnersByType(type) | Filtra parceiros |

---

## 8. SISTEMA DE DESIGN

### 8.1 Cores Principais (Site)

```typescript
colors: {
  primary: { DEFAULT: '#000000', light: '#374151', dark: '#000000' },
  secondary: { DEFAULT: '#6B7280', light: '#9CA3AF', dark: '#4B5563' },
  accent: { DEFAULT: '#059669', light: '#10B981', dark: '#047857' },
  success: '#059669',
  warning: '#F59E0B',
  danger: '#DC2626',
}
```

### 8.2 Classes de Botões

```typescript
button: {
  primary: 'bg-black text-white hover:bg-gray-800 ...',
  secondary: 'bg-white text-black border-2 border-black ...',
  success: 'bg-green-600 text-white hover:bg-green-700 ...',
  outline: 'bg-transparent border-2 border-black ...',
  danger: 'bg-red-600 text-white hover:bg-red-700 ...',
}
```

### 8.3 Classes de Cards

```typescript
card: {
  DEFAULT: 'bg-white border border-gray-200 rounded-xl shadow-lg ...',
  elevated: 'bg-white rounded-2xl shadow-xl border border-gray-100',
  simple: 'bg-white border border-gray-100 rounded-lg',
}
```

### 8.4 Badges

```typescript
badge: {
  primary: 'bg-black text-gray-200 px-3 py-1 rounded-full ...',
  secondary: 'bg-gray-100 text-gray-800 ...',
  success: 'bg-green-600 text-white ...',
  warning: 'bg-yellow-500 text-black ...',
  danger: 'bg-red-600 text-white ...',
  photo: 'bg-gray-800 text-white ...',
}
```

### 8.5 Funções Helper

```typescript
getButtonClass(variant, size) // Retorna classes do botão
getCardClass(variant)         // Retorna classes do card
getTextClass(variant)         // Retorna classes de texto
getBadgeClass(variant)        // Retorna classes do badge
getSectionClass(variant)      // Retorna classes da seção
```

---

## 9. COMPONENTES REUTILIZÁVEIS

### 9.1 Icon Mapper

```typescript
// utils/iconMapper.ts
import { Home, Users, Briefcase, ... } from 'lucide-react';

export const iconMap = { Home, Users, Briefcase, ... };

export const Icon: React.FC<IconProps> = ({ name, className, size }) => {
  const IconComponent = iconMap[name];
  return <IconComponent className={className} />;
};
```

**Ícones Disponíveis:**
Home, Users, Briefcase, Phone, Mail, MapPin, Clock, Star, Crown, Search, MessageCircle, Award, ArrowRight, Menu, Lock, X, ChevronDown, ExternalLink, Building, FileText, SlidersHorizontal, RotateCcw, Grid3X3, List, Bed, Bath, Car, Shield, TrendingUp, Camera, Globe, Check, Loader2, ChevronLeft, ChevronRight

### 9.2 Função cn()

```typescript
// utils/helpers.ts
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
```

---

## 10. HOOKS CUSTOMIZADOS

### 10.1 usePropertyFilters

```typescript
const { 
  filters,           // Estado atual dos filtros
  filteredProperties, // Imóveis filtrados (memo)
  handleFilterChange, // Atualiza filtro específico
  clearFilters       // Limpa todos os filtros
} = usePropertyFilters();

// Filtros disponíveis:
// tipo, negocio, cidade, bairro, precoMin, precoMax,
// quartos, banheiros, vagas, areaMin, areaMax
```

### 10.2 useActiveSection
Detecta a seção ativa baseada no scroll.

### 10.3 useLogoPreload
Pré-carrega imagens do logo para evitar flicker.

### 10.4 usePropertySearch
Hook para busca de imóveis (implementação futura).

---

## 11. UTILITÁRIOS

### 11.1 constants.ts

```typescript
BREAKPOINTS = { sm: 640, md: 768, lg: 1024, xl: 1280, '2xl': 1536 }
ANIMATIONS = { fast: 150, normal: 300, slow: 500 }
Z_INDEX = { dropdown: 1000, sticky: 1020, fixed: 1030, modal: 1040, popover: 1050, tooltip: 1060 }
MESSAGES = { success: {...}, error: {...}, validation: {...} }
SEO = { defaultTitle, titleTemplate, defaultDescription, defaultImage, siteUrl }
```

### 11.2 helpers.ts

```typescript
cn(...inputs)                    // Concatenar classes CSS
formatPhone(phone)               // Formatar telefone
formatEmailLink(email)           // Mailto link
formatWhatsAppLink(phone, msg)   // WhatsApp link
isValidEmail(email)              // Validar email
truncateText(text, length)       // Truncar texto
formatDate(date)                 // Formatar data pt-BR
```

---

## 12. SEO E PERFORMANCE

### 12.1 Metadados Configurados

- **metadataBase:** https://gomesnoronha.com.br
- **OpenGraph:** Tipo website, locale pt_BR
- **Twitter Cards:** summary_large_image
- **Robots:** index, follow (site) / noindex, nofollow (CRM)

### 12.2 Structured Data (JSON-LD)

Implementado em `components/site/seo/StructuredData.tsx`:
- Organization schema
- LocalBusiness schema
- BreadcrumbList schema (futuro)
- Product schema para imóveis (futuro)

### 12.3 Sitemap Dinâmico

```typescript
// app/sitemap.ts
// Gera sitemap com:
// - Páginas estáticas (home, imoveis, quemsomos, etc.)
// - Páginas dinâmicas de imóveis (por código)
```

### 12.4 Robots.txt

```typescript
// app/robots.ts
rules: {
  userAgent: '*',
  allow: '/',
  disallow: ['/private/', '/admin/', '*.pdf'],
}
```

---

## 13. CONFIGURAÇÕES

### 13.1 Next.js Config

```typescript
// next.config.ts
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ]
  }
}
```

### 13.2 Tailwind Config

```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: { ... },
        secondary: { ... },
        accent: { ... },
        crm: { bg: {...}, text: {...}, border: {...} }
      }
    }
  }
}
```

### 13.3 TypeScript Config

```jsonc
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] },
    "target": "ES2017",
    "strict": true
  }
}
```

---

## 14. PLANO DE SEPARAÇÃO CRM/SITE

### 14.1 Objetivo
Separar o projeto em duas aplicações independentes:
1. **Site (Vitrine):** Frontend público para captação de leads
2. **CRM (Backend):** Sistema de gestão como fonte única de dados

### 14.2 Arquitetura Proposta

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            NOVA ARQUITETURA                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────────────────────┐           ┌─────────────────────────────┐ │
│  │         SITE                │           │           CRM               │ │
│  │     (Next.js Frontend)      │           │    (Next.js Full-Stack)     │ │
│  ├─────────────────────────────┤           ├─────────────────────────────┤ │
│  │                             │           │                             │ │
│  │  • Vitrine de imóveis       │  ◄────►  │  • API REST/GraphQL         │ │
│  │  • Formulários de lead      │   API    │  • Banco de dados (Prisma)  │ │
│  │  • Página de contato        │           │  • Autenticação             │ │
│  │  • SEO otimizado            │           │  • Dashboard                │ │
│  │  • SSG/ISR para performance │           │  • CRUD de imóveis          │ │
│  │                             │           │  • Gestão de leads          │ │
│  │  Dados: Consome API         │           │  • Pipeline de vendas       │ │
│  │                             │           │  • Relatórios               │ │
│  └─────────────────────────────┘           │  • Automações               │ │
│                                            │                             │ │
│                                            │  Dados: PostgreSQL/MySQL    │ │
│                                            │                             │ │
│                                            └─────────────────────────────┘ │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 14.3 Repositórios

| Repositório | Tecnologia | Hospedagem Sugerida |
|-------------|------------|---------------------|
| `gomes-noronha-site` | Next.js (SSG/ISR) | Vercel |
| `gomes-noronha-crm` | Next.js (API Routes + Prisma) | Vercel + PlanetScale/Supabase |

### 14.4 Migração - O Que Vai Para Cada Projeto

#### Site (Público)
```
Migrar:
├── src/app/ (exceto /crm)
├── src/components/site/
├── src/hooks/ (usePropertyFilters, usePropertySearch)
├── src/styles/theme.ts
├── src/utils/
├── public/images/

Remover:
├── src/app/crm/
├── src/components/crm/
├── src/lib/crm/
├── src/styles/crm-global.css
├── Dependências não usadas (Prisma, dnd-kit, recharts)

Adicionar:
├── Serviço de API para consumir dados do CRM
├── Formulário de leads que envia para API do CRM
├── Caching com React Query
```

#### CRM (Privado)
```
Migrar:
├── src/app/crm/ -> src/app/
├── src/components/crm/
├── src/lib/crm/
├── src/styles/crm-global.css

Remover:
├── src/app/site/
├── src/components/site/
├── SEO público

Implementar:
├── prisma/schema.prisma (modelo de dados)
├── src/app/api/ (API Routes)
├── Autenticação (NextAuth.js)
├── CRUD completo
├── Webhooks para integrações
```

### 14.5 Modelo de Dados Prisma (Sugestão)

```prisma
// prisma/schema.prisma

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String
  password  String
  role      Role     @default(CORRETOR)
  phone     String?
  avatar    String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  properties Property[]
  leads      Lead[]
  tasks      Task[]
}

model Property {
  id              String          @id @default(cuid())
  code            String          @unique
  title           String
  description     String?
  type            PropertyType
  transactionType TransactionType
  price           Float
  area            Float
  bedrooms        Int             @default(0)
  bathrooms       Int             @default(0)
  parking         Int             @default(0)
  address         String
  neighborhood    String
  city            String
  state           String
  zipCode         String?
  featured        Boolean         @default(false)
  active          Boolean         @default(true)
  images          String[]
  amenities       String[]
  condominiumFee  Float?
  iptu            Float?
  virtualTour     String?
  createdAt       DateTime        @default(now())
  updatedAt       DateTime        @updatedAt

  userId String
  user   User   @relation(fields: [userId], references: [id])
  leads  Lead[]
}

model Lead {
  id         String     @id @default(cuid())
  name       String
  email      String
  phone      String
  message    String?
  source     LeadSource
  status     LeadStatus @default(NOVO)
  createdAt  DateTime   @default(now())
  updatedAt  DateTime   @updatedAt

  propertyId String?
  property   Property? @relation(fields: [propertyId], references: [id])
  userId     String?
  user       User?     @relation(fields: [userId], references: [id])
}

model Task {
  id          String     @id @default(cuid())
  title       String
  description String?
  dueDate     DateTime?
  priority    Priority   @default(MEDIA)
  status      TaskStatus @default(PENDENTE)
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt

  userId String
  user   User   @relation(fields: [userId], references: [id])
}

enum Role {
  ADMIN
  CORRETOR
  DESPACHANTE
}

enum PropertyType {
  CASA
  APARTAMENTO
  TERRENO
  SALA_COMERCIAL
  LOJA
  GALPAO
  SITIO
  COBERTURA
  KITNET
  FLAT
}

enum TransactionType {
  VENDA
  ALUGUEL
  VENDA_ALUGUEL
}

enum LeadSource {
  SITE
  WHATSAPP
  INDICACAO
  PORTAIS
  REDES_SOCIAIS
}

enum LeadStatus {
  NOVO
  CONTATO_REALIZADO
  QUALIFICADO
  VISITA_AGENDADA
  PROPOSTA
  FECHADO
  PERDIDO
}

enum Priority {
  BAIXA
  MEDIA
  ALTA
  URGENTE
}

enum TaskStatus {
  PENDENTE
  EM_ANDAMENTO
  CONCLUIDA
  CANCELADA
}
```

### 14.6 API Endpoints (Sugestão)

```
# Imóveis
GET    /api/properties          # Lista imóveis (público)
GET    /api/properties/:code    # Detalhes do imóvel (público)
POST   /api/properties          # Criar imóvel (autenticado)
PUT    /api/properties/:id      # Atualizar imóvel (autenticado)
DELETE /api/properties/:id      # Deletar imóvel (autenticado)

# Leads
POST   /api/leads               # Criar lead (público - do site)
GET    /api/leads               # Lista leads (autenticado)
PUT    /api/leads/:id           # Atualizar lead (autenticado)

# Usuários/Auth
POST   /api/auth/login          # Login
POST   /api/auth/logout         # Logout
GET    /api/auth/me             # Usuário atual
```

### 14.7 Passos da Migração

1. **Preparação** ✅ CONCLUÍDO
   - [x] Criar repositório `gomes-noronha-crm` *(criado em /home/noronha/projetos/gomes-noronha-crm)*
   - [x] Transformar repositório atual em `gomes-noronha-site` *(mantido como gomes-noronha-imobiliaria)*

2. **CRM** ✅ CONCLUÍDO
   - [x] Configurar Prisma e modelo de dados *(schema.prisma com User, Property, Lead, Task, Visit, Activity, Setting)*
   - [x] Implementar autenticação (NextAuth.js) *(src/lib/auth.ts com credenciais)*
   - [x] Criar API Routes *(properties, leads, tasks, dashboard, auth)*
   - [x] Migrar dados do MockData para banco *(seed.ts executado - Prisma Postgres na nuvem)*
   - [x] Implementar Dashboard *(consumindo API real com estatísticas)*
   - [x] Implementar CRUD de imóveis *(API completa GET/POST/PUT/DELETE)*
   - [x] Implementar gestão de leads *(API completa GET/POST/PUT/DELETE)*
   - [x] Implementar tarefas e pipeline *(API completa GET/POST/PUT/DELETE)*

3. **Site** 🔄 EM ANDAMENTO
   - [x] Limpar código do CRM *(removido /src/app/crm e /src/components/crm)*
   - [x] Configurar consumo de API *(src/services/api.ts criado + .env.local configurado)*
   - [x] Middleware CORS no CRM *(src/middleware.ts configurado)*
   - [x] Implementar ISR/SSG para performance *(revalidate: 60 nas chamadas fetch)*
   - [x] Conectar formulários à API de leads *(ContactSection e AnunciarSection enviam leads)*
   - [x] Atualizar componentes para usar API ao invés de MockData:
     - usePropertyFilters.ts - busca imóveis da API
     - usePropertySearch.ts - busca imóveis da API
     - PropertyListCard.tsx - usa tipo Property da API
     - BuscarImoveisSection.tsx - estados de loading/erro
     - HomeSection.tsx - imóveis em destaque da API
   - [x] Testar integração completa *(Site em 3000 consumindo CRM em 3001)*

4. **Deploy** 🔄 EM ANDAMENTO
   - [x] Configurar vercel.json no CRM
   - [x] Configurar vercel.json no Site
   - [x] Criar guia de deploy (DEPLOY.md)
   - [x] Commit das alterações
   - [ ] Criar repositório CRM no GitHub
   - [ ] Deploy CRM na Vercel
   - [ ] Deploy Site na Vercel
   - [ ] Configurar domínios
   - [ ] Configurar variáveis de ambiente produção
   - [ ] Testar em produção

### 14.8 Informações do Ambiente Atual

**CRM (gomes-noronha-crm):**
- URL: http://localhost:3001
- Banco: Prisma Postgres (nuvem)
- Usuários de teste:
  - admin@gomesnoronha.com.br / admin123 (Admin)
  - wesley@gomesnoronha.com.br / wesley123 (Corretor)
  - claudio@gomesnoronha.com.br / claudio123 (Despachante)

**Site (gomes-noronha-imobiliaria):**
- URL: http://localhost:3000
- API CRM: NEXT_PUBLIC_CRM_API_URL=http://localhost:3001/api

---

## 📝 NOTAS FINAIS

### Regras de Desenvolvimento (do CLAUDE.md)

1. **MockData.ts** como fonte única (até migrar para API)
2. Usar funções helper do `theme.ts` para componentes
3. Seguir padrão TypeScript com interfaces bem definidas
4. Usar `cn()` para concatenação de classes
5. Novos componentes seguem padrão existente
6. Usar `Next.js Link` para navegação interna
7. Seções em `/components/sections/` e exportar no `index.ts`
8. `npm run lint` antes de finalizar alterações
9. `React.memo` para componentes pesados
10. Implementar loading states e error boundaries

### Contato do Desenvolvedor
**CN CONECTA**  
www.cnconecta.com.br

---

*Documentação gerada em 01/12/2025*  
*Versão do Projeto: 0.1.0*
