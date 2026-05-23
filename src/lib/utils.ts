import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getWhatsAppLink(phone: string, text?: string): string {
  const cleanedPhone = phone.replace(/\D/g, '');
  if (!cleanedPhone) {
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(text || '')}`;
  }
  const baseUrl = `https://api.whatsapp.com/send?phone=${cleanedPhone}`;
  return text ? `${baseUrl}&text=${encodeURIComponent(text)}` : baseUrl;
}
