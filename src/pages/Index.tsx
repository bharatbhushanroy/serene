import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import InstantLoansSection from "@/components/InstantLoansSection";
// Removed AdvanceLoanSimulator and LoanComparisonCalculator imports as they are now on their own page

const Index = () => {
  return (
    <div className="min-h-screen bg-qicky-dark text-qicky-text hero-background">
      <Header />
      <HeroSection />
      <InstantLoansSection />
      {/* Removed AdvanceLoanSimulator and LoanComparisonCalculator from here */}
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;