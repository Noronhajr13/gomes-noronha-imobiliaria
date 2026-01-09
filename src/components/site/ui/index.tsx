import React from 'react';
import { getCardClass, getTextClass, getBadgeClass } from '@/styles/theme';
import { cn } from '@/utils/helpers';

// Button unificado - importado do arquivo dedicado
export { default as Button, LinkButton } from './Button';
export type { ButtonProps, ButtonVariant, ButtonSize } from './Button';

// Card reutilizável
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'DEFAULT' | 'elevated' | 'simple';
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ 
  variant = 'DEFAULT', 
  className, 
  children, 
  ...props 
}) => {
  return (
    <div 
      className={cn(getCardClass(variant), className)}
      {...props}
    >
      {children}
    </div>
  );
};

// Text reutilizável
interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary' | 'muted' | 'white' | 'accent';
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({ 
  variant = 'primary', 
  as: Component = 'p',
  className, 
  children, 
  ...props 
}) => {
  return React.createElement(Component, {
    className: cn(getTextClass(variant), className),
    ...props
  }, children);
};

// Badge reutilizável
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'photo' | 'specialty';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ 
  variant = 'primary', 
  className, 
  children, 
  ...props 
}) => {
  return (
    <span 
      className={cn(getBadgeClass(variant), className)}
      {...props}
    >
      {children}
    </span>
  );
};



// Export outros componentes
export { default as SocialLinks } from './SocialLinks';
export { default as Logo } from './Logo';
export { default as LogoPreloader } from './LogoPreloader';
export { default as Container } from './Container';