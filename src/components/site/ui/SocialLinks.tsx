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
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  className = ''
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
      icon: 'Instagram',
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

  return (
    <div className={className}>
      <div className="flex flex-wrap gap-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${getSocialColor(social.color)}`}
            title={social.name}
          >
            <Icon name={social.icon} className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;