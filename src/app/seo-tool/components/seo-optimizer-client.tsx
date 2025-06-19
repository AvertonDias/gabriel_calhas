// src/app/seo-tool/components/seo-optimizer-client.tsx
"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { optimizeSEOText, type OptimizeSEOTextInput, type OptimizeSEOTextOutput } from '@/ai/flows/optimize-seo-text';
import { Loader2, Wand2 } from 'lucide-react';

const seoSchema = z.object({
  text: z.string().min(10, "O texto deve ter pelo menos 10 caracteres."),
  keywords: z.string().min(3, "Insira pelo menos uma palavra-chave."),
});

type SeoFormValues = z.infer<typeof seoSchema>;

export default function SeoOptimizerClient() {
  const [optimizedText, setOptimizedText] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SeoFormValues>({
    resolver: zodResolver(seoSchema),
  });

  const onSubmit: SubmitHandler<SeoFormValues> = async (data) => {
    setIsLoading(true);
    setOptimizedText(null);
    setError(null);
    try {
      const result: OptimizeSEOTextOutput = await optimizeSEOText({
        text: data.text,
        keywords: data.keywords,
      });
      setOptimizedText(result.optimizedText);
    } catch (e) {
      setError("Ocorreu um erro ao otimizar o texto. Tente novamente.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label htmlFor="text" className="text-lg font-medium">Texto Original</Label>
          <Textarea
            id="text"
            {...register("text")}
            rows={8}
            placeholder="Cole ou digite o texto que você deseja otimizar aqui..."
            className="mt-2 text-base"
          />
          {errors.text && <p className="text-sm text-destructive mt-1">{errors.text.message}</p>}
        </div>

        <div>
          <Label htmlFor="keywords" className="text-lg font-medium">Palavras-chave</Label>
          <Input
            id="keywords"
            {...register("keywords")}
            placeholder="Ex: calhas, instalação de calhas, limpeza de rufos"
            className="mt-2 text-base"
          />
          {errors.keywords && <p className="text-sm text-destructive mt-1">{errors.keywords.message}</p>}
          <p className="text-xs text-muted-foreground mt-1">Separe as palavras-chave por vírgula.</p>
        </div>

        <Button type="submit" disabled={isLoading} className="w-full text-base py-3 bg-primary hover:bg-primary/90">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Otimizando...
            </>
          ) : (
            <>
              <Wand2 className="mr-2 h-5 w-5" />
              Otimizar Texto
            </>
          )}
        </Button>
      </form>

      {error && (
        <Card className="border-destructive bg-destructive/10">
          <CardHeader>
            <CardTitle className="text-destructive">Erro na Otimização</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{error}</p>
          </CardContent>
        </Card>
      )}

      {optimizedText && (
        <Card className="border-green-500 bg-green-500/10">
          <CardHeader>
            <CardTitle className="text-green-700 dark:text-green-400">Texto Otimizado</CardTitle>
            <CardDescription>
              Abaixo está a versão do seu texto otimizada para SEO. Revise e utilize conforme necessário.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea value={optimizedText} readOnly rows={10} className="text-base bg-background/50" />
          </CardContent>
          <CardFooter>
            <Button variant="outline" onClick={() => navigator.clipboard.writeText(optimizedText)}>
              Copiar Texto Otimizado
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
