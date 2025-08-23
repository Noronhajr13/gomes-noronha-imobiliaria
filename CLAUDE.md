### IMPORTANTE

- Sempre responda em português;

### PROJETO: GOMES & NORONHA IMOBILIÁRIA

Sistema web para imobiliária especializada em vendas em Juiz de Fora - MG.

### TECH STACK

- **Next.js** 15.5.0 (App Router)
- **React** 19.1.0 
- **TypeScript** 5.x (strict mode)
- **Tailwind CSS** 3.4.14
- **Lucide React** 0.540.0 (ícones)
- **ESLint** 9.x (next/core-web-vitals, next/typescript)

### DEPENDÊNCIAS E UTILITÁRIOS

- **clsx** 2.1.1 - Para concatenação condicional de classes CSS
- **postcss** 8.4.47 + **autoprefixer** 10.4.20
- Configuração ESLint moderna com FlatCompat

### ARQUITETURA DO PROJETO

```
src/
├── app/                    # App Router (Next.js 15+) - SISTEMA DE ROTAS
│   ├── anunciar/           # Página de anúncios (/anunciar)
│   │   └── page.tsx        # Formulário para anunciar imóveis
│   ├── despachante/        # Página de serviços (/despachante)
│   │   └── page.tsx        # Serviços de documentação
│   ├── imoveis/            # Página de imóveis (/imoveis)
│   │   └── page.tsx        # Busca e listagem de imóveis
│   ├── quemsomos/          # Página institucional (/quemsomos)
│   │   └── page.tsx        # Sobre a empresa
│   ├── globals.css         # Estilos globais
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Página inicial (/)
├── components/
│   ├── layout/             # Layout e navegação
│   │   ├── header/         # Sistema de navegação
│   │   │   ├── Header.tsx          # Header principal
│   │   │   ├── NavigationItem.tsx  # Item de menu (Next.js Link)
│   │   │   ├── MobileMenu.tsx      # Menu mobile responsivo
│   │   │   └── ContactInfo.tsx     # Info de contato no header
│   │   └── Footer.tsx      # Footer com links funcionais
│   ├── property/           # Sistema de imóveis
│   ├── sections/           # Seções das páginas
│   │   ├── HeroSection.tsx         # Seção principal (home)
│   │   ├── AboutSection.tsx        # Quem somos
│   │   ├── BuscarImoveisSection.tsx # Busca de imóveis
│   │   ├── DespachanteSection.tsx  # Serviços de despachante
│   │   ├── AnunciarSection.tsx     # Formulário de anúncios
│   │   └── index.ts        # Exportações centralizadas
│   ├── stats/              # Componentes de estatísticas  
│   └── ui/                 # Componentes UI reutilizáveis
│       ├── Logo.tsx        # Sistema de logo otimizado
│       ├── LogoPreloader.tsx # Pré-carregamento de logos
│       └── SocialLinks.tsx # Links de redes sociais
├── data/
│   └── MockData.ts         # Dados principais (FONTE ÚNICA DA VERDADE)
├── hooks/
│   ├── useActiveSection.ts # Hook para seções ativas
│   └── useLogoPreload.ts   # Hook para otimização de logos
├── styles/
│   └── theme.ts            # Sistema de design e tema
├── types/
│   └── global.ts           # Tipos TypeScript globais
└── utils/
    ├── constants.ts        # Constantes da aplicação
    ├── helpers.ts          # Funções utilitárias
    └── iconMapper.ts       # Mapeamento de ícones Lucide
```

### CONFIGURAÇÕES E PADRÕES

