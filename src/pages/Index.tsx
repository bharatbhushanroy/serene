import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import InstantLoansSection from "@/components/InstantLoansSection";
import AdvanceLoanSimulator from "@/components/AdvanceLoanSimulator"; // Import the new simulator
import LoanComparisonCalculator from "@/components/LoanComparisonCalculator"; // Import the new calculator

const Index = () => {
  return (
    <div className="min-h-screen bg-qicky-dark text-qicky-text hero-background">
      <Header />
      <HeroSection />
      <InstantLoansSection />
      <AdvanceLoanSimulator /> {/* Added the new simulator here */}
      <LoanComparisonCalculator /> {/* Added the new calculator here */}
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;