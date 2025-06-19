
// src/app/actions.ts
'use server';

import { z } from 'zod';

const QuoteSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  phone: z.string().min(10, { message: "Telefone deve ter pelo menos 10 dígitos." }),
  serviceType: z.string().optional(),
  message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres." }),
});

type QuoteData = z.infer<typeof QuoteSchema>;

export interface QuoteFormState {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    serviceType?: string[];
    message?: string[];
  };
  data?: QuoteData;
  success: boolean;
}

export async function submitQuote(prevState: QuoteFormState, formData: FormData): Promise<QuoteFormState> {
  const rawName = formData.get('name');
  const rawEmail = formData.get('email');
  const rawPhone = formData.get('phone');
  const rawServiceType = formData.get('serviceType');
  const rawMessage = formData.get('message');

  const validatedFields = QuoteSchema.safeParse({
    name: typeof rawName === 'string' ? rawName : undefined,
    email: typeof rawEmail === 'string' ? rawEmail : undefined,
    phone: typeof rawPhone === 'string' ? rawPhone : undefined,
    serviceType: typeof rawServiceType === 'string' ? rawServiceType : undefined,
    message: typeof rawMessage === 'string' ? rawMessage : undefined,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Erro de validação. Por favor, corrija os campos destacados.',
      success: false,
    };
  }

  // Em vez de apenas logar, retornamos os dados para o cliente
  return {
    message: 'Dados do orçamento prontos para envio via WhatsApp!',
    success: true,
    data: validatedFields.data,
  };
}

