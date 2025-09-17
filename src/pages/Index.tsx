import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-qicky-dark text-qicky-text">
      <Header />
      <HeroSection />
      {/* Other sections will be added here */}
      <MadeWithDyad />
    </div>
  );
};

export default Index;