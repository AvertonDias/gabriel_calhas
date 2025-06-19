import MainNavbar from '@/components/layout/main-navbar';
import MainFooter from '@/components/layout/main-footer';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ServicesSection from '@/components/sections/services-section';
import GallerySection from '@/components/sections/gallery-section';
import QuoteSection from '@/components/sections/quote-section';
import WhatsAppButton from '@/components/ui/whatsapp-button';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNavbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <QuoteSection />
      </main>
      <WhatsAppButton />
      <MainFooter />
    </div>
  );
}
