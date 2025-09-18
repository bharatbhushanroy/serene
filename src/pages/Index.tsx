import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ApplyStepsSection from "@/components/ApplyStepsSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import MemberTestimonialsSection from "@/components/MemberTestimonialsSection"; // Import the new component
import Footer from "@/components/Footer";
import InstantLoansSection from "@/components/InstantLoansSection";
import CtaSection from "@/components/CtaSection";
import TopUpLoansSection from "@/components/TopUpLoansSection";
import InteractiveLoanSimulatorSection from "@/components/InteractiveLoanSimulatorSection";
import FinancialFreedomSection from "@/components/FinancialFreedomSection";
import LoanComparisonCalculator from "@/components/LoanComparisonCalculator";

const Index = () => {
  return (
    <div className="min-h-screen bg-fintech-background-light text-fintech-text-dark">
      <Header />
      <main>
        <HeroSection />
        <ApplyStepsSection />
        <InstantLoansSection />
        <FeaturesSection />
        <TopUpLoansSection />
        <InteractiveLoanSimulatorSection />
        <HowItWorksSection />
        <LoanComparisonCalculator />
        <FinancialFreedomSection />
        <MemberTestimonialsSection /> {/* Use the new component here */}
        <CtaSection />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;