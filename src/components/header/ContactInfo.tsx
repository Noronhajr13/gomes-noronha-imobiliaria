import React from 'react';
import { Icon } from '@/utils/iconMapper';
import { Button, Text } from '@/components/ui';

interface ContactInfoProps {
  phone: string;
  onContactClick?: () => void;
  variant?: 'light' | 'dark';
}

const ContactInfo: React.FC<ContactInfoProps> = ({ 
  phone, 
  onContactClick,
  variant = 'light' 
}) => {
  const textColor = variant === 'light' ? 'text-gray-600' : 'text-gray-300';
  const hoverColor = variant === 'light' ? 'hover:text-black' : 'hover:text-white';
  const bgColor = variant === 'light' ? 'bg-gray-50 group-hover:bg-gray-100' : 'bg-gray-800 group-hover:bg-gray-700';

  return (
    <div className="items-center hidden space-x-6 lg:flex">
      {/* Telefone */}
      <a 
        href={`tel:${phone}`}
        className={`flex items-center gap-2 ${textColor} ${hoverColor} transition-colors duration-300 group`}
      >
        <div className={`w-10 h-10 ${bgColor} rounded-xl flex items-center justify-center transition-colors duration-300`}>
          <Icon name="Phone" className="w-4 h-4" />
        </div>
        <div className="text-sm">
          <div className="font-medium">{phone}</div>
          <div className={`text-xs ${variant === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
            Ligue agora
          </div>
        </div>
      </a>

      {/* CTA Button */}
      <Button 
        variant="success" 
        size="sm"
        onClick={onContactClick}
        className="flex items-center gap-2"
      >
        <Icon name="Mail" className="w-4 h-4" />
        Orçamento
      </Button>
    </div>
  );
};

export default ContactInfo;