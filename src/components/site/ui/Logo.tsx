import React from 'react';
import Image from 'next/image';
import { Icon } from '@/utils/iconMapper';
import { cn } from '@/utils/helpers';
import { companyInfo } from '@/data/MockData';

interface LogoProps {
  variant?: 'header' | 'footer' | 'compact' | 'full';
  theme?: 'light' | 'dark' | 'auto';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  textColor?: 'black' | 'white';
  onClick?: () => void;
  className?: string;
  priority?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'header',
  theme = 'auto',
  size = 'md',
  showText = true,
  textColor,
  onClick,
  className,
  priority = false
}) => {
  const handleClick = onClick || (() => {});

  // Definir qual imagem usar baseado no tema e variant
  const getLogoSrc = () => {
    // Se não tem imagem ainda, return null para mostrar placeholder
    if (!companyInfo.logo || companyInfo.logo === "/logo.png") {
      return null;
    }

    // Escolher a imagem baseada no tema
    if (theme === 'dark' || (theme === 'auto' && variant === 'header')) {
      return companyInfo.logoWhite || companyInfo.logo;
    }
    
    if (variant === 'compact') {
      return companyInfo.logoCompact || companyInfo.logo;
    }

    return companyInfo.logo;
  };

  // Definir dimensões baseadas no tamanho e variante
  const getDimensions = () => {
    const sizes = {
      header: { sm: { w: 120, h: 40 }, md: { w: 160, h: 50 }, lg: { w: 200, h: 60 } },
      footer: { sm: { w: 140, h: 45 }, md: { w: 180, h: 55 }, lg: { w: 220, h: 65 } },
      compact: { sm: { w: 40, h: 40 }, md: { w: 50, h: 50 }, lg: { w: 60, h: 60 } },
      full: { sm: { w: 160, h: 50 }, md: { w: 200, h: 60 }, lg: { w: 240, h: 70 } }
    };
    
    return sizes[variant][size];
  };

  // Definir classe CSS para altura responsiva
  const getHeightClass = () => {
    const classes = {
      header: { sm: 'h-8', md: 'h-12', lg: 'h-14' },
      footer: { sm: 'h-10', md: 'h-14', lg: 'h-16' },
      compact: { sm: 'h-8 w-8', md: 'h-10 w-10', lg: 'h-12 w-12' },
      full: { sm: 'h-10', md: 'h-14', lg: 'h-16' }
    };
    
    return classes[variant][size];
  };

  // Determinar cor do texto automaticamente se não especificada
  const getTextColor = () => {
    if (textColor) return textColor;
    if (theme === 'dark' || (theme === 'auto' && variant === 'header')) return 'white';
    return 'black';
  };

  const logoSrc = getLogoSrc();
  const dimensions = getDimensions();
  const heightClass = getHeightClass();
  const finalTextColor = getTextColor();

  // Se tiver imagem, usa ela
  if (logoSrc) {
    return (
      <div 
        onClick={handleClick}
        className={cn("cursor-pointer inline-block", className)}
      >
        <Image 
          src={logoSrc}
          alt={companyInfo.fullName}
          width={dimensions.w}
          height={dimensions.h}
          className={cn("w-auto object-contain", heightClass)}
          priority={priority || variant === 'header'}
          sizes="(max-width: 768px) 120px, (max-width: 1024px) 160px, 200px"
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
      <div className={cn(
        "mr-3 rounded-lg flex items-center justify-center",
        variant === 'compact' ? 'p-2' : 'p-2',
        finalTextColor === 'white' ? 'bg-white' : 'bg-black'
      )}>
        <Icon 
          name="Home" 
          className={cn(
            "w-6 h-6",
            finalTextColor === 'white' ? 'text-black' : 'text-white'
          )} 
        />
      </div>
      {showText && variant !== 'compact' && (
        <div>
          <h1 className={cn(
            "font-bold leading-tight",
            finalTextColor === 'white' ? 'text-white' : 'text-black',
            size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-xl' : 'text-lg'
          )}>
            {companyInfo.name}
          </h1>
          {(variant === 'full' || variant === 'footer') && (
            <p className={cn(
              "text-xs leading-tight",
              finalTextColor === 'white' ? 'text-gray-300' : 'text-gray-600'
            )}>
              Negócios Imobiliários
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;