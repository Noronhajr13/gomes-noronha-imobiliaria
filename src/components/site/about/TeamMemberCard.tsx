import React from 'react';
import Image from 'next/image';
import { Button, Card, Text } from '@/components/site/ui';
import { TeamMember, getWhatsAppUrl } from '@/data/MockData';
import { cn } from '@/utils/helpers';

interface TeamMemberCardProps {
  member: TeamMember;
  onContact?: (member: TeamMember) => void;
  className?: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  member,
  onContact,
  className
}) => {
  const handleContact = () => {
    if (onContact) {
      onContact(member);
    } else {
      // Contato padrão via WhatsApp
      const message = `Olá ${member.name}! Gostaria de falar sobre imóveis.`;
      const whatsappUrl = getWhatsAppUrl(member.whatsapp, message);
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <Card className={cn(
      "overflow-hidden transition-all duration-300 transform hover:shadow-xl hover:-translate-y-2",
      className
    )}>
      {/* Photo */}
      <div className="relative">
        <Image 
          src={member.image} 
          alt={member.name}
          width={600}
          height={400}
          className="object-cover w-full h-64"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <Text as="h4" variant="primary" className="mb-2 text-xl font-bold">
          {member.name}
        </Text>
        <Text variant="accent" className="mb-4 font-semibold">
          {member.role}
        </Text>
        
        {member.objectives && (
          <Text variant="secondary" className="mb-4 leading-relaxed">
            {member.objectives}
          </Text>
        )}

        {member.specialties && member.specialties.length > 0 && (
          <div className="mb-4">
            <Text variant="primary" className="mb-2 text-sm font-semibold">
              Especialidades:
            </Text>
            <div className="flex flex-wrap gap-2">
              {member.specialties.map((specialty, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <Button
          variant="success"
          size="sm"
          onClick={handleContact}
          className="w-full"
        >
          Falar com {member.name.split(' ')[0]}
        </Button>
      </div>
    </Card>
  );
};

export default TeamMemberCard;