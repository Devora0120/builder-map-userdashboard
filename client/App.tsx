import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProgressPage from "./pages/ProgressPage";
import CoursesPage from "./pages/CoursesPage";
import GPABoosterPage from "./pages/GPABoosterPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import ResearchPage from "./pages/ResearchPage";
import NetworkPage from "./pages/NetworkPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/gpa-booster" element={<GPABoosterPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/network" element={<NetworkPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
