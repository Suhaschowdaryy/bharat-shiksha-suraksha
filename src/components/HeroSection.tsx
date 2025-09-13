import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-disaster-education.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-section-gradient py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Building Resilient
                <span className="bg-hero-gradient bg-clip-text text-transparent"> Communities</span>
                <br />
                Through Education
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A comprehensive digital platform transforming disaster management education 
                in Indian schools and colleges through interactive learning, gamification, 
                and real-time emergency communication.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-hero-gradient border-0 hover:opacity-90 text-lg px-8 py-4">
                Explore the Platform
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary/20 hover:bg-primary/5">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50M+</div>
                <div className="text-sm text-muted-foreground">Students Reached</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">95%</div>
                <div className="text-sm text-muted-foreground">Preparedness Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">1000+</div>
                <div className="text-sm text-muted-foreground">Schools Connected</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img 
                src={heroImage} 
                alt="Students learning disaster management through digital platform"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;