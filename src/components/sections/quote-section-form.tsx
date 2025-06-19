// src/components/sections/quote-section-form.tsx
"use client";

import { useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { submitQuote, type QuoteFormState } from '@/app/actions';
import { useToast } from "@/hooks/use-toast";
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const initialState: QuoteFormState = {
  message: '',
  errors: {}, // Initialize errors to prevent undefined access
  success: false,
};

// Número do WhatsApp (mesmo usado no whatsapp-button.tsx)
// Idealmente, isso viria de uma configuração central ou variável de ambiente.
const WHATSAPP_NUMBER = "5535992305969";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? 'Enviando...' : 'Solicitar Orçamento'}
    </Button>
  );
}

export default function QuoteSectionForm() {
  const [state, formAction] = useActionState(submitQuote, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.success && state.data) {
      const { name, email, phone, serviceType, message: userMessage } = state.data;
      
      let whatsappText = `Olá! Gostaria de um orçamento:\n\n`;
      whatsappText += `Nome: ${name}\n`;
      whatsappText += `Email: ${email}\n`;
      whatsappText += `Telefone: ${phone}\n`;
      if (serviceType && serviceType !== "outro") { // Não incluir "outro" como tipo de serviço na msg
        whatsappText += `Tipo de Serviço: ${serviceType
          .replace("instalacao", "Instalação de Calhas")
          .replace("limpeza_manutencao", "Limpeza e Manutenção")
          .replace("reparos", "Reparos em Geral")
          .replace("rufos_condutores", "Rufos e Condutores")
        }\n`;
      }
      whatsappText += `Mensagem: ${userMessage}`;

      const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;
      
      toast({
        title: "Sucesso!",
        description: "Seu pedido de orçamento foi processado. Você será redirecionado para o WhatsApp.",
        variant: "default",
        action: <CheckCircle2 className="text-green-500" />,
      });

      // Abrir o link do WhatsApp em uma nova aba
      window.open(whatsappLink, '_blank');

    } else if (state.message && !state.success && state.errors) { // Apenas mostrar toast de erro se houver erros de validação
      toast({
        title: "Erro de Validação!",
        description: state.message,
        variant: "destructive",
        action: <AlertCircle className="text-red-500" />,
      });
    }
  }, [state, toast]);
  

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <Label htmlFor="name">Nome Completo</Label>
        <Input id="name" name="name" type="text" placeholder="Seu nome completo" required />
        {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name.join(', ')}</p>}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="seuemail@exemplo.com" required />
          {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email.join(', ')}</p>}
        </div>
        <div>
          <Label htmlFor="phone">Telefone / WhatsApp</Label>
          <Input id="phone" name="phone" type="tel" placeholder="(XX) XXXXX-XXXX" required />
          {state.errors?.phone && <p className="text-sm text-destructive mt-1">{state.errors.phone.join(', ')}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="serviceType">Tipo de Serviço (Opcional)</Label>
        <Select name="serviceType">
          <SelectTrigger id="serviceType">
            <SelectValue placeholder="Selecione o tipo de serviço" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="instalacao">Instalação de Calhas</SelectItem>
            <SelectItem value="limpeza_manutencao">Limpeza e Manutenção</SelectItem>
            <SelectItem value="reparos">Reparos em Geral</SelectItem>
            <SelectItem value="rufos_condutores">Rufos e Condutores</SelectItem>
            <SelectItem value="outro">Outro (descreva na mensagem)</SelectItem>
          </SelectContent>
        </Select>
        {state.errors?.serviceType && <p className="text-sm text-destructive mt-1">{state.errors.serviceType.join(', ')}</p>}
      </div>

      <div>
        <Label htmlFor="message">Mensagem</Label>
        <Textarea id="message" name="message" placeholder="Descreva sua necessidade ou dúvida aqui..." rows={5} required />
        {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message.join(', ')}</p>}
      </div>
      
      <SubmitButton />
    </form>
  );
}
