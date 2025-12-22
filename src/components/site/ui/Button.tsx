import React from 'react';
import { Icon, IconName } from '@/utils/iconMapper';
import { cn } from '@/utils/helpers';

/**
 * LinkButton - Botão estilizado que renderiza como link (<a>)
 * Use para navegação e links externos (href)
 *
 * Para botões com ações (onClick), use o Button padrão de @/components/site/ui
 */
interface LinkButtonProps {
  text: string;
  icon?: IconName;
  base?: 'base' | 'card' | 'smallBottom';
  variant?: 'standard' | 'contact' | 'inverser' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  href?: string;
  className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  text,
  icon,
  base = 'base',
  variant = 'standard',
  size = 'md',
  fullWidth = false,
  href,
  className
}) => {
  const baseButtonClasses = {
    base: "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 transform hover:-translate-y-0.5",
    card: "inline-flex items-center justify-center transition-colors duration-300 font-semibold rounded-lg",
    smallBottom: "flex items-center gap-2"
  }

  const variantButtonClasses = {
    standard: "bg-black text-white hover:bg-gray-400 hover:text-black shadow-md hover:shadow-lg",
    inverser: "bg-white text-black hover:bg-black hover:text-white shadow-md hover:shadow-lg",
    contact: "bg-green-600 text-white hover:bg-green-400 hover:text-black",
    ghost: "text-black hover:text-gray-700"
  };

  const sizeButtonClasses = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-2.5 text-base gap-2",
    lg: "px-8 py-3 text-lg gap-2.5"
  };

  const buttonClasses = cn(
    baseButtonClasses[base],
    variantButtonClasses[variant],
    sizeButtonClasses[size],
    fullWidth && "w-full",
    className
  );
  
  return (
    <a href={href} className={buttonClasses}>
      {icon && <Icon name={icon} className={size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'} />}
      {text}
    </a>
  );
};

export default LinkButton;