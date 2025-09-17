import { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { AuthProvider } from "@/hooks/useAuth";
import App from "./App.tsx";
import AuthPage from './pages/AuthPage.tsx';
import LearningModulesPage from './pages/LearningModulesPage.tsx';
import QuizPage from './pages/QuizPage.tsx';
import VirtualDrillsPage from './pages/VirtualDrillsPage.tsx';
import NotFound from './pages/NotFound.tsx';
import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <BrowserRouter>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/learning" element={<LearningModulesPage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/drills" element={<VirtualDrillsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </StrictMode>
);