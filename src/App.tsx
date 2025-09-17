import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nProvider } from "./lib/i18n";
import LanguageSwitcher from "./components/LanguageSwitcher";
import LanguageQuickToggle from "./components/LanguageQuickToggle";
import VoiceTranslator from "./components/VoiceTranslator";
import Index from "./pages/Index";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ClimateResilience from "./pages/ClimateResilience";
import YieldPrediction from "./pages/YieldPrediction";
import NotFound from "./pages/NotFound";
import MandiBhaba from "./pages/MandiBhaba";
import KrishiCalendar from "./pages/KrishiCalendar";
import FasalDoctor from "./pages/FasalDoctor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <I18nProvider>
        <BrowserRouter>
          <div className="fixed top-4 right-4 z-50 flex gap-2 items-center">
            <LanguageQuickToggle />
            <LanguageSwitcher />
            <VoiceTranslator />
          </div>
          <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/climate-resilience" element={<ClimateResilience />} />
          <Route path="/yield-prediction" element={<YieldPrediction />} />
          <Route path="/mandi-bhaba" element={<MandiBhaba />} />
          <Route path="/krishi-calendar" element={<KrishiCalendar />} />
          <Route path="/fasal-doctor" element={<FasalDoctor />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </I18nProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
