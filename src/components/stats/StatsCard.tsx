import React from 'react';
import { Icon, IconName } from '@/utils/iconMapper';
import { Text } from '@/components/ui';

export interface Stat {
  number: string;
  label: string;
  icon: string;
}

interface StatsCardProps {
  stat: Stat;
}

const StatsCard: React.FC<StatsCardProps> = React.memo(({ stat }) => {
  return (
    <div className="text-center group">
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-colors duration-300 bg-white shadow-lg rounded-2xl group-hover:bg-gray-100">
        <Icon name={stat.icon as IconName} className="w-8 h-8 text-black" />
      </div>
      <Text variant="primary" className="mb-2 text-3xl font-bold md:text-4xl">
        {stat.number}
      </Text>
      <Text variant="secondary" className="font-medium">
        {stat.label}
      </Text>
    </div>
  );
});

StatsCard.displayName = 'StatsCard';

export default StatsCard;