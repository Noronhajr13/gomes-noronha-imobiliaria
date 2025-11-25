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
  Crown,
  Search,
  MessageCircle,
  Award,
  ArrowRight,
  Menu,
  Lock,
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
  Shield,
  TrendingUp,
  Camera,
  Globe,
  Check,
  Loader2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export const iconMap = {
  Home,
  Users,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Crown,
  Search,
  MessageCircle,
  Award,
  ArrowRight,
  Menu,
  Lock,
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
  Shield,
  TrendingUp,
  Camera,
  Globe,
  Check,
  Loader2,
  ChevronLeft,
  ChevronRight,
};

export type IconName = keyof typeof iconMap;

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
}

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