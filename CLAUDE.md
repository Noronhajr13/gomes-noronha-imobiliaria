# CLAUDE.md - Gomes & Noronha Imoveis

## IMPORTANTE

- Sempre responda em **portugues brasileiro**;
- Mantenha o contexto da conversa atual em todas as respostas;
- Siga as regras e padroes de codigo estabelecidos neste arquivo CLAUDE.md;
- Se houver duvidas sobre qualquer regra ou padrao, peca esclarecimentos antes de prosseguir.

---

## Sobre o Projeto

**Gomes & Noronha** e um site institucional de imobiliaria localizada em Juiz de Fora, MG. O projeto apresenta imoveis, equipe de corretores e servicos de despachante imobiliario.

### Stack Tecnologica

| Tecnologia | Versao | Uso |
|------------|--------|-----|
| Next.js | 15.5.9 | Framework React com App Router |
| React | 19.1.0 | Biblioteca UI |
| TypeScript | 5.x | Tipagem estatica |
| Tailwind CSS | 3.4.x | Estilizacao |
| Lucide React | 0.540+ | Biblioteca de icones |
| React Hook Form | 7.62+ | Formularios |
| Zod | 4.1+ | Validacao de schemas |
| TanStack Query | 5.87+ | Gerenciamento de estado servidor |
| Axios | 1.11+ | Requisicoes HTTP |
| date-fns | 4.1+ | Manipulacao de datas |

### Estrutura de Pastas

```
src/
├── app/                      # App Router (Next.js 15)
│   ├── layout.tsx            # Layout raiz
│   ├── page.tsx              # Pagina inicial
│   ├── globals.css           # Estilos globais
│   ├── robots.ts             # Configuracao robots.txt
│   ├── sitemap.ts            # Sitemap dinamico
│   ├── anunciar/             # Pagina de anuncio
│   ├── despachante/          # Pagina do despachante
│   ├── imoveis/              # Listagem e detalhe de imoveis
│   │   ├── page.tsx          # Lista de imoveis
│   │   └── [code]/page.tsx   # Detalhe do imovel (rota dinamica)
│   └── quemsomos/            # Pagina institucional
│
├── components/
│   └── site/
│       ├── ui/               # Componentes UI reutilizaveis
│       │   ├── index.tsx     # Barrel exports (Button, Card, Text, Badge)
│       │   ├── Button.tsx    # Botao unificado (link/button)
│       │   ├── Container.tsx
│       │   ├── Logo.tsx
│       │   └── ...
│       ├── layout/           # Componentes de layout
│       │   ├── header/       # Header e navegacao
│       │   └── footer/       # Footer
│       ├── sections/         # Secoes de pagina
│       │   ├── index.ts      # Barrel exports
│       │   ├── HomeSection.tsx
│       │   └── ...
│       ├── property/         # Componentes de imoveis
│       │   ├── index.ts
│       │   ├── PropertyCard.tsx
│       │   ├── PropertyGrid.tsx
│       │   └── detail/       # Componentes de detalhe
│       ├── about/            # Componentes sobre a empresa
│       ├── stats/            # Componentes de estatisticas
│       └── seo/              # Structured data
│
├── hooks/                    # Custom hooks
│   ├── useNavigation.ts      # Navegacao centralizada
│   ├── usePropertySearch.ts  # Busca de imoveis
│   ├── usePropertyFilters.ts # Filtros de imoveis
│   ├── useActiveSection.ts
│   └── useLogoPreload.ts
│
├── services/
│   └── api.ts                # Servico de comunicacao com CRM
│
├── types/
│   ├── global.ts             # Tipos globais
│   └── property.ts           # Tipos de imoveis (Property, PropertyDisplay)
│
├── utils/
│   ├── constants.ts          # Constantes (breakpoints, z-index, mensagens)
│   ├── helpers.ts            # Funcoes utilitarias (cn, formatPhone, etc)
│   ├── iconMapper.ts         # Mapeamento de icones Lucide
│   ├── propertyConverter.ts  # Conversao Property -> PropertyDisplay
│   └── propertyTypeMapper.ts # Mapeamento de tipos de imoveis
│
├── styles/
│   └── theme.ts              # Sistema de design (cores, componentes)
│
└── data/
    └── MockData.ts           # Dados mockados e configuracoes
```

---

## Padroes de Codigo

### 1. Componentes React

#### Estrutura padrao de componente

```tsx
"use client"; // Apenas se usar hooks/interatividade

import React from 'react';
// 1. Imports externos
import { useState } from 'react';
// 2. Imports de componentes
import { Button, Card } from '@/components/site/ui';
// 3. Imports de hooks/utils
import { cn } from '@/utils/helpers';
// 4. Imports de tipos
import { PropertyDisplay } from '@/types/property';

// Interface de props
interface ComponentNameProps {
  property: PropertyDisplay;
  className?: string;
}

// Componente (usar React.memo para otimizacao quando apropriado)
const ComponentName: React.FC<ComponentNameProps> = React.memo(({
  property,
  className,
}) => {
  const [state, setState] = useState(false);

  return (
    <div className={cn("base-classes", className)}>
      {/* conteudo */}
    </div>
  );
});

// DisplayName para DevTools
ComponentName.displayName = 'ComponentName';

export default ComponentName;
```

