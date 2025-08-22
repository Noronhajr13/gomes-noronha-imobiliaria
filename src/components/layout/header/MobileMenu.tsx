import React from 'react';
import { Icon, IconName } from '@/utils/iconMapper';
import { Button } from '@/components/ui';
import { cn } from '@/utils/helpers';

interface MobileMenuProps {
  isOpen: boolean;
  navigation: Array<{
    id: string;
    name: string;
    icon: string;
  }>;
  activeSection: string;
  phone: string;
  onNavigate: (id: string) => void;
  onContactClick?: () => void;
  variant?: 'light' | 'dark';
  showCreci?: boolean; // Nova prop
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  navigation,
  activeSection,
  phone,
  onNavigate,
  onContactClick,
  variant = 'light',
  showCreci = false
}) => {
  const bgColor = variant === 'light' ? 'bg-white' : 'bg-black';
  const borderColor = variant === 'light' ? 'border-gray-100' : 'border-gray-800';

  return (
    <div className={cn(
      "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
      isOpen 
        ? "max-h-[600px] opacity-100 pb-6" 
        : "max-h-0 opacity-0"
    )}>
      <div className={`${borderColor} pt-6 border-t`}>
        {/* CRECI Badge Mobile */}
        {showCreci && (
          <div className="flex justify-center mb-4">
            <div className="flex items-center px-4 py-2 text-black bg-white rounded-full">
              <Icon name="Award" className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">CRECI PJ 9297</span>
            </div>
          </div>
        )}

        <nav className="flex flex-col space-y-2">
          {navigation.map((item, index) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "flex items-center gap-4 font-medium transition-all duration-300 text-left p-4 rounded-xl",
                activeSection === item.id 
                  ? 'text-white bg-black shadow-lg'
                  : 'text-gray-200 hover:text-black hover:bg-gray-50'
              )}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300",
                activeSection === item.id 
                  ? 'bg-white text-black'
                  : 'bg-gray-100 text-gray-600'
              )}>
                <Icon name={item.icon as IconName} className="w-5 h-5" />
              </div>
              <span className="text-lg">{item.name}</span>
              
              {activeSection === item.id && (
                <div className="w-2 h-2 ml-auto bg-white rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
          
          {/* Contact info mobile */}
          <div className={`pt-6 ${borderColor} mt-4 space-y-4 border-t`}>
            <a 
              href={`tel:${phone}`}
              className="flex items-center gap-4 p-4 text-gray-600 transition-colors rounded-xl hover:bg-gray-50"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-xl">
                <Icon name="Phone" className="w-5 h-5 text-black" />
              </div>
              <div>
                <div className="font-medium text-black">{phone}</div>
                <div className="text-sm text-gray-500">
                  Ligue agora
                </div>
              </div>
            </a>
            
            <Button 
              variant="primary" 
              size="md"
              onClick={onContactClick}
              className="flex items-center justify-center w-full gap-2 text-white bg-black border-0 hover:bg-gray-800"
            >
              <Icon name="Mail" className="w-5 h-5" />
              Solicitar Orçamento
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;