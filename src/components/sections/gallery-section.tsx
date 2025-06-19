import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  beforeSrc: string;
  beforeHint: string;
  afterSrc: string;
  afterHint: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Residência Familiar - Limpeza e Reparo",
    beforeSrc: "https://placehold.co/400x300.png",
    beforeHint: "dirty gutter old",
    afterSrc: "https://placehold.co/400x300.png",
    afterHint: "clean gutter new",
  },
  {
    id: 2,
    title: "Comércio Local - Instalação Completa",
    beforeSrc: "https://placehold.co/400x300.png",
    beforeHint: "building no gutter",
    afterSrc: "https://placehold.co/400x300.png",
    afterHint: "building new gutter",
  },
  {
    id: 3,
    title: "Casa de Campo - Substituição de Calhas",
    beforeSrc: "https://placehold.co/400x300.png",
    beforeHint: "damaged roof gutter",
    afterSrc: "https://placehold.co/400x300.png",
    afterHint: "repaired roof gutter",
  },
];

export default function GallerySection() {
  return (
    <section id="galeria" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
            Galeria de Projetos
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Veja a transformação e a qualidade do nosso trabalho em projetos reais.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="animate-slide-in-from-bottom" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-headline text-primary">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground/70 mb-2">ANTES</h3>
                    <div className="relative aspect-video rounded-md overflow-hidden">
                      <Image src={project.beforeSrc} alt={`Antes - ${project.title}`} fill={true} className="object-cover" data-ai-hint={project.beforeHint}/>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-accent mb-2">DEPOIS</h3>
                    <div className="relative aspect-video rounded-md overflow-hidden">
                      <Image src={project.afterSrc} alt={`Depois - ${project.title}`} fill={true} className="object-cover" data-ai-hint={project.afterHint} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
