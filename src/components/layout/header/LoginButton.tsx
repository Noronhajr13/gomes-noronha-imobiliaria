import React from 'react';
import { useRouter } from 'next/navigation'; // Para Next.js 13+ App Router
// import { useRouter } from 'next/router'; // Para Next.js 12 ou Pages Router
// import { useNavigate } from 'react-router-dom'; // Para React Router

interface LoginButtonProps {
  variant?: 'filled' | 'outline' | 'minimal' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  href?: string; // Para navegação customizada
}

const LoginButton: React.FC<LoginButtonProps> = ({
  variant = 'filled',
  size = 'md',
  className = 'hidden md:flex',
  children = 'Área Corretor',
  onClick,
  disabled = false,
  href = '/login'
}) => {
  const router = useRouter();
  // const navigate = useNavigate(); // Para React Router

  const handleClick = () => {
    if (disabled) return;
    
    if (onClick) {
      onClick();
    } else {
      router.push(href); // Para Next.js
      // navigate(href); // Para React Router
      // window.location.href = href; // Alternativa simples
    }
  };

  // Estilos base
  const baseStyles = `
    inline-flex items-center justify-center
    font-medium rounded-lg
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black
    transition-all duration-200
    active:scale-95
    touch-manipulation
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
  `;

  // Tamanhos
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs min-h-[36px] md:min-h-[auto]',
    md: 'px-4 py-2 text-sm min-h-[44px] md:min-h-[auto]',
    lg: 'px-6 py-3 text-base min-h-[48px] md:min-h-[auto]'
  };

  // Variantes
  const variantStyles = {
    filled: `
      bg-white text-black
      hover:bg-gray-100 
      focus:ring-white
    `,
    outline: `
      border-2 border-white text-white bg-transparent
      hover:bg-white hover:text-black 
      focus:ring-white
    `,
    minimal: `
      text-white bg-transparent
      hover:bg-white hover:bg-opacity-10 
      focus:ring-white focus:ring-opacity-50
    `,
    gradient: `
      bg-gradient-to-r from-blue-500 to-purple-600 text-white
      hover:from-blue-600 hover:to-purple-700 
      focus:ring-blue-500
    `
  };

  const buttonClasses = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${className}
  `;

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className={buttonClasses}
      aria-label="Fazer login"
    >
      {children}
    </button>
  );
};

export default LoginButton;