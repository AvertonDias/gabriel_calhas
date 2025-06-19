import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="quem-somos" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in [animation-delay:0.2s]">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-6">
              Quem Somos
            </h2>
            <p className="text-lg text-foreground/80 mb-4">
              Na Calhas Gabriel, somos apaixonados por oferecer soluções de alta qualidade que protegem e embelezam residências e estabelecimentos comerciais. Com anos de experiência no mercado, nossa equipe de profissionais qualificados se dedica a fornecer serviços de instalação, manutenção e reparo de calhas, rufos e condutores com excelência e precisão.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Nosso compromisso é com a satisfação total de nossos clientes, utilizando materiais duráveis e as melhores técnicas do setor. Acreditamos que um bom sistema de calhas é essencial para a preservação do seu patrimônio, prevenindo danos causados pela água e contribuindo para a longevidade da sua construção.
            </p>
            <p className="text-lg text-foreground/80">
              Escolher a Calhas Gabriel é optar por tranquilidade, segurança e um acabamento impecável para o seu lar.
            </p>
          </div>
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl animate-fade-in [animation-delay:0.4s]">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Equipe Calhas Gabriel trabalhando"
              fill={true}
              className="object-cover rounded-lg"
              data-ai-hint="team construction"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
