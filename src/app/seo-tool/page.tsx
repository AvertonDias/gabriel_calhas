import MainNavbar from '@/components/layout/main-navbar';
import MainFooter from '@/components/layout/main-footer';
import SeoOptimizerClient from './components/seo-optimizer-client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: "Ferramenta de Otimização SEO - Calhas Gabriel",
  description: "Otimize textos para SEO com palavras-chave relevantes.",
};

export default function SeoToolPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNavbar />
      <main className="flex-grow py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-headline text-primary">Ferramenta de Otimização SEO</CardTitle>
              <CardDescription className="text-lg text-foreground/80 mt-2">
                Insira seu texto e palavras-chave para obter uma versão otimizada para motores de busca.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SeoOptimizerClient />
            </CardContent>
          </Card>
        </div>
      </main>
      <MainFooter />
    </div>
  );
}
