import React from 'react';
import { Icon } from '@/utils/iconMapper';

interface PropertyAmenitiesProps {
  amenities: string[];
}

const PropertyAmenities: React.FC<PropertyAmenitiesProps> = React.memo(({ amenities }) => {
  if (!amenities || amenities.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Comodidades</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {amenities.map((amenity) => (
          <div
            key={amenity}
            className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"
          >
            <Icon name="Check" className="w-5 h-5 text-green-600" />
            <span className="text-sm">{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
});

PropertyAmenities.displayName = 'PropertyAmenities';

export default PropertyAmenities;
