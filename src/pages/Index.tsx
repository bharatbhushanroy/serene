import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import InstantLoansSection from "@/components/InstantLoansSection"; // Import the new section

const Index = () => {
  return (
    <div className="min-h-screen bg-qicky-dark text-qicky-text hero-background"> {/* Applied hero-background here */}
      <Header />
      <HeroSection />
      <InstantLoansSection /> {/* Added the new section here */}
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;