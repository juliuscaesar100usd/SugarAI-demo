import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/landing/HeroSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { BenefitsSection } from '@/components/landing/BenefitsSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <HowItWorksSection />
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
