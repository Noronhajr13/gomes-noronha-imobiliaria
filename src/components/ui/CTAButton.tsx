import React from 'react';
import { Icon, IconName } from '@/utils/iconMapper';
import { cn } from '@/utils/helpers';

interface CTAButtonProps {
  text: string;
  icon?: IconName;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  onClick?: () => void;
  href?: string;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  text,
  icon,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
  href,
  className
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 transform hover:-translate-y-0.5";
  
  const variantClasses = {
    primary: "bg-black text-white hover:bg-gray-800 shadow-md hover:shadow-lg",
    secondary: "bg-white text-black hover:bg-gray-100 shadow-md hover:shadow-lg",
    outline: "border-2 border-black text-black hover:bg-black hover:text-white",
    ghost: "text-black hover:text-gray-700"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-2.5 text-base gap-2",
    lg: "px-8 py-3 text-lg gap-2.5"
  };

  const buttonClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className
  );

  const content = (
    <>
      {icon && <Icon name={icon} className={size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'} />}
      {text}
    </>
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {content}
    </button>
  );
};

export default CTAButton;