#### Convencoes de nomenclatura

- **Componentes**: PascalCase (`PropertyCard.tsx`, `HomeSection.tsx`)
- **Hooks**: camelCase com prefixo `use` (`usePropertySearch.ts`)
- **Utilitarios**: camelCase (`formatPhone`, `cn`)
- **Tipos/Interfaces**: PascalCase (`PropertyDisplay`, `SearchFilters`)
- **Constantes**: UPPER_SNAKE_CASE (`PLACEHOLDER_IMAGE`, `BREAKPOINTS`)

### 2. Sistema de Tipos

#### Tipos de Property

O projeto usa um sistema de tipos em camadas:

```
API/CRM -> Property (raw) -> toPropertyDisplay() -> PropertyDisplay (UI)
```

| Tipo | Origem | Uso |
|------|--------|-----|
| `Property` | `@/services/api` | Dados brutos da API |
| `PropertyDisplay` | `@/types/property` | Dados formatados para UI |

**Regra**: Sempre converter `Property` para `PropertyDisplay` antes de passar para componentes UI usando `toPropertyDisplay()`.

### 3. Estilizacao

#### Tailwind CSS + Sistema de Design

O projeto usa um sistema de design centralizado em `src/styles/theme.ts`:

```tsx
// Importar helpers do tema
import { getButtonClass, getCardClass, getTextClass } from '@/styles/theme';

// Usar com cn() para composicao
<button className={cn(getButtonClass('primary', 'md'), 'custom-class')}>
```

#### Classes CSS predefinidas

| Helper | Variantes |
|--------|-----------|
| `getButtonClass(variant, size)` | primary, secondary, success, outline, danger |
| `getCardClass(variant)` | DEFAULT, elevated, simple |
| `getTextClass(variant)` | primary, secondary, muted, white, accent |
| `getBadgeClass(variant)` | primary, secondary, success, warning, danger, photo, specialty |

#### Funcao cn() para composicao

```tsx
import { cn } from '@/utils/helpers';

// Composicao de classes condicionais
<div className={cn(
  "base-class",
  isActive && "active-class",
  variant === 'dark' && "dark-class",
  className // props.className
)}>
```

### 4. Icones

Usar o sistema de icones centralizado:

```tsx
import { Icon, IconName } from '@/utils/iconMapper';

// Uso
<Icon name="Home" className="w-5 h-5" />

// Tipos disponiveis: Home, Users, Building, Phone, Mail, MapPin, etc.
```

### 5. Navegacao

Usar o hook `useNavigation` para navegacao:

```tsx
import { useNavigation } from '@/hooks/useNavigation';

const { handleSectionChange, navigateTo, goBack, routes } = useNavigation();
```

### 6. API e Servicos

#### Chamadas a API

```tsx
import { fetchProperties, fetchPropertyById, createLead } from '@/services/api';

// Buscar imoveis com filtros
const properties = await fetchProperties({
  type: 'APARTAMENTO',
  minPrice: 100000,
  maxPrice: 500000,
  featured: true
});
```

#### Variaveis de ambiente

| Variavel | Descricao |
|----------|-----------|
| `NEXT_PUBLIC_CRM_API_URL` | URL da API do CRM |
| `NEXT_PUBLIC_CRM_URL` | URL do painel CRM |
| `NEXT_PUBLIC_SITE_URL` | URL do site (para SEO) |

---

## Padroes de Paginas

### Client Components (paginas interativas)

```tsx
"use client";

import { useState } from 'react';
import Header from '@/components/site/layout/header/Header';
import Footer from '@/components/site/layout/footer/Footer';
import { SectionComponent } from '@/components/site/sections';
import { useNavigation } from '@/hooks/useNavigation';

export default function PageName() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { handleSectionChange } = useNavigation();

  return (
    <div className="min-h-screen bg-white">
      <Header
        activeSection="page-id"
        setActiveSection={handleSectionChange}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main>
        <SectionComponent />
      </main>

      <Footer />
    </div>
  );
}
```

### Server Components (paginas com dados)

```tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { fetchPropertyById } from '@/services/api';
import ClientComponent from './ClientComponent';

// Forcar SSR quando necessario
export const dynamic = 'force-dynamic';

// Metadata dinamico
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const data = await fetchData(params);
  return {
    title: data.title,
    description: data.description,
  };
}

// Pagina
export default async function Page({ params }: PageProps) {
  const data = await fetchData(params);
  if (!data) notFound();
  return <ClientComponent data={data} />;
}
```

---

## Organizacao de Imports

Ordem padrao:

```tsx
// 1. "use client" (se necessario)
"use client";

// 2. React e Next.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// 3. Bibliotecas externas
import { useForm } from 'react-hook-form';

// 4. Componentes internos
import { Button, Card } from '@/components/site/ui';
import Header from '@/components/site/layout/header/Header';

// 5. Hooks
import { useNavigation } from '@/hooks/useNavigation';

// 6. Servicos e Utils
import { fetchProperties } from '@/services/api';
import { cn } from '@/utils/helpers';

// 7. Tipos
import { Property, PropertyDisplay } from '@/types/property';

// 8. Dados e constantes
import { companyInfo } from '@/data/MockData';
```

