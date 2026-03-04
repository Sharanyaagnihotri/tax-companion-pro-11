import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import DocumentUpload from "./pages/DocumentUpload";
import AIReview from "./pages/AIReview";
import IncomeSummary from "./pages/IncomeSummary";
import DeductionOptimizer from "./pages/DeductionOptimizer";
import TaxCalculation from "./pages/TaxCalculation";
import ITRPreview from "./pages/ITRPreview";
import SubmitFiling from "./pages/SubmitFiling";
import Confirmation from "./pages/Confirmation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload" element={<DocumentUpload />} />
          <Route path="/review" element={<AIReview />} />
          <Route path="/income-summary" element={<IncomeSummary />} />
          <Route path="/deductions" element={<DeductionOptimizer />} />
          <Route path="/tax-calculation" element={<TaxCalculation />} />
          <Route path="/itr-preview" element={<ITRPreview />} />
          <Route path="/submit" element={<SubmitFiling />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
