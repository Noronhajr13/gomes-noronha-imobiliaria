import React from 'react';
import { formatPrice } from '@/services/api';

interface PropertyDetailsGridProps {
  type: string;
  condominiumFee?: number | null;
  iptu?: number | null;
  yearBuilt?: number | null;
  suites?: number | null;
}

const PropertyDetailsGrid: React.FC<PropertyDetailsGridProps> = React.memo(({
  type,
  condominiumFee,
  iptu,
  yearBuilt,
  suites
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Detalhes</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {/* Tipo - sempre visível */}
        <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
          <span className="text-gray-600">Tipo:</span>
          <span className="font-semibold">{type}</span>
        </div>

        {/* Condomínio */}
        {condominiumFee && condominiumFee > 0 && (
          <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
            <span className="text-gray-600">Condomínio:</span>
            <span className="font-semibold">{formatPrice(condominiumFee)}/mês</span>
          </div>
        )}

        {/* IPTU */}
        {iptu && iptu > 0 && (
          <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
            <span className="text-gray-600">IPTU:</span>
            <span className="font-semibold">{formatPrice(iptu)}/ano</span>
          </div>
        )}

        {/* Ano de Construção */}
        {yearBuilt && yearBuilt > 0 && (
          <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
            <span className="text-gray-600">Ano de Construção:</span>
            <span className="font-semibold">{yearBuilt}</span>
          </div>
        )}

        {/* Suítes */}
        {suites && suites > 0 && (
          <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
            <span className="text-gray-600">Suítes:</span>
            <span className="font-semibold">{suites}</span>
          </div>
        )}
      </div>
    </div>
  );
});

PropertyDetailsGrid.displayName = 'PropertyDetailsGrid';

export default PropertyDetailsGrid;
