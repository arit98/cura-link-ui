import { Toaster } from "@/components/ui/toaster";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import PatientOnboarding from "./pages/PatientOnboarding";
import PatientDashboard from "./pages/PatientDashboard";
import ResearcherOnboarding from "./pages/ResearcherOnboarding";
import ResearcherDashboard from "./pages/ResearcherDashboard";
import ClinicalTrials from "./pages/ClinicalTrials";
import Experts from "./pages/Experts";
import Publications from "./pages/Publications";
import Favorites from "./pages/Favorites";
import Forums from "./pages/Forums";
import NotFound from "./pages/NotFound";
import UserProfile from "./pages/User";
import Profile from "./pages/Profile";
import { useEffect, useState } from "react";
// import PublicRoute from "./components/PublicRoute";

const queryClient = new QueryClient();

const App = () => {

  const [user, setUser] = useState<Number>()

  useEffect(() => {
    const syncUserRole = () => {
      const userRole = localStorage.getItem("role");
      setUser(userRole !== null ? Number(userRole) : undefined);
    };
    syncUserRole();
    window.addEventListener("authChange", syncUserRole);
    return () => window.removeEventListener("authChange", syncUserRole);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/user" element={<UserProfile />} />
            <Route path="/patient-onboarding" element={<PatientOnboarding />} />
            <Route path="/researcher-onboarding" element={<ResearcherOnboarding />} />
            <Route path="/patient-dashboard" element={<PatientDashboard />} />
            <Route path="/experts" element={<Experts />} />
            <Route path="/researcher-dashboard" element={<ResearcherDashboard />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/clinical-trials" element={<ClinicalTrials />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/forums" element={<Forums />} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
