### IMPORTANTE

- Sempre responda em português;
- Mantenha o contexto da conversa atual em todas as respostas;
- Siga as regras e padrões de código estabelecidos neste arquivo CLAUDE.md;
- Se houver dúvidas sobre qualquer regra ou padrão, peça esclarecimentos antes de prosseguir.

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

❗**Regra recomendada**: Sempre executar `npm run lint` antes de finalizar qualquer alteração e corrigir todos os warnings de variáveis não utilizadas e imports desnecessários.

❗**Regra recomendada**: Para novos componentes, sempre implementar todas as props definidas na interface TypeScript. Props opcionais devem ter valores padrão explícitos ou tratamento condicional.

❗**Regra recomendada**: Usar `React.memo` para componentes que recebem props complexas ou que são renderizados frequentemente, especialmente em listas de imóveis. Incluir `displayName` para debug.

❗**Regra recomendada**: Implementar loading states e error boundaries para todas as operações assíncronas, seguindo o padrão de UX estabelecido.

❗**Regra recomendada**: Configurar sempre metadataBase e structured data (JSON-LD) para todas as páginas que contenham informações de imóveis para melhor SEO.

❗**Regra recomendada**: Para formulários de contato e busca, sempre usar `useCallback` e `useMemo` para otimizar re-renders e performance em componentes pesados.