---

## Padroes de Commit

### Formato

```
<tipo>: <descricao em portugues>

[corpo opcional]

[footer opcional]
```

### Tipos

| Tipo | Descricao |
|------|-----------|
| `feat` | Nova funcionalidade |
| `fix` | Correcao de bug |
| `refactor` | Refatoracao de codigo |
| `style` | Formatacao, sem mudanca de logica |
| `docs` | Documentacao |
| `test` | Testes |
| `chore` | Tarefas de manutencao |
| `perf` | Melhoria de performance |
| `security` | Correcoes de seguranca |

### Exemplos

```bash
feat: adicionar filtro por bairro na busca de imoveis
fix: corrigir erro de keys duplicadas em listas React
refactor: unificar tipos Property e corrigir inconsistencias
docs: atualizar CLAUDE.md com padroes do projeto
```

---

## Checklist de Desenvolvimento

### Antes de criar um componente

- [ ] Verificar se ja existe componente similar em `src/components/site/ui/`
- [ ] Usar componentes base (Button, Card, Text, Badge) quando possivel
- [ ] Definir interface de props com tipos adequados
- [ ] Adicionar `displayName` para DevTools

### Antes de estilizar

- [ ] Verificar se existe classe no tema (`src/styles/theme.ts`)
- [ ] Usar `cn()` para composicao de classes
- [ ] Evitar estilos inline
- [ ] Manter responsividade (mobile-first)

### Antes de fazer commit

- [ ] Executar `npm run lint`
- [ ] Executar `npm run build`
- [ ] Verificar se nao ha erros de TypeScript
- [ ] Seguir padrao de mensagem de commit

### Ao trabalhar com imoveis

- [ ] Usar `Property` para dados da API
- [ ] Converter para `PropertyDisplay` antes de passar para UI
- [ ] Usar `toPropertyDisplay()` ou `toPropertyDisplayList()`
- [ ] Tratar imagens com placeholder quando necessario

---

## Problemas Conhecidos e Solucoes

### Keys duplicadas em listas React

**Problema**: Erro de keys duplicadas ao renderizar listas.

**Solucao**: Usar combinacao unica como key:

```tsx
{items.map((item, index) => (
  <Component key={`${item.id}-${index}`} item={item} />
))}
```

### Rotas dinamicas nao funcionando

**Problema**: Paginas dinamicas retornando 404 em producao.

**Solucao**: Adicionar `export const dynamic = 'force-dynamic'` na pagina.

### Imagens da API nao carregando

**Problema**: URLs relativas de imagens nao funcionam.

**Solucao**: Usar `normalizeImageUrl()` de `@/services/api`:

```tsx
import { normalizeImageUrl } from '@/services/api';
const fullUrl = normalizeImageUrl(property.images[0]);
```

---

## Melhorias Futuras

### Geracao de Regras Contextuais

Se voce identificar contextos ou padroes especificos que provavelmente serao reutilizados em conversas futuras, adicione uma nova linha, comecando com:

> Regra recomendada: [detalhes da regra]

### Sugestao de Refatoracao Proativa

Ao analisar exemplos de codigo, se forem identificados potenciais gargalos de desempenho ou problemas de manutenibilidade, proponha proativamente sugestoes de refatoracao ou otimizacao de codigo.

Essas propostas devem ser prefixadas com um emoji (por exemplo, "Proposta de Refatoracao: ...") para identifica-las facilmente.

**IMPORTANTE**: Nao implemente essas alteracoes imediatamente; aguarde a confirmacao explicita na proxima resposta antes de aplicar quaisquer modificacoes.

---

## Comandos Uteis

```bash
# Desenvolvimento
npm run dev          # Iniciar servidor de desenvolvimento

# Build
npm run build        # Build de producao
npm run start        # Iniciar servidor de producao

# Qualidade
npm run lint         # Verificar lint
```

---

## Contatos e Referencias

- **CRM API**: Variavel `NEXT_PUBLIC_CRM_API_URL`
- **Repositorio CRM**: Sistema separado para gerenciamento de imoveis
- **Icones**: [Lucide Icons](https://lucide.dev/icons/)
- **UI Components**: Radix UI (Dialog, Select, Tabs, etc.)

---

## Regras Adicionais Identificadas

> Regra recomendada: Sempre usar `React.memo` em componentes de lista que recebem props complexas (PropertyCard, TeamMemberCard) para evitar re-renders desnecessarios.

> Regra recomendada: Preferir barrel exports (index.ts) em pastas de componentes para imports mais limpos.

> Regra recomendada: Manter dados mockados e configuracoes da empresa centralizados em `@/data/MockData.ts`.

> Regra recomendada: Usar o sistema de rotas centralizado (`useNavigation`) ao inves de `useRouter` diretamente para navegacao entre secoes.

> Regra recomendada: Ao adicionar novos icones, atualizar o `iconMapper.ts` com o novo icone do Lucide.
