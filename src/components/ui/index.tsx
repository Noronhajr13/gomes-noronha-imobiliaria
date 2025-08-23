import React from 'react';
import { getButtonClass, getCardClass, getTextClass, getBadgeClass } from '@/styles/theme';
import { cn } from '@/utils/helpers';

// Botão reutilizável
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}) => {
  return (
    <button 
      className={cn(getButtonClass(variant, size), className)}
      {...props}
    >
      {children}
    </button>
  );
};

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
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'photo';
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

// Section wrapper reutilizável
interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'DEFAULT' | 'alternate' | 'dark';
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ 
  variant = 'DEFAULT', 
  className, 
  children, 
  ...props 
}) => {
  const sectionClasses = {
    DEFAULT: 'bg-white',
    alternate: 'bg-gray-50',
    dark: 'bg-gray-900 text-white'
  };
  
  return (
    <section 
      className={cn(sectionClasses[variant], className)}
      {...props}
    >
      {children}
    </section>
  );
};

// Export outros componentes
export { default as SocialLinks } from './SocialLinks';
export { default as Logo } from './Logo';
export { default as LogoPreloader } from './LogoPreloader';