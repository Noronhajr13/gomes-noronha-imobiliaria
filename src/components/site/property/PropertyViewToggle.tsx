import React from 'react';
import { Icon } from '@/utils/iconMapper';
import { cn } from '@/utils/helpers';

interface PropertyViewToggleProps {
  view: 'grid' | 'list';
  onViewChange: (view: 'grid' | 'list') => void;
  className?: string;
}

const PropertyViewToggle: React.FC<PropertyViewToggleProps> = ({
  view,
  onViewChange,
  className
}) => {
  return (
    <div className={cn("flex overflow-hidden border border-gray-300 rounded-md", className)}>
      <button
        onClick={() => onViewChange('grid')}
        className={cn(
          "p-2 transition-colors",
          view === 'grid' 
            ? 'bg-green-600 text-white' 
            : 'bg-white text-gray-600 hover:bg-gray-50'
        )}
        title="Visualização em grid"
      >
        <Icon name="Grid3X3" className="w-4 h-4" />
      </button>
      <button
        onClick={() => onViewChange('list')}
        className={cn(
          "p-2 transition-colors",
          view === 'list' 
            ? 'bg-green-600 text-white' 
            : 'bg-white text-gray-600 hover:bg-gray-50'
        )}
        title="Visualização em lista"
      >
        <Icon name="List" className="w-4 h-4" />
      </button>
    </div>
  );
};

export default PropertyViewToggle;