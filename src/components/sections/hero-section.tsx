import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-[calc(100vh-5rem)] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image Placeholder for Video */}
      {/* For an actual video background, replace this div with an HTML5 <video> element or a dedicated video component. */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="https://placehold.co/1920x1080.png" // Placeholder for promotional video
          alt="Fundo promocional Calhas Gabriel"
          fill={true}
          className="object-cover"
          quality={80}
          priority
          data-ai-hint="roofer house construction"
        />
        <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay for text readability */}
      </div>

      <div className="relative z-10 p-6 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold mb-6 leading-tight text-shadow-md animate-slide-in-from-bottom [animation-delay:0.2s]">
          Calhas Gabriel
          <br />
          <span className="text-accent">Proteção e Estilo</span> para sua Casa
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-slate-200 animate-slide-in-from-bottom [animation-delay:0.4s]">
          Soluções completas em calhas, rufos e condutores para garantir a segurança e a beleza do seu imóvel.
        </p>
        <Link href="#orcamento" passHref>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground animate-slide-in-from-bottom [animation-delay:0.6s]">
            Solicite um Orçamento Gratuito
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
