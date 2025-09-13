import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemStatement from "@/components/ProblemStatement";
import PlatformFeatures from "@/components/PlatformFeatures";
import TargetAudience from "@/components/TargetAudience";
import ExpectedImpact from "@/components/ExpectedImpact";
import ImplementationRoadmap from "@/components/ImplementationRoadmap";
import StakeholderEngagement from "@/components/StakeholderEngagement";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProblemStatement />
      <PlatformFeatures />
      <TargetAudience />
      <ExpectedImpact />
      <ImplementationRoadmap />
      <StakeholderEngagement />
      <Footer />
    </div>
  );
};

export default Index;
