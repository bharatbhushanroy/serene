import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
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
import LoanComparisonCalculator from "@/components/LoanComparisonCalculator";
import InsuranceSection from "@/components/InsuranceSection";
import MadeInBharatSection from "@/components/MadeInBharatSection";
import ProductsSection from "@/components/ProductsSection";
import WalkTheTalkSection from "@/components/WalkTheTalkSection";
import LoanProductsSection from "@/components/LoanProductsSection";
import LoanProductsShowcaseSection from "@/components/LoanProductsShowcaseSection";
import CredClubInspiredSection from "@/components/CredClubInspiredSection";
import { Helmet } from 'react-helmet-async'; // New import

const Index = () => {
  return (
    <div className="min-h-screen bg-fintech-background-light text-fintech-text-dark">
      <Helmet>
        <title>Qicky - Instant Personal Loans & Financial Solutions</title>
        <meta name="description" content="Get instant personal loans, explore credit cards, and manage your finances with Qicky. Quick approvals, flexible terms, and 100% digital process." />
      </Helmet>
      <Header />
      <main>
        {/* HeroCarousel already contains the primary h1 for the page */}
        <HeroCarousel />
        <CredClubInspiredSection />
        <ProductsSection />
        <ApplyStepsSection />
        <QuickLoansFeaturesSection />
        <FeaturesSection />
        <TopUpLoansSection />
        <InteractiveLoanSimulatorSection />
        <InsuranceSection />
        <LoanProductsShowcaseSection />
        <LoanProductsSection />
        <HowItWorksSection />
        <LoanComparisonCalculator />
        <MoneyForEverythingSection />
        <MemberTestimonialsSection />
        <CtaSection />
        <WalkTheTalkSection />
      </main>
      <Footer />
      <MadeInBharatSection />
      <MadeWithDyad />
    </div>
  );
};

export default Index;