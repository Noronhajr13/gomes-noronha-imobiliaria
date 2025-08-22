import React from 'react';
import { Icon } from '@/utils/iconMapper';
import { cn } from '@/utils/helpers';

interface PhoneButtonProps {
  phone: string;
  showLabel?: boolean;
  className?: string;
}

const PhoneButton: React.FC<PhoneButtonProps> = ({ 
  phone,
  showLabel = true,
  className
}) => {
  return (
    <a 
      href={`tel:${phone.replace(/\D/g, '')}`}
      className={cn(
        "flex items-center gap-2 text-gray-200 hover:text-black transition-colors duration-300 group",
        className
      )}
    >
      <div className={cn(
        "rounded-xl flex items-center justify-center transition-colors duration-300 w-10 h-10 group-hover:bg-gray-200"
      )}>
        <Icon name="Phone" className={"w-4 h-4"} />
      </div>
      <div className={'text-sm'}>
        <div className="text-xs text-white">Fale Conosco</div>
      </div>
    </a>
  );
};

export default PhoneButton;