import QuoteSectionForm from './quote-section-form';

export default function QuoteSection() {
  return (
    <section id="orcamento" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
              Solicite um Orçamento
            </h2>
            <p className="text-lg text-foreground/80">
              Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível para entender suas necessidades e oferecer a melhor solução.
            </p>
          </div>
          <div className="bg-card p-8 md:p-12 rounded-lg shadow-xl">
            <QuoteSectionForm />
          </div>
        </div>
      </div>
    </section>
  );
}
