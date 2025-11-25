import React from 'react';
import Link from 'next/link';
import { Icon, IconName } from '@/utils/iconMapper';
import { cn } from '@/utils/helpers';

interface NavigationItemProps {
  name: string;
  icon: string;
  href: string;
  isActive: boolean;
  index?: number;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  name,
  icon,
  href,
  isActive,
  index = 0
}) => {

  return (
    <Link
      href={href}
      className={cn(
        "relative flex items-center gap-2 text-sm font-medium transition-all duration-300 px-4 py-3 rounded-xl group",
        isActive 
          ? 'text-white shadow-lg transform scale-105'
          : 'text-white hover:text-black hover:bg-gray-100'
      )}
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      <div className={cn(
        "transition-transform duration-300",
        isActive ? "scale-110" : "group-hover:scale-110"
      )}>
        <Icon name={icon as IconName} className="w-4 h-4" />
      </div>
      
      <span className="relative">
        {name}
        <div className={cn(
          "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-white to-gray-600 transition-all duration-300",
          isActive 
            ? "w-full opacity-100" 
            : "w-0 group-hover:w-full opacity-0 group-hover:opacity-100"
        )}></div>
      </span>

      {isActive && (
        <div className="absolute w-2 h-2 bg-green-600 rounded-full -top-1 -right-1 animate-pulse"></div>
      )}
    </Link>
  );
};

export default NavigationItem;