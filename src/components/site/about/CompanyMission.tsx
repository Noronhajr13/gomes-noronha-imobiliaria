import React from 'react';
import { Icon } from '@/utils/iconMapper';
import { Text } from '@/components/site/ui';

interface MissionVisionProps {
  mission: string;
  vision: string;
  className?: string;
}

const CompanyMission: React.FC<MissionVisionProps> = ({
  mission,
  vision,
  className = ""
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
        <Icon name="Star" className="w-6 h-6 text-blue-600" />
        <div>
          <Text as="div" variant="primary" className="font-semibold">
            Nossa Missão
          </Text>
          <Text variant="secondary">
            {mission}
          </Text>
        </div>
      </div>
      
      <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
        <Icon name="TrendingUp" className="w-6 h-6 text-green-600" />
        <div>
          <Text as="div" variant="primary" className="font-semibold">
            Nossa Visão
          </Text>
          <Text variant="secondary">
            {vision}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default CompanyMission;