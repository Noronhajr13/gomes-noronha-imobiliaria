import React from 'react';
import { Icon, type IconName } from '@/utils/iconMapper';
import { Card, Text } from '@/components/site/ui';
import { cn } from '@/utils/helpers';

interface ValueCardProps {
  icon: IconName;
  title: string;
  description: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning';
  className?: string;
}

const ValueCard: React.FC<ValueCardProps> = ({
  icon,
  title,
  description,
  variant = 'primary',
  className
}) => {
  const variantClasses = {
    primary: 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white',
    secondary: 'bg-gray-100 text-gray-600 group-hover:bg-gray-600 group-hover:text-white',
    success: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
    warning: 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white'
  };

  return (
    <Card 
      variant="DEFAULT" 
      className={cn(
        "p-8 text-center transition-all duration-300 transform group hover:shadow-xl hover:-translate-y-2",
        className
      )}
    >
      <div className={cn(
        "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300",
        variantClasses[variant]
      )}>
        <Icon name={icon} className="w-8 h-8 transition-colors duration-300" />
      </div>
      
      <Text as="h4" variant="primary" className="mb-4 text-xl font-bold">
        {title}
      </Text>
      <Text variant="secondary" className="leading-relaxed">
        {description}
      </Text>
    </Card>
  );
};

export default ValueCard;