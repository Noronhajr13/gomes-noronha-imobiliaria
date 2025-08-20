import React from 'react';
import { Section } from '@/components/ui';
import StatsCard, { Stat } from './StatsCard';

interface StatsGridProps {
  stats: Stat[];
  variant?: 'DEFAULT' | 'alternate' | 'dark';
}

const StatsGrid: React.FC<StatsGridProps> = ({ 
  stats, 
  variant = 'alternate' 
}) => {
  return (
    <Section variant={variant} className="py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatsCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default StatsGrid;