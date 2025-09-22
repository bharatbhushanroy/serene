import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MoneyForEverythingSection from "@/components/MoneyForEverythingSection";
import ApplyStepsSection from "@/components/ApplyStepsSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import MemberTestimonialsSection from "@/components/MemberTestimonialsSection";
import Footer from "@/components/Footer";
import InstantLoansSection from "@/components/InstantLoansSection";
import CtaSection from "@/components/CtaSection";
import TopUpLoansSection from "@/components/TopUpLoansSection";
import InteractiveLoanSimulatorSection from "@/components/InteractiveLoanSimulatorSection";
import FinancialFreedomSection from "@/components/FinancialFreedomSection";
import LoanComparisonCalculator from "@/components/LoanComparisonCalculator";
import CheckEligibilitySection from "@/components/CheckEligibilitySection";
import InsuranceSection from "@/components/InsuranceSection";
import IndiaMapSection from "@/components/IndiaMapSection"; // Updated import path

const Index = () => {
  return (
    <div className="min-h-screen bg-fintech-background-light text-fintech-text-dark">
      <Header />
      <main>
        <HeroSection />
        <MoneyForEverythingSection />
        <ApplyStepsSection />
        <InstantLoansSection />
        <CheckEligibilitySection />
        <FeaturesSection />
        <TopUpLoansSection />
        <InteractiveLoanSimulatorSection />
        <InsuranceSection />
        <HowItWorksSection />
        <LoanComparisonCalculator />
        <FinancialFreedomSection />
        <MemberTestimonialsSection />
        <CtaSection />
        <IndiaMapSection /> {/* Updated component name */}
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;