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
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ApplyLoanPage from "./pages/ApplyLoanPage";
import DashboardPage from "./pages/DashboardPage";
import AiChatbot from "./components/AiChatbot";
import TestComponent from "./components/TestComponent"; // Import the new TestComponent

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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/apply-loan" element={<ApplyLoanPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <AiChatbot />
      <TestComponent /> {/* Temporarily render TestComponent here */}
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;