import React from 'react';
import { Icon, IconName } from '@/utils/iconMapper';
import { cn } from '@/utils/helpers';

interface NavigationItemProps {
  id: string;
  name: string;
  icon: string;
  isActive: boolean;
  onClick: (id: string) => void;
  variant?: 'light' | 'dark';
  index?: number;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  id,
  name,
  icon,
  isActive,
  onClick,
  variant = 'light',
  index = 0
}) => {
  const handleClick = () => onClick(id);

  return (
    <button
      onClick={handleClick}
      className={cn(
        "relative flex items-center gap-2 text-sm font-medium transition-all duration-300 px-4 py-3 rounded-xl group",
        isActive 
          ? 'text-white bg-black shadow-lg transform scale-105'
          : 'text-gray-200 hover:text-black hover:bg-gray-100'
      )}
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* Ícone com animação */}
      <div className={cn(
        "transition-transform duration-300",
        isActive ? "scale-110" : "group-hover:scale-110"
      )}>
        <Icon name={icon as IconName} className="w-4 h-4" />
      </div>
      
      <span className="relative">
        {name}
        
        {/* Underline animado */}
        <div className={cn(
          "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-black to-gray-700 transition-all duration-300",
          isActive 
            ? "w-full opacity-100" 
            : "w-0 group-hover:w-full opacity-0 group-hover:opacity-100"
        )}></div>
      </span>

      {/* Badge para seção ativa */}
      {isActive && (
        <div className="absolute w-2 h-2 bg-white rounded-full -top-1 -right-1 animate-pulse"></div>
      )}
    </button>
  );
};

export default NavigationItem;