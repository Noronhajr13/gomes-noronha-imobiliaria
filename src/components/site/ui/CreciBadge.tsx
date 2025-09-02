import React from 'react';
import { Icon } from '@/utils/iconMapper';
import { cn } from '@/utils/helpers';
import { companyInfo } from '@/data/MockData';

interface CreciBadgeProps {
  creci?: string;
  variant?: 'default' | 'large' | 'inline';
  className?: string;
}

const CreciBadge: React.FC<CreciBadgeProps> = ({ 
  creci = companyInfo.creci,
  variant = 'default',
  className 
}) => {
  const sizeClasses = {
    default: 'px-3 py-1.5 text-xs',
    large: 'px-4 py-2 text-sm',
    inline: 'px-2 py-1 text-xs'
  };

  return (
    <div className={cn(
      "inline-flex items-center bg-black text-white rounded-full font-semibold",
      sizeClasses[variant],
      className
    )}>
      <Icon name="Award" className={cn(
        "mr-2",
        variant === 'default' ? 'w-4 h-4' : variant === 'large' ? 'w-5 h-5' : 'w-3 h-3'
      )} />
      <span>{creci}</span>
    </div>
  );
};

export default CreciBadge;