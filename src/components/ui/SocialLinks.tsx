import React from 'react';
import { companyInfo } from '@/data/MockData';
import { Icon, IconName } from '@/utils/iconMapper';

interface SocialLink {
  name: string;
  url: string;
  icon: IconName;
  color: 'green' | 'blue' | 'indigo' | 'pink';
}

interface SocialLinksProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTitle?: boolean;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  className = '', 
  size = 'md',
  showTitle = true 
}) => {
  const socialLinks: SocialLink[] = [
    { 
      name: 'WhatsApp', 
      url: `https://wa.me/${companyInfo.contact.whatsapp}`, 
      icon: 'Phone',
      color: 'green'
    },
    { 
      name: 'Email', 
      url: `mailto:${companyInfo.contact.email}`, 
      icon: 'Mail',
      color: 'blue'
    },
    { 
      name: 'Instagram', 
      url: companyInfo.social.instagram, 
      icon: 'Star',
      color: 'pink'
    }
  ];

  const getSocialColor = (color: string) => {
    const colors = {
      green: 'bg-green-100 text-green-600 hover:bg-green-600 hover:text-white',
      blue: 'bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white',
      indigo: 'bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white',
      pink: 'bg-pink-100 text-pink-600 hover:bg-pink-600 hover:text-white'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getSizeClasses = () => {
    const sizes = {
      sm: 'w-8 h-8',
      md: 'w-12 h-12',
      lg: 'w-16 h-16'
    };
    return sizes[size];
  };

  const getIconSize = () => {
    const iconSizes = {
      sm: 'w-3 h-3',
      md: 'w-5 h-5',
      lg: 'w-7 h-7'
    };
    return iconSizes[size];
  };

  return (
    <div className={className}>
      {showTitle && (
        <h4 className="flex items-center mb-6 text-lg font-bold">
          <Icon name="ExternalLink" className="w-5 h-5 mr-2 text-green-400" />
          Conecte-se Conosco
        </h4>
      )}
      <div className="flex flex-wrap gap-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group ${getSizeClasses()} rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${getSocialColor(social.color)}`}
            title={social.name}
          >
            <Icon name={social.icon} className={`${getIconSize()} transition-transform duration-300 group-hover:scale-110`} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;