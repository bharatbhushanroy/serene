import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import LoanTypesSection from "@/components/LoanTypesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-qicky-dark text-qicky-text">
      <Header />
      <main>
        <HeroSection />
        <LoanTypesSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;