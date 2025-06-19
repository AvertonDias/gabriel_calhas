import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Wrench, Hammer, LayersIcon } from "lucide-react"; // Corrected LayersIcon
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Home,
    title: "Instalação de Calhas",
    description: "Instalação profissional de calhas de diversos materiais, garantindo escoamento eficiente e durabilidade.",
  },
  {
    icon: Wrench,
    title: "Limpeza e Manutenção",
    description: "Serviços completos de limpeza e manutenção preventiva para manter suas calhas funcionando perfeitamente.",
  },
  {
    icon: Hammer,
    title: "Reparos em Geral",
    description: "Conserto de vazamentos, substituição de peças danificadas e reparos estruturais em calhas e rufos.",
  },
  {
    icon: LayersIcon,
    title: "Rufos e Condutores",
    description: "Fabricação e instalação de rufos e condutores sob medida para proteção completa contra infiltrações.",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Oferecemos uma gama completa de soluções para calhas, rufos e condutores, com qualidade e profissionalismo.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="animate-slide-in-from-bottom" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
              <Card className="h-full text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                <CardHeader className="items-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    <service.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-headline text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
