import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQs";
import LoanCalculatorPage from "./pages/LoanCalculatorPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LoginPage from "./pages/LoginPage"; // Import the new LoginPage
import SignupPage from "./pages/SignupPage"; // Import the new SignupPage
import ApplyLoanPage from "./pages/ApplyLoanPage"; // Import the new ApplyLoanPage
import DashboardPage from "./pages/DashboardPage"; // Import the new DashboardPage
import AiChatbot from "./components/AiChatbot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/loan-calculator" element={<LoanCalculatorPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<LoginPage />} /> {/* Add the Login route */}
          <Route path="/signup" element={<SignupPage />} /> {/* Add the Signup route */}
          <Route path="/apply-loan" element={<ApplyLoanPage />} /> {/* Add the Apply Loan route */}
          <Route path="/dashboard" element={<DashboardPage />} /> {/* Add the Dashboard route */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <AiChatbot />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;