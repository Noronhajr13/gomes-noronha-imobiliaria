// ============= components/stats/StatsGrid.tsx Atualizado =============
import React from 'react';
import { Icon, IconName } from '@/utils/iconMapper';
import { cn } from '@/utils/helpers';

interface Stat {
  number: string;
  label: string;
  icon: string;
  highlight?: boolean;
}

interface StatsGridProps {
  stats: Stat[];
  variant?: 'default' | 'compact';
  className?: string;
}

const StatsGrid: React.FC<StatsGridProps> = React.memo(({ 
  stats, 
  className 
}) => {
  return (
    <section className={cn(
      "relative mb-16 z-20",
      className
    )}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="p-8 bg-white border border-gray-100 shadow-xl rounded-2xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group"
              >
                {/* Ícone */}
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center transition-colors duration-300 bg-gray-100 rounded-full w-14 h-14 group-hover:bg-black">
                    <Icon 
                      name={stat.icon as IconName} 
                      className="text-black transition-colors duration-300 w-7 h-7 group-hover:text-white" 
                    />
                  </div>
                </div>
                
                {/* Número */}
                <div className={cn(
                  "font-bold mb-2",
                  stat.highlight 
                    ? "text-2xl md:text-3xl text-black" 
                    : "text-3xl md:text-4xl text-black"
                )}>
                  {stat.number}
                </div>
                
                {/* Label */}
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

StatsGrid.displayName = 'StatsGrid';

export default StatsGrid;