#### **Sistema de Design**
- **Cores Principais**: Preto (#000000), Cinza (#6B7280), Verde Accent (#059669)
- **Tipografia**: Inter (Google Fonts)  
- **Componentes**: Sistema centralizado em `src/styles/theme.ts`
- **Utilitário CSS**: Tailwind com configuração customizada

#### **Padrões de Desenvolvimento**
- **Componentes**: Functional Components + TypeScript
- **Roteamento**: Next.js App Router com páginas individuais
- **Navegação**: Next.js Link para performance otimizada
- **State Management**: React hooks (useState, useEffect, custom hooks)
- **Estilização**: Tailwind CSS com classes utilitárias + sistema de tema
- **Responsividade**: Mobile-first com breakpoints Tailwind
- **Ícones**: Lucide React com mapeamento centralizado
- **Performance**: Componente lazy loading e pré-carregamento de imagens

#### **Configurações do Site** 
Todas centralizadas em `src/data/MockData.ts`:
- Informações da empresa (nome, CRECI, contatos)
- Navegação e estrutura do menu
- Tipos de imóveis e bairros
- Estatísticas e serviços oferecidos
- Dados mock para desenvolvimento
- Configurações de SEO e metadados

#### **Sistema de Rotas** 
Estrutura de páginas individuais (Next.js App Router):
- **`/`** - Página inicial (HeroSection) 
- **`/imoveis`** - Busca e listagem de imóveis
- **`/quemsomos`** - Sobre a empresa (AboutSection)
- **`/despachante`** - Serviços de documentação
- **`/anunciar`** - Formulário para anunciar imóveis

#### **Sistema de Logo Otimizado**
- **Múltiplas versões**: logo.png, logo-white.png, logo-compact.png
- **Detecção automática**: Usa a versão correta baseada no contexto
- **Responsividade**: Tamanhos adaptativos (sm, md, lg)
- **Performance**: Pré-carregamento inteligente
- **Especificações**:
  - Logo principal: 320x100px (PNG transparente)
  - Logo branca: 320x100px (para fundos escuros)
  - Logo compacta: 160x160px (quadrada)

#### **Scripts Disponíveis**
- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção  
- `npm run start` - Servidor de produção
- `npm run lint` - Verificação ESLint

### FUNCIONALIDADES IMPLEMENTADAS

#### **🚀 Sistema de Rotas (v2.0)**
- **Páginas individuais**: Cada seção do menu tem sua própria URL
- **Next.js App Router**: Utiliza a estrutura mais moderna do Next.js 15+
- **SEO otimizado**: URLs únicas e amigáveis para cada página
- **Performance**: Carregamento sob demanda e prefetch automático
- **Navegação**: Links diretos para compartilhamento e bookmarks

#### **🎨 Sistema de Logo Avançado**
- **Múltiplas variantes**: header, footer, compact com tamanhos responsivos
- **Detecção automática**: Escolhe a versão correta baseada no contexto
- **Otimização**: Pré-carregamento inteligente e lazy loading
- **Fallback**: Sistema de placeholder caso as imagens não estejam disponíveis
- **Performance**: Componente otimizado para Lighthouse e Core Web Vitals

#### **📱 Sistema de Navegação Moderno**
- **Next.js Link**: Performance otimizada com prefetch
- **Menu responsivo**: Design adaptativo para mobile e desktop
- **Estado ativo**: Destaque automático da página atual
- **Transições**: Animações suaves entre páginas

#### **📋 Seções Funcionais Completas**
- **DespachanteSection**: Serviços de documentação com CTA para WhatsApp
- **AnunciarSection**: Formulário completo integrado ao WhatsApp
- **BuscarImoveisSection**: Sistema de busca de imóveis
- **AboutSection**: Página institucional da empresa
- **HeroSection**: Landing page principal

### MELHORIAS FUTURAS

- **Geração de Regras Contextuais:**
Se você identificar contextos ou padrões específicos que provavelmente serão reutilizados em conversas futuras, adicione uma nova linha, começando com❗Regra recomendada: seguida dos detalhes da regra. Isso ajuda a manter a consistência e a aproveitar o contexto anterior em interações futuras.

- **Sugestão de Refatoração Proativa:**
Ao analisar exemplos de código, se forem identificados potenciais gargalos de desempenho ou problemas de manutenibilidade, proponha proativamente sugestões de refatoração ou otimização de código. Essas propostas devem ser prefixadas com um emoji 🤔 (por exemplo, "🤔 Proposta de Refatoração: ...") para identificá-las facilmente. No entanto, não implemente essas alterações imediatamente; aguarde a confirmação explícita na próxima resposta antes de aplicar quaisquer modificações.

❗**Regra recomendada**: Sempre usar o arquivo `MockData.ts` como fonte única da verdade para informações da empresa, não hardcodar dados de contato, CRECI ou outros dados específicos da imobiliária diretamente nos componentes.

❗**Regra recomendada**: Manter a consistência do sistema de design definido em `theme.ts`, usar as funções helper (getButtonClass, getCardClass, etc.) em vez de classes Tailwind ad-hoc para componentes reutilizáveis.

❗**Regra recomendada**: Para novos componentes UI, seguir o padrão estabelecido nos componentes existentes: interface TypeScript bem definida, props com defaults, uso do utilitário `cn()` para concatenação de classes CSS.

❗**Regra recomendada**: SEMPRE atualizar este arquivo CLAUDE.md quando houver mudanças significativas no projeto (novas dependências, alterações na arquitetura, novos padrões de código, configurações importantes). Manter a documentação sincronizada com o estado atual do projeto é fundamental para consistência nas futuras iterações de desenvolvimento.

❗**Regra recomendada**: Para novas páginas/rotas, seguir a estrutura estabelecida no App Router: criar pasta com nome da rota e arquivo `page.tsx`. Cada página deve importar Header, Footer e a seção correspondente, mantendo o padrão de `activeSection` e `handleSectionChange`.

❗**Regra recomendada**: Usar sempre `Next.js Link` para navegação interna, nunca elementos `<a>` ou `<button>` com `onClick` para mudança de rota. Isso garante performance otimizada e prefetch automático.

❗**Regra recomendada**: O componente Logo deve ser usado com as props adequadas para cada contexto: `variant="header"` para cabeçalho, `variant="footer"` para rodapé, `theme="dark"` para fundos escuros. Nunca hardcodar caminhos de imagem diretamente.

❗**Regra recomendada**: Todas as seções devem ser criadas como componentes separados em `/components/sections/` e exportadas através do `index.ts`. Cada seção deve ser reutilizável e não conter wrapper `<section>` próprio (será adicionado pelas páginas quando necessário).

❗**Regra recomendada**: Para formulários que integram com WhatsApp, usar sempre a função `getWhatsAppUrl()` do MockData para gerar links padronizados, incluindo número formatado e mensagem pré-definida.