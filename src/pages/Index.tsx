import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection"; // Import the new HeroSection
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
import DataSecuritySection from "@/components/DataSecuritySection";
import UpiSection from "@/components/UpiSection";
import AllInOneFinancialAppSection from "@/components/AllInOneFinancialAppSection";
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <div className="min-h-screen bg-fintech-background-light text-fintech-text-dark">
      <Helmet>
        <title>Qicky - Instant Personal Loans & Financial Solutions</title>
        <meta name="description" content="Get instant personal loans, explore credit cards, and manage your finances with Qicky. Quick approvals, flexible terms, and 100% digital process." />
      </Helmet>
      <Header />
      <main>
        <HeroSection /> {/* New Hero Section */}
        <QuickLoansFeaturesSection /> {/* This section is now directly below the new hero */}
        <ProductsSection />
        <HowItWorksSection />
        <FeaturesSection />
        <MoneyForEverythingSection />
        <LoanProductsShowcaseSection />
        <LoanProductsSection />
        <InteractiveLoanSimulatorSection />
        <LoanComparisonCalculator />
        <CredClubInspiredSection />
        <AllInOneFinancialAppSection />
        <UpiSection />
        <TopUpLoansSection />
        <InsuranceSection />
        <ApplyStepsSection />
        <MemberTestimonialsSection />
        <DataSecuritySection />
        <WalkTheTalkSection />
        <CtaSection />
      </main>
      <Footer />
      <MadeInBharatSection />
      <MadeWithDyad />
    </div>
  );
};

export default Index;