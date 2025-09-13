import Navigation from "@/components/Navigation";
import LearningModules from "@/components/LearningModules";
import Footer from "@/components/Footer";

const LearningModulesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <LearningModules />
      <Footer />
    </div>
  );
};

export default LearningModulesPage;