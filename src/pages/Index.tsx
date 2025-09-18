import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ApplyStepsSection from "@/components/ApplyStepsSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import InstantLoansSection from "@/components/InstantLoansSection";
import CtaSection from "@/components/CtaSection";
import TopUpLoansSection from "@/components/TopUpLoansSection"; // Import the new component

const Index = () => {
  return (
    <div className="min-h-screen bg-fintech-background-light text-fintech-text-dark">
      <Header />
      <main>
        <HeroSection />
        <ApplyStepsSection />
        <InstantLoansSection />
        <FeaturesSection />
        <TopUpLoansSection /> {/* Add the new section here */}
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