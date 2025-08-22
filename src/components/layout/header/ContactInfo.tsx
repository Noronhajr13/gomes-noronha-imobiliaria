import React from 'react';
import { Icon } from '@/utils/iconMapper';
import { Button, Text } from '@/components/ui';
import PhoneButton from '@/components/ui/PhoneButton';

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
      <PhoneButton
        phone=""
        showLabel={true}
        className="flex items-center gap-2 bg-green-400 border-0 rounded-lg hover:bg-gray-800"
      >
      </PhoneButton>
    </div>
  );
};

export default ContactInfo;