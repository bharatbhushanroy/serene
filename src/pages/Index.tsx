import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from "@/components/Header";
import InstantLoansHeroSection from "@/components/InstantLoansHeroSection";
import MoneyForEverythingSection from "@/components/MoneyForEverythingSection";
import ApplyStepsSection from "@/components/ApplyStepsSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import MemberTestimonialsSection from "@/components/MemberTestimonialsSection";
import Footer from "@/components/Footer";
import QuickLoansFeaturesSection from "@/components/QuickLoansFeaturesSection";
import CtaSection from "@/components/CtaSection";
import TopUpLoansSection from "@/components/TopUpLoansSection";
import InteractiveLoanSimulatorSection from "@/components/InteractiveLoanSimulatorSection";
import FinancialFreedomSection from "@/components/FinancialFreedomSection";
import LoanComparisonCalculator from "@/components/LoanComparisonCalculator";
import CheckEligibilitySection from "@/components/CheckEligibilitySection";
import InsuranceSection from "@/components/InsuranceSection";
import MadeInBharatSection from "@/components/MadeInBharatSection";
import ProductsSection from "@/components/ProductsSection"; // New import

const Index = () => {
  return (
    <div className="min-h-screen bg-fintech-background-light text-fintech-text-dark">
      <Header />
      <main>
        <InstantLoansHeroSection />
        <ProductsSection /> {/* Added the new ProductsSection here */}
        <MoneyForEverythingSection />
        <ApplyStepsSection />
        <QuickLoansFeaturesSection />
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
      </main>
      <Footer />
      <MadeInBharatSection />
      <MadeWithDyad />
    </div>
  );
};

export default Index;