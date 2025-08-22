import React from 'react';
import { Text, Badge } from '@/components/ui';

interface HeroContentProps {
  badge?: string,
  title?: string;
  subtitle?: string;
  description?: string;
  highlightWord?: string;
  showCreci?: boolean;
}

const HeroContent: React.FC<HeroContentProps> = ({
  badge = "Venha conhecer nossos imóveis",
  title = "Transformamos Sonhos em Endereços",
  subtitle = "A Gomes & Noronha é especialista em vendas em Juiz de Fora.",
  description = "Há alguns anos realizando sonhos e conectando pessoas aos imóveis perfeitos para suas necessidades.",
  highlightWord,
  showCreci = true
}) => {
  // Função para destacar palavra no título
  const renderTitle = () => {
    if (!highlightWord) return title;
    
    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-black">
          {highlightWord}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="mb-12 text-center">
      <Badge variant="secondary" className="inline-flex items-center gap-2 mb-8">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        {badge}
      </Badge>

      {/* Título Principal */}
      <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
        {renderTitle()}
      </h1>

      {/* Subtítulo com destaque */}
      <p className="mb-4 text-xl text-gray-300 md:text-2xl">
        A <strong className="text-white">Gomes & Noronha</strong> é especialista em vendas em{' '}
        <strong className="text-white">Juiz de Fora</strong>.
      </p>

      {/* Descrição */}
      <p className="max-w-3xl mx-auto text-lg text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default HeroContent;