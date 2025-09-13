import { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./App.tsx";
import LearningModulesPage from './pages/LearningModulesPage.tsx';
import QuizPage from './pages/QuizPage.tsx';
import VirtualDrillsPage from './pages/VirtualDrillsPage.tsx';
import NotFound from './pages/NotFound.tsx';
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/learning-modules" element={<LearningModulesPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/virtual-drills" element={<VirtualDrillsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
