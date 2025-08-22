import React from 'react';
import Image from 'next/image';
import { Icon } from '@/utils/iconMapper';
import { cn } from '@/utils/helpers';
import { siteConfig } from '@/data/siteConfig';

interface LogoProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  showText?: boolean;
  variant?: 'default' | 'compact' | 'full';
  onClick?: () => void;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  src,
  alt = siteConfig.company.fullName,
  width = 160,
  height = 50,
  showText = true,
  variant = 'default',
  onClick,
  className
}) => {
  const handleClick = onClick || (() => {});

  // Se tiver imagem, usa ela
  if (src) {
    return (
      <div 
        onClick={handleClick}
        className={cn("cursor-pointer", className)}
      >
        <Image 
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-auto h-12"
          priority
        />
      </div>
    );
  }

  // Placeholder enquanto não tem imagem
  return (
    <div 
      onClick={handleClick}
      className={cn("flex items-center cursor-pointer", className)}
    >
      <div className="p-2 mr-3 bg-black rounded-lg">
        <Icon name="Home" className="w-6 h-6 text-white" />
      </div>
      {showText && (
        <div>
          <h1 className={cn(
            "font-bold text-black",
            variant === 'compact' ? 'text-lg' : 'text-xl'
          )}>
            Gomes & Noronha
          </h1>
          {variant === 'full' && (
            <p className="text-xs text-gray-600">Negócios Imobiliários</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;