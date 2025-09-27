import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
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
import RootLayout from "./components/RootLayout";
import PersonalLoanPage from "./pages/products/PersonalLoanPage";
import BusinessLoanPage from "./pages/products/BusinessLoanPage";
import HomeLoanPage from "./pages/products/HomeLoanPage";
import FreeCreditScorePage from "./pages/products/FreeCreditScorePage";
import CreditCardsPage from "./pages/products/CreditCardsPage";
import PersonalFinancePage from "./pages/products/PersonalFinancePage";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import EMICalculatorPage from "./pages/EMICalculatorPage";
import LoanComparisonPage from "./pages/LoanComparisonPage";
import InteractiveLoanSimulatorPage from "./pages/InteractiveLoanSimulatorPage";
import FixedDepositCalculatorPage from "./pages/FixedDepositCalculatorPage"; // New import
import RecurringDepositCalculatorPage from "./pages/RecurringDepositCalculatorPage"; // New import
import CarLoanEMICalculatorPage from "./pages/CarLoanEMICalculatorPage"; // New import

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/loan-calculator" element={<LoanCalculatorPage />} />
            <Route path="/emi-calculator" element={<EMICalculatorPage />} />
            <Route path="/loan-comparison" element={<LoanComparisonPage />} />
            <Route path="/interactive-loan-simulator" element={<InteractiveLoanSimulatorPage />} />
            <Route path="/fd-calculator" element={<FixedDepositCalculatorPage />} /> {/* New route */}
            <Route path="/rd-calculator" element={<RecurringDepositCalculatorPage />} /> {/* New route */}
            <Route path="/car-loan-emi-calculator" element={<CarLoanEMICalculatorPage />} /> {/* New route */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/apply-loan" element={<ApplyLoanPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            {/* New Product Routes */}
            <Route path="/products/personal-loan" element={<PersonalLoanPage />} />
            <Route path="/products/business-loan" element={<BusinessLoanPage />} />
            <Route path="/products/home-loan" element={<HomeLoanPage />} />
            <Route path="/products/free-credit-score" element={<FreeCreditScorePage />} />
            <Route path="/products/credit-cards" element={<CreditCardsPage />} />
            <Route path="/products/personal-finance" element={<PersonalFinancePage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;