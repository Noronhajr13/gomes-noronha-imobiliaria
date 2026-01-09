// Barrel export para componentes de detalhe de imóvel
// Facilita imports: import { PropertyGallery, PropertyHeader } from './detail'

// Componente principal
export { default as PropertyDetailClient } from './PropertyDetailClient';

// Componentes de UI
export { default as PropertyBreadcrumb } from './PropertyBreadcrumb';
export { default as PropertyGallery } from './PropertyGallery';
export { default as PropertyHeader } from './PropertyHeader';
export { default as PropertyFeatures } from './PropertyFeatures';
export { default as PropertyAmenities } from './PropertyAmenities';
export { default as PropertyDetailsGrid } from './PropertyDetailsGrid';

// Componentes de ação
export { default as PropertyContactCard } from './PropertyContactCard';
export { default as PropertyShareButtons } from './PropertyShareButtons';

// Modais
export { default as ImageZoomModal } from './ImageZoomModal';
export { default as ScheduleVisitModal } from './ScheduleVisitModal';

// SEO e Analytics
export { default as PropertyStructuredData } from './PropertyStructuredData';
export { default as PropertyAnalytics, trackPropertyAction } from './PropertyAnalytics';

// Imóveis relacionados
export { default as RelatedProperties } from './RelatedProperties';
