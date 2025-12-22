"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/site/layout/header/Header';
import Footer from '@/components/site/layout/footer/Footer';
import { Property, formatPrice, getPropertyWhatsAppUrl } from '@/services/api';
import { companyInfo } from '@/data/MockData';
import { Icon } from '@/utils/iconMapper';
import LinkButton from '@/components/site/ui/Button';
import PropertyStructuredData from './PropertyStructuredData';
import RelatedProperties from './RelatedProperties';
import ImageZoomModal from './ImageZoomModal';
import PropertyAnalytics, { trackPropertyAction } from './PropertyAnalytics';
import ScheduleVisitModal from './ScheduleVisitModal';

interface PropertyDetailClientProps {
  property: Property;
}

const PropertyDetailClient: React.FC<PropertyDetailClientProps> = ({ property }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const router = useRouter();

  const handleSectionChange = (section: string) => {
    const routes: { [key: string]: string } = {
      'home': '/',
      'imoveis': '/imoveis',
      'quemsomos': '/quemsomos',
      'despachante': '/despachante',
      'anunciar': '/anunciar',
      'contato': '/#contato'
    };

    if (routes[section]) {
      router.push(routes[section]);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <PropertyStructuredData property={property} />
      <PropertyAnalytics
        propertyCode={property.code}
        propertyTitle={property.title}
        propertyPrice={property.price}
        propertyType={property.type}
      />

      <div className="min-h-screen bg-white">
        <Header
          activeSection="imoveis"
          setActiveSection={handleSectionChange}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        <main className="pt-20">
          {/* Breadcrumb */}
          <div className="bg-gray-50 border-b">
            <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <nav className="flex items-center space-x-2 text-sm">
                <button
                  onClick={() => router.push('/')}
                  className="text-gray-500 hover:text-black transition-colors"
                >
                  Início
                </button>
                <Icon name="ChevronRight" className="w-4 h-4 text-gray-400" />
                <button
                  onClick={() => router.push('/imoveis')}
                  className="text-gray-500 hover:text-black transition-colors"
                >
                  Imóveis
                </button>
                <Icon name="ChevronRight" className="w-4 h-4 text-gray-400" />
                <span className="text-black font-medium">{property.code}</span>
              </nav>
            </div>
          </div>

          {/* Galeria de Imagens */}
          <section className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {/* Imagem Principal */}
              <div className="relative h-96 lg:h-[600px] bg-gray-100 rounded-xl overflow-hidden group">
                {property.images.length > 0 ? (
                  <>
                    <button
                      onClick={() => {
                        setIsZoomModalOpen(true);
                        trackPropertyAction('image_zoom', property.code);
                      }}
                      className="absolute inset-0 z-10 cursor-zoom-in"
                      aria-label="Ampliar imagem"
                    >
                      <Image
                        src={property.images[currentImageIndex]}
                        alt={`${property.title} - Foto ${currentImageIndex + 1}`}
                        fill
                        className="object-cover"
                        priority
                      />
                    </button>

                    {/* Botão de Zoom */}
                    <button
                      onClick={() => {
                        setIsZoomModalOpen(true);
                        trackPropertyAction('image_zoom', property.code);
                      }}
                      className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                      aria-label="Ampliar imagem"
                    >
                      <Icon name="Search" className="w-5 h-5 text-black" />
                    </button>

                    {/* Controles de navegação */}
                    {property.images.length > 1 && (
                      <>
                        <button
                          onClick={previousImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                          aria-label="Imagem anterior"
                        >
                          <Icon name="ChevronLeft" className="w-6 h-6 text-black" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                          aria-label="Próxima imagem"
                        >
                          <Icon name="ChevronRight" className="w-6 h-6 text-black" />
                        </button>

                        {/* Contador de imagens */}
                        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                          {currentImageIndex + 1} / {property.images.length}
                        </div>
                      </>
                    )}

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {property.featured && (
                        <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                          Destaque
                        </span>
                      )}
                      {property.exclusive && (
                        <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Exclusivo
                        </span>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <Icon name="Camera" className="w-20 h-20 text-gray-400" />
                  </div>
                )}
              </div>

              {/* Grid de Thumbnails */}
              <div className="hidden lg:grid grid-cols-2 gap-4">
                {property.images.slice(1, 5).map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index + 1)}
                    className="relative h-[290px] bg-gray-100 rounded-xl overflow-hidden hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={image}
                      alt={`${property.title} - Thumbnail ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}

                {property.images.length > 5 && (
                  <div className="relative h-[290px] bg-gray-900 rounded-xl flex items-center justify-center text-white">
                    <div className="text-center">
                      <Icon name="Camera" className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-2xl font-bold">+{property.images.length - 5}</p>
                      <p className="text-sm">mais fotos</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Informações do Imóvel */}
          <section className="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Coluna Principal */}
              <div className="lg:col-span-2 space-y-8">
                {/* Título e Preço */}
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Código: {property.code}</p>
                      <h1 className="text-3xl font-bold text-black mb-2">
                        {property.title}
                      </h1>
                      <p className="text-lg text-gray-600 flex items-center gap-2">
                        <Icon name="MapPin" className="w-5 h-5" />
                        {property.neighborhood}, {property.city}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 mb-1">{property.transactionType}</p>
                      <p className="text-3xl font-bold text-green-600">
                        {formatPrice(property.price)}
                        {property.priceLabel && (
                          <span className="text-lg text-gray-600">{property.priceLabel}</span>
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Características principais */}
                  <div className="grid grid-cols-2 gap-4 p-6 bg-gray-50 rounded-xl sm:grid-cols-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-white rounded-lg">
                        <Icon name="Home" className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Área</p>
                        <p className="text-lg font-semibold">{property.area}m²</p>
                      </div>
                    </div>

                    {property.bedrooms > 0 && (
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-white rounded-lg">
                          <Icon name="Bed" className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Quartos</p>
                          <p className="text-lg font-semibold">{property.bedrooms}</p>
                        </div>
                      </div>
                    )}

                    {property.bathrooms > 0 && (
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-white rounded-lg">
                          <Icon name="Bath" className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Banheiros</p>
                          <p className="text-lg font-semibold">{property.bathrooms}</p>
                        </div>
                      </div>
                    )}

                    {property.parking > 0 && (
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-white rounded-lg">
                          <Icon name="Car" className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Vagas</p>
                          <p className="text-lg font-semibold">{property.parking}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Descrição */}
                {property.description && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Descrição</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {property.description}
                    </p>
                  </div>
                )}

                {/* Amenidades */}
                {property.amenities && property.amenities.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Comodidades</h2>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {property.amenities.map((amenity, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"
                        >
                          <Icon name="Check" className="w-5 h-5 text-green-600" />
                          <span className="text-sm">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Detalhes Adicionais */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Detalhes</h2>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Tipo:</span>
                      <span className="font-semibold">{property.type}</span>
                    </div>
                    {property.condominiumFee && (
                      <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">Condomínio:</span>
                        <span className="font-semibold">{formatPrice(property.condominiumFee)}/mês</span>
                      </div>
                    )}
                    {property.iptu && (
                      <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">IPTU:</span>
                        <span className="font-semibold">{formatPrice(property.iptu)}/ano</span>
                      </div>
                    )}
                    {property.yearBuilt && (
                      <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">Ano de Construção:</span>
                        <span className="font-semibold">{property.yearBuilt}</span>
                      </div>
                    )}
                    {property.suites && property.suites > 0 && (
                      <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">Suítes:</span>
                        <span className="font-semibold">{property.suites}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Coluna Lateral - CTAs */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-4">
                  {/* Card de Contato */}
                  <div className="p-6 bg-white border-2 border-gray-200 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold mb-4">Interessado?</h3>
                    <p className="text-gray-600 mb-6">
                      Entre em contato conosco para agendar uma visita ou tirar dúvidas.
                    </p>

                    <div className="space-y-3">
                      <a
                        href={getPropertyWhatsAppUrl(property, companyInfo.contact.whatsapp)}
                        onClick={() => trackPropertyAction('whatsapp_click', property.code, { price: property.price })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <LinkButton
                          text="WhatsApp"
                          icon="MessageCircle"
                          variant="contact"
                          base="card"
                          className="w-full"
                        />
                      </a>

                      <a
                        href={`tel:${companyInfo.contact.mobile}`}
                        onClick={() => trackPropertyAction('phone_click', property.code, { price: property.price })}
                        className="block"
                      >
                        <LinkButton
                          text="Ligar"
                          icon="Phone"
                          variant="inverser"
                          base="card"
                          className="w-full"
                        />
                      </a>

                      <button
                        onClick={() => {
                          setIsScheduleModalOpen(true);
                          trackPropertyAction('schedule_visit', property.code, { price: property.price });
                        }}
                        className="w-full px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                      >
                        <Icon name="Calendar" className="w-5 h-5" />
                        Agendar Visita
                      </button>
                    </div>

                    <div className="mt-6 pt-6 border-t">
                      <p className="text-sm text-gray-500 mb-2">Atendimento:</p>
                      <p className="text-sm font-semibold">Seg-Sex: 9h-18h</p>
                      <p className="text-sm text-gray-600 mt-2">
                        {companyInfo.contact.mobile}
                      </p>
                    </div>
                  </div>

                  {/* Compartilhar */}
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h4 className="font-semibold mb-3">Compartilhar</h4>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          const url = window.location.href;
                          const text = `Confira este imóvel: ${property.title}`;
                          window.open(`https://wa.me/?text=${encodeURIComponent(text + '\n' + url)}`, '_blank');
                          trackPropertyAction('share', property.code, { method: 'whatsapp' });
                        }}
                        className="flex-1 p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Compartilhar no WhatsApp"
                      >
                        <Icon name="MessageCircle" className="w-5 h-5 mx-auto" />
                      </button>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(window.location.href);
                          alert('Link copiado!');
                          trackPropertyAction('share', property.code, { method: 'copy_link' });
                        }}
                        className="flex-1 p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Copiar link"
                      >
                        <Icon name="Globe" className="w-5 h-5 mx-auto" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Imóveis Relacionados */}
          <RelatedProperties currentProperty={property} />
        </main>

        <Footer />
      </div>

      {/* Modal de Zoom */}
      <ImageZoomModal
        images={property.images}
        initialIndex={currentImageIndex}
        isOpen={isZoomModalOpen}
        onClose={() => setIsZoomModalOpen(false)}
        propertyTitle={property.title}
      />

      {/* Modal de Agendamento */}
      <ScheduleVisitModal
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
        propertyCode={property.code}
        propertyTitle={property.title}
      />
    </>
  );
};

export default PropertyDetailClient;
