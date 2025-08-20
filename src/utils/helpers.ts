import { clsx, type ClassValue } from 'clsx';

// Função para concatenar classes CSS
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Formatar telefone
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
}

// Formatar email para link
export function formatEmailLink(email: string): string {
  return `mailto:${email}`;
}

// Formatar WhatsApp para link
export function formatWhatsAppLink(phone: string, message: string = ''): string {
  const cleaned = phone.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/55${cleaned}${message ? `?text=${encodedMessage}` : ''}`;
}

// Validar email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Truncar texto
export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}

// Formatar data
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}