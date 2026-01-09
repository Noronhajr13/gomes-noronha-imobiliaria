import React from 'react';
import { Icon } from '@/utils/iconMapper';

interface PropertyFeaturesProps {
  area: number;
  bedrooms?: number;
  bathrooms?: number;
  parking?: number;
}

const PropertyFeatures: React.FC<PropertyFeaturesProps> = React.memo(({
  area,
  bedrooms = 0,
  bathrooms = 0,
  parking = 0
}) => {
  return (
    <div className="grid grid-cols-2 gap-4 p-6 bg-gray-50 rounded-xl sm:grid-cols-4">
      {/* Área - sempre visível */}
      <div className="flex items-center gap-3">
        <div className="p-3 bg-white rounded-lg">
          <Icon name="Home" className="w-6 h-6 text-black" />
        </div>
        <div>
          <p className="text-sm text-gray-500">Área</p>
          <p className="text-lg font-semibold">{area}m²</p>
        </div>
      </div>

      {/* Quartos */}
      {bedrooms > 0 && (
        <div className="flex items-center gap-3">
          <div className="p-3 bg-white rounded-lg">
            <Icon name="Bed" className="w-6 h-6 text-black" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Quartos</p>
            <p className="text-lg font-semibold">{bedrooms}</p>
          </div>
        </div>
      )}

      {/* Banheiros */}
      {bathrooms > 0 && (
        <div className="flex items-center gap-3">
          <div className="p-3 bg-white rounded-lg">
            <Icon name="Bath" className="w-6 h-6 text-black" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Banheiros</p>
            <p className="text-lg font-semibold">{bathrooms}</p>
          </div>
        </div>
      )}

      {/* Vagas */}
      {parking > 0 && (
        <div className="flex items-center gap-3">
          <div className="p-3 bg-white rounded-lg">
            <Icon name="Car" className="w-6 h-6 text-black" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Vagas</p>
            <p className="text-lg font-semibold">{parking}</p>
          </div>
        </div>
      )}
    </div>
  );
});

PropertyFeatures.displayName = 'PropertyFeatures';

export default PropertyFeatures;
