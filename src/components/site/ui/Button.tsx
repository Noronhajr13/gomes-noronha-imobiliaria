"use client";

import React from 'react';
import Link from 'next/link';
import { Icon, IconName } from '@/utils/iconMapper';
import { getButtonClass } from '@/styles/theme';
import { cn } from '@/utils/helpers';

/**
 * Button - Componente unificado de botão
 *
 * Comportamento inteligente:
 * - Com href interno (começa com /) → renderiza como Next/Link
 * - Com href externo → renderiza como <a> com target="_blank"
 * - Sem href → renderiza como <button>
 */

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'outline' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: IconName;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

// Verifica se a URL é externa
const isExternalUrl = (href: string): boolean => {
  return href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:');
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className,
  children,
  onClick,
  href,
  type = 'button',
  disabled = false,
}) => {
  const buttonClasses = cn(
    getButtonClass(variant, size),
    fullWidth && 'w-full',
    'inline-flex items-center justify-center gap-2',
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  const iconSize = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';

  const content = (
    <>
      {icon && iconPosition === 'left' && <Icon name={icon} className={iconSize} />}
      {children}
      {icon && iconPosition === 'right' && <Icon name={icon} className={iconSize} />}
    </>
  );

  // Se tem href, renderiza como link
  if (href) {
    // Link externo
    if (isExternalUrl(href)) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
          onClick={onClick}
        >
          {content}
        </a>
      );
    }

    // Link interno - usa Next/Link
    return (
      <Link href={href} className={buttonClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  // Sem href, renderiza como button
  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

Button.displayName = 'Button';

export default Button;

// Alias para retrocompatibilidade
export { Button as LinkButton };
