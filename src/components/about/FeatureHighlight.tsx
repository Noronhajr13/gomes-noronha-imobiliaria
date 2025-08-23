import React from 'react';
import { Icon, type IconName } from '@/utils/iconMapper';
import { Text } from '@/components/ui';
import { cn } from '@/utils/helpers';

interface FeatureHighlightProps {
  icon: IconName;
  title: string;
  description: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'purple' | 'orange' | 'indigo';
  className?: string;
}

const FeatureHighlight: React.FC<FeatureHighlightProps> = ({
  icon,
  title,
  description,
  variant = 'primary',
  className
}) => {
  const variantClasses = {
    primary: {
      border: 'border-green-600',
      bg: 'bg-green-50 hover:bg-green-100',
      iconBg: 'bg-green-600',
      iconColor: 'text-white'
    },
    secondary: {
      border: 'border-gray-600',
      bg: 'bg-gray-50 hover:bg-gray-100',
      iconBg: 'bg-gray-600',
      iconColor: 'text-white'
    },
    success: {
      border: 'border-blue-600',
      bg: 'bg-blue-50 hover:bg-blue-100',
      iconBg: 'bg-blue-600',
      iconColor: 'text-white'
    },
    warning: {
      border: 'border-orange-600',
      bg: 'bg-orange-50 hover:bg-orange-100',
      iconBg: 'bg-orange-600',
      iconColor: 'text-white'
    },
    purple: {
      border: 'border-purple-600',
      bg: 'bg-purple-50 hover:bg-purple-100',
      iconBg: 'bg-purple-600',
      iconColor: 'text-white'
    },
    orange: {
      border: 'border-orange-600',
      bg: 'bg-orange-50 hover:bg-orange-100',
      iconBg: 'bg-orange-600',
      iconColor: 'text-white'
    },
    indigo: {
      border: 'border-indigo-600',
      bg: 'bg-indigo-50 hover:bg-indigo-100',
      iconBg: 'bg-indigo-600',
      iconColor: 'text-white'
    }
  };

  const styles = variantClasses[variant];

  return (
    <div className={cn(
      "flex items-start gap-4 p-6 transition-colors duration-300 border-l-4 rounded-xl",
      styles.border,
      styles.bg,
      className
    )}>
      <div className={cn(
        "flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-xl",
        styles.iconBg
      )}>
        <Icon name={icon} className={cn("w-6 h-6", styles.iconColor)} />
      </div>
      <div>
        <Text as="h5" variant="primary" className="mb-2 text-lg font-bold">
          {title}
        </Text>
        <Text variant="secondary">
          {description}
        </Text>
      </div>
    </div>
  );
};

export default FeatureHighlight;