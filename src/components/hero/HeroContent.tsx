import React from 'react';
import { Text, Badge } from '@/components/ui';

interface HeroContentProps {
  badge?: string;
  title: string;
  subtitle: string;
  highlightWord?: string;
}

const HeroContent: React.FC<HeroContentProps> = ({
  badge = "Há mais de 20 anos realizando sonhos",
  title,
  subtitle,
  highlightWord = "Ideal"
}) => {
  const titleParts = title.split(highlightWord);
  
  return (
    <div className="mb-16 text-center">
      <Badge variant="secondary" className="inline-flex items-center gap-2 mb-8">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        {badge}
      </Badge>

      <Text as="h1" variant="white" className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
        {titleParts[0]}
        {highlightWord && (
          <span className="block text-transparent bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text">
            {highlightWord}
          </span>
        )}
        {titleParts[1]}
      </Text>

      <Text variant="muted" className="max-w-3xl mx-auto mb-12 text-xl leading-relaxed text-gray-300 md:text-2xl">
        {subtitle}
      </Text>
    </div>
  );
};

export default HeroContent;