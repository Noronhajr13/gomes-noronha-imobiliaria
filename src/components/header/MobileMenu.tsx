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
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  navigation,
  activeSection,
  phone,
  onNavigate,
  onContactClick,
  variant = 'light'
}) => {
  const bgColor = variant === 'light' ? 'bg-white' : 'bg-black';
  const borderColor = variant === 'light' ? 'border-gray-100' : 'border-gray-800';

  return (
    <div className={cn(
      "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
      isOpen 
        ? "max-h-96 opacity-100 pb-6" 
        : "max-h-0 opacity-0"
    )}>
      <div className={`${borderColor} pt-6 border-t`}>
        <nav className="flex flex-col space-y-2">
          {navigation.map((item, index) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "flex items-center gap-4 font-medium transition-all duration-300 text-left p-4 rounded-xl",
                activeSection === item.id 
                  ? variant === 'light'
                    ? 'text-black bg-gray-100 shadow-lg' 
                    : 'text-white bg-gray-800 shadow-lg'
                  : variant === 'light'
                    ? 'text-gray-700 hover:text-black hover:bg-gray-50'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
              )}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300",
                activeSection === item.id 
                  ? variant === 'light'
                    ? 'bg-black text-white' 
                    : 'bg-white text-black'
                  : variant === 'light'
                    ? 'bg-gray-100 text-gray-600'
                    : 'bg-gray-700 text-gray-300'
              )}>
                <Icon name={item.icon as IconName} className="w-5 h-5" />
              </div>
              <span className="text-lg">{item.name}</span>
              
              {activeSection === item.id && (
                <div className="w-2 h-2 ml-auto bg-green-400 rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
          
          {/* Contact info mobile */}
          <div className={`pt-6 ${borderColor} mt-4 space-y-4 border-t`}>
            <a 
              href={`tel:${phone}`}
              className={`flex items-center gap-4 p-4 rounded-xl transition-colors ${
                variant === 'light' 
                  ? 'text-gray-600 hover:bg-gray-50' 
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                variant === 'light' ? 'bg-blue-100' : 'bg-blue-900'
              }`}>
                <Icon name="Phone" className={`w-5 h-5 ${
                  variant === 'light' ? 'text-blue-600' : 'text-blue-400'
                }`} />
              </div>
              <div>
                <div className="font-medium">{phone}</div>
                <div className={`text-sm ${
                  variant === 'light' ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  Ligue agora
                </div>
              </div>
            </a>
            
            <Button 
              variant="success" 
              size="md"
              onClick={onContactClick}
              className="flex items-center justify-center w-full gap-2"
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