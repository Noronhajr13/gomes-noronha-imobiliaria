import React from 'react';
import Link from 'next/link';
import { Icon, IconName } from '@/utils/iconMapper';
import { cn } from '@/utils/helpers';

interface MobileMenuProps {
  isOpen: boolean;
  navigation: Array<{
    id: string;
    name: string;
    icon: string;
    href?: string;
  }>;
  activeSection: string;
  phone: string;
  onContactClick?: () => void;
  variant?: 'light' | 'dark'
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  navigation,
  activeSection,
  phone,
  variant = 'light'
}) => {
  const borderColor = variant === 'light' ? 'border-gray-100' : 'border-gray-800';

  return (
    <div className={cn(
      "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
      isOpen 
        ? "max-h-[600px] opacity-100 pb-6" 
        : "max-h-0 opacity-0"
    )}>
      <div className={`${borderColor} pt-6 border-t`}>

        <nav className="flex flex-col space-y-2">
          {navigation.map((item, index) => (
            <Link
              key={item.id}
              href={item.href || '/'}
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
            </Link>
          ))}

          <div className={`pt-6 ${borderColor} mt-4 space-y-4 border-t`}>
            <a 
              href={`tel:${phone}`}
              className="flex items-center gap-4 p-4 bg-green-600 border-white shadow-lg rounded-xl border-1"
            >
              <div className="flex items-center justify-center w-10 h-10 text-black transition-all duration-300 bg-white rounded-xl">
                <Icon name="Phone" className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg text-black">Ligue agora</span>
              </div>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;