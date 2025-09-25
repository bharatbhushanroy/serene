import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel"; // Changed import from InstantLoansHeroSection
import MoneyForEverythingSection from "@/components/MoneyForEverythingSection";
import ApplyStepsSection from "@/components/ApplyStepsSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import MemberTestimonialsSection from "@/components/MemberTestimonialsSection";
import Footer from "@/components/Footer";
import QuickLoansFeaturesSection from "@/components/QuickLoansFeaturesSection";
import CtaSection from "@/components/CtaSection"; // Re-added CtaSection import
import TopUpLoansSection from "@/components/TopUpLoansSection";
import InteractiveLoanSimulatorSection from "@/components/InteractiveLoanSimulatorSection";
import FinancialFreedomSection from "@/components/FinancialFreedomSection";
import LoanComparisonCalculator from "@/components/LoanComparisonCalculator";
import InsuranceSection from "@/components/InsuranceSection";
import MadeInBharatSection from "@/components/MadeInBharatSection";
import ProductsSection from "@/components/ProductsSection";
import WalkTheTalkSection from "@/components/WalkTheTalkSection";
import LoanProductsSection from "@/components/LoanProductsSection";
import LoanProductsShowcaseSection from "@/components/LoanProductsShowcaseSection";
import CredClubInspiredSection from "@/components/CredClubInspiredSection";
// import DataSecuritySection from "@/components/DataSecuritySection"; // New import - UNCOMMENTED

const Index = () => {
  return (
    <div className="min-h-screen bg-fintech-background-light text-fintech-text-dark">
      <Header />
      <main>
        <HeroCarousel /> {/* Render the new HeroCarousel */}
        <CredClubInspiredSection /> {/* Added the new CredClubInspiredSection here */}
        <ProductsSection />
        <ApplyStepsSection />
        <QuickLoansFeaturesSection />
        {/* <CheckEligibilitySection /> Removed the component */}
        <FeaturesSection />
        <TopUpLoansSection />
        <InteractiveLoanSimulatorSection />
        <InsuranceSection />
        <LoanProductsShowcaseSection /> {/* Added the new section here */}
        <LoanProductsSection />
        <HowItWorksSection />
        <LoanComparisonCalculator />
        <MoneyForEverythingSection /> {/* Moved this section here */}
        <FinancialFreedomSection />
        {/* DataSecuritySection is now part of FinancialFreedomSection */}
        <MemberTestimonialsSection />
        <CtaSection /> {/* Re-added the CtaSection component */}
        <WalkTheTalkSection />
      </main>
      <Footer />
      <MadeInBharatSection />
      <MadeWithDyad />
    </div>
  );
};

export default Index;