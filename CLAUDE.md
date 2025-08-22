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
├── app/                    # App Router (Next.js 13+)
│   ├── globals.css         # Estilos globais
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Página inicial
├── components/
│   ├── hero/               # Componentes da seção hero
│   ├── layout/             # Layout e navegação
│   │   └── header/         # Componentes do cabeçalho
│   ├── property/           # Sistema de imóveis
│   ├── sections/           # Seções da página
│   ├── stats/              # Componentes de estatísticas  
│   └── ui/                 # Componentes UI reutilizáveis
├── data/
│   ├── MockData.ts         # Dados mock para desenvolvimento
│   └── siteConfig.ts       # Configurações principais do site
├── hooks/
│   └── useActiveSection.ts # Hook para seções ativas
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
- **State Management**: React hooks (useState, useEffect, custom hooks)
- **Estilização**: Tailwind CSS com classes utilitárias + sistema de tema
- **Responsividade**: Mobile-first com breakpoints Tailwind
- **Ícones**: Lucide React com mapeamento centralizado

#### **Configurações do Site** 
Todas centralizadas em `src/data/siteConfig.ts`:
- Informações da empresa (nome, CRECI, contatos)
- Navegação e estrutura do menu
- Tipos de imóveis e bairros
- Estatísticas e serviços oferecidos
- Configurações de SEO e metadados

#### **Scripts Disponíveis**
- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção  
- `npm run start` - Servidor de produção
- `npm run lint` - Verificação ESLint

### MELHORIAS

- **Geração de Regras Contextuais Futuras:**
Se você identificar contextos ou padrões específicos que provavelmente serão reutilizados em conversas futuras, adicione uma nova linha, começando com❗Regra recomendada: seguida dos detalhes da regra. Isso ajuda a manter a consistência e a aproveitar o contexto anterior em interações futuras.

- **Sugestão de Refatoração Proativa:**
Ao analisar exemplos de código, se forem identificados potenciais gargalos de desempenho ou problemas de manutenibilidade, proponha proativamente sugestões de refatoração ou otimização de código. Essas propostas devem ser prefixadas com um emoji 🤔 (por exemplo, "🤔 Proposta de Refatoração: ...") para identificá-las facilmente. No entanto, não implemente essas alterações imediatamente; aguarde a confirmação explícita na próxima resposta antes de aplicar quaisquer modificações.

❗**Regra recomendada**: Sempre usar o arquivo `siteConfig.ts` como fonte única da verdade para informações da empresa, não hardcodar dados de contato, CRECI ou outros dados específicos da imobiliária diretamente nos componentes.

❗**Regra recomendada**: Manter a consistência do sistema de design definido em `theme.ts`, usar as funções helper (getButtonClass, getCardClass, etc.) em vez de classes Tailwind ad-hoc para componentes reutilizáveis.

❗**Regra recomendada**: Para novos componentes UI, seguir o padrão estabelecido nos componentes existentes: interface TypeScript bem definida, props com defaults, uso do utilitário `cn()` para concatenação de classes CSS.

❗**Regra recomendada**: SEMPRE atualizar este arquivo CLAUDE.md quando houver mudanças significativas no projeto (novas dependências, alterações na arquitetura, novos padrões de código, configurações importantes). Manter a documentação sincronizada com o estado atual do projeto é fundamental para consistência nas futuras iterações de desenvolvimento.