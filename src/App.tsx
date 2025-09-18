import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import UserMenu from "./components/UserMenu";

const queryClient = new QueryClient();

const HeaderControls = () => {
  const { pathname } = useLocation();
  const loggedIn = typeof window !== 'undefined' && localStorage.getItem('loggedIn') === '1';
  const showUserMenu = loggedIn && pathname !== "/login";
  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2 items-center">
      <LanguageQuickToggle />
      <LanguageSwitcher />
      <VoiceTranslator />
      {showUserMenu ? <UserMenu /> : null}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <I18nProvider>
        <BrowserRouter>
          <a href="/" className="fixed top-3 left-4 z-[60] inline-flex items-center gap-2">
            <img src="/logo.jpeg" alt="Site Logo" className="h-10 w-auto rounded-md shadow-sm" />
          </a>
          <HeaderControls />
          <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/climate-resilience" element={<ClimateResilience />} />
          <Route path="/yield-prediction" element={<YieldPrediction />} />
          <Route path="/mandi-bhaba" element={<MandiBhaba />} />
          <Route path="/krishi-calendar" element={<KrishiCalendar />} />
          <Route path="/fasal-doctor" element={<FasalDoctor />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </I18nProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
