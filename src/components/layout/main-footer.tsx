import Link from "next/link";

export default function MainFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid md:grid-cols-3 gap-8 mb-8 text-left">
          <div>
            <h3 className="text-xl font-headline font-semibold mb-3">Calhas Gabriel</h3>
            <p className="text-sm text-primary-foreground/80">
              Especialistas em proteção e estilo para sua casa. Qualidade e confiança em cada projeto.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-headline font-semibold mb-3">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#quem-somos" className="hover:underline text-primary-foreground/80">Quem Somos</Link></li>
              <li><Link href="#servicos" className="hover:underline text-primary-foreground/80">Nossos Serviços</Link></li>
              <li><Link href="#galeria" className="hover:underline text-primary-foreground/80">Galeria de Projetos</Link></li>
              <li><Link href="#orcamento" className="hover:underline text-primary-foreground/80">Solicite um Orçamento</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-headline font-semibold mb-3">Contato</h3>
            <address className="text-sm not-italic space-y-1 text-primary-foreground/80">
              <p>Rua Valdemar Pereira, 105 - Bairro Mundo Novo</p>
              <p>Monte Santo de Minas, MG - CEP 37968-000</p>
              <p>Telefone: (35) 9 9230 5969</p>
              <p>Email: gabrielduban@gmail.com</p>
            </address>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-sm text-primary-foreground/80">
            &copy; {currentYear} Calhas Gabriel. Todos os direitos reservados.
          </p>
          <p className="text-xs mt-2 text-primary-foreground/60">
            <Link href="/seo-tool" className="hover:underline">Ferramenta SEO (Dev)</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
