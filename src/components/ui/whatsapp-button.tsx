// src/components/ui/whatsapp-button.tsx
"use client";

import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react'; 
import Link from 'next/link';

const WHATSAPP_NUMBER = "5535992305969"; 

export default function WhatsAppButton() {
  const defaultMessage = "Olá! Gostaria de um orçamento para serviços de calhas.";
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMessage)}`;

  if (WHATSAPP_NUMBER === "YOUR_WHATSAPP_NUMBER_HERE" || WHATSAPP_NUMBER === "") {
    if (typeof window !== 'undefined') {
      console.warn("WhatsApp number is not configured. Please edit src/components/ui/whatsapp-button.tsx");
    }
    return null; 
  }

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      aria-label="Contato rápido via WhatsApp"
    >
      <Button
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg animate-bounce focus:animate-none hover:animate-none flex items-center justify-center p-0"
        style={{ animationIterationCount: 2.5 }}
      >
        <MessageCircle size={56} strokeWidth={1.75} />
      </Button>
    </Link>
  );
}
