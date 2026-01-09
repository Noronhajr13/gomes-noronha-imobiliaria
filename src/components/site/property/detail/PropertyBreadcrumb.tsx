"use client";

import React from 'react';
import Link from 'next/link';
import { Icon } from '@/utils/iconMapper';

interface PropertyBreadcrumbProps {
  propertyCode: string;
}

const PropertyBreadcrumb: React.FC<PropertyBreadcrumbProps> = React.memo(({ propertyCode }) => {
  return (
    <div className="bg-gray-50 border-b">
      <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center space-x-2 text-sm" aria-label="Breadcrumb">
          <Link
            href="/"
            className="text-gray-500 hover:text-black transition-colors"
          >
            Início
          </Link>
          <Icon name="ChevronRight" className="w-4 h-4 text-gray-400" aria-hidden="true" />
          <Link
            href="/imoveis"
            className="text-gray-500 hover:text-black transition-colors"
          >
            Imóveis
          </Link>
          <Icon name="ChevronRight" className="w-4 h-4 text-gray-400" aria-hidden="true" />
          <span className="text-black font-medium">{propertyCode}</span>
        </nav>
      </div>
    </div>
  );
});

PropertyBreadcrumb.displayName = 'PropertyBreadcrumb';

export default PropertyBreadcrumb;
