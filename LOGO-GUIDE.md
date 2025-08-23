# 📐 Guia de Logos - Gomes & Noronha

## 🎯 Tamanhos Ideais das Imagens

### **Logo Principal** (`/public/logo.png`)
- **Dimensões**: 320x100px ou 480x150px
- **Proporção**: 3.2:1 (horizontal)
- **Uso**: Header, footer, documentos
- **Fundo**: Transparente (PNG)

### **Logo Branca** (`/public/logo-white.png`) 
- **Dimensões**: 320x100px ou 480x150px
- **Proporção**: 3.2:1 (horizontal)
- **Uso**: Fundos escuros (header, footer)
- **Fundo**: Transparente (PNG)

### **Logo Compacta** (`/public/logo-compact.png`)
- **Dimensões**: 160x160px (quadrada)
- **Uso**: Favicons, ícones, mobile
- **Fundo**: Transparente (PNG)

### **Favicon** (`/public/favicon.ico`)
- **Dimensões**: 32x32px, 16x16px
- **Formato**: ICO (multi-resolução)

## 🎨 Especificações de Design

### **Cores Recomendadas**
- Funcionar bem em fundo **preto** (header)
- Funcionar bem em fundo **cinza escuro** (footer)
- Versão **branca** para fundos escuros
- Versão **colorida** para fundos claros

### **Qualidade**
- **Resolução**: Alta (2x para Retina)
- **Formato**: PNG com transparência
- **Peso**: Máximo 50KB cada
- **Compressão**: Otimizada para web

## 🚀 Como Usar o Componente Logo

O componente `<Logo>` foi otimizado e suporta múltiplas variantes:

### **No Header**
```tsx
<Logo 
  variant="header"    // Otimizado para cabeçalho
  theme="dark"        // Usa logo branca para fundo escuro
  size="md"          // Tamanho médio
  priority={true}    // Carregamento prioritário
/>
```

### **No Footer**
```tsx
<Logo 
  variant="footer"   // Otimizado para rodapé
  theme="dark"       // Usa logo branca 
  size="lg"         // Tamanho grande
/>
```

### **Versão Compacta**
```tsx
<Logo 
  variant="compact"  // Usa logo quadrada
  size="sm"         // Tamanho pequeno
/>
```

## 📱 Responsividade

O logo se adapta automaticamente:
- **Desktop**: Tamanho completo
- **Tablet**: Tamanho médio
- **Mobile**: Tamanho reduzido

## 🔧 Configuração Atual

Os arquivos devem ser colocados em:
- `public/logo.png` - Logo principal
- `public/logo-white.png` - Logo branca
- `public/logo-compact.png` - Logo compacta
- `public/favicon.ico` - Favicon

## ⚡ Otimizações Implementadas

1. **Pré-carregamento**: Imagens são pré-carregadas
2. **Lazy Loading**: Carregamento inteligente
3. **Responsive**: Tamanhos adaptativos
4. **Performance**: Otimizado para Lighthouse
5. **SEO**: Alt texts automáticos

## 🎨 Dicas de Design

1. **Legibilidade**: Logo deve ser legível em 48px de altura
2. **Contraste**: Testar em fundos claros e escuros
3. **Simplicidade**: Evitar detalhes muito pequenos
4. **Consistência**: Manter proporções entre versões

---

💡 **Após adicionar as imagens**, o sistema automaticamente detecta e usa os logos reais em vez do placeholder atual!