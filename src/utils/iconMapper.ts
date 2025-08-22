import React from 'react';
import { 
  Home, 
  Users, 
  Briefcase, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Star,
  Search,
  MessageCircle,
  Award,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  ExternalLink,
  Building,
  FileText,
  SlidersHorizontal,
  RotateCcw,
  Grid3X3,
  List,
  Bed,
  Bath,
  Car
} from 'lucide-react';

// Mapa de strings para componentes de ícones
export const iconMap = {
  Home,
  Users,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Search,
  MessageCircle,
  Award,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  ExternalLink,
  Building,
  FileText,
  SlidersHorizontal,
  RotateCcw,
  Grid3X3,
  List,
  Bed,
  Bath,
  Car,
};

// Tipo para as chaves dos ícones
export type IconName = keyof typeof iconMap;

// Interface para props do ícone
interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
}

// Componente do ícone
export const Icon: React.FC<IconProps> = ({ 
  name, 
  className = "w-4 h-4", 
  size 
}) => {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const props = size 
    ? { className, width: size, height: size }
    : { className };

  return React.createElement(IconComponent, props);
};