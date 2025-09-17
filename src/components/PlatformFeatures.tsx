import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  BookOpen, 
  Gamepad2, 
  AlertCircle, 
  Phone, 
  Users, 
  MapPin,
  Trophy,
  Calendar
} from "lucide-react";
import learningModulesImage from "@/assets/learning-modules.jpg";
import virtualDrillsImage from "@/assets/virtual-drills.jpg";

const PlatformFeatures = () => {
  const navigate = useNavigate();
  const coreFeatures = [
    {
      id: "learning",
      icon: BookOpen,
      title: "Interactive Learning Modules",
      description: "Comprehensive disaster education content tailored for different age groups and regional hazards",
      features: ["Earthquake safety protocols", "Flood management", "Fire safety", "Cyclone preparedness"],
      image: learningModulesImage
    },
    {
      id: "gamified",
      icon: Gamepad2,
      title: "Gamified Learning Experience",
      description: "Engaging game-based learning that makes disaster preparedness fun and memorable",
      features: ["Achievement badges", "Progress tracking", "Peer competitions", "Scenario simulations"],
      image: virtualDrillsImage
    },
    {
      id: "alerts",
      icon: AlertCircle,
      title: "Real-time Regional Alerts",
      description: "Location-based emergency notifications and weather alerts integrated with educational content",
      features: ["Weather warnings", "Seismic alerts", "Local advisories", "Evacuation routes"],
      image: null
    },
    {
      id: "communication",
      icon: Phone,
      title: "Emergency Communication Hub",
      description: "Instant communication system connecting students, teachers, parents, and emergency services",
      features: ["One-touch emergency calls", "Parent notifications", "Teacher broadcasts", "Authority alerts"],
      image: null
    }
  ];

  const additionalFeatures = [
    {
      icon: Users,
      title: "Virtual Emergency Drills",
      description: "Scheduled and surprise virtual drills to practice emergency responses"
    },
    {
      icon: MapPin,
      title: "Campus Safety Mapping",
      description: "Interactive maps showing evacuation routes and safety zones"
    },
    {
      icon: Trophy,
      title: "Preparedness Scoring",
      description: "Individual and institutional preparedness metrics and rankings"
    },
    {
      icon: Calendar,
      title: "Event Integration",
      description: "Calendar integration for safety drills and awareness campaigns"
    }
  ];

  return (
    <section id="features" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Platform Features & Capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive digital ecosystem designed to transform disaster management 
            education through innovative technology and engaging user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {coreFeatures.map((feature, index) => (
            <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
                {feature.image && (
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {feature.features.map((item, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    if (feature.id === 'learning') {
                      navigate('/learning');
                    } else if (feature.id === 'gamified') {
                      navigate('/quiz');
                    } else if (feature.id === 'alerts' || feature.id === 'communication') {
                      navigate('/drills');
                    }
                  }}
                >
                  {feature.id === 'learning' ? 'Start Learning' : 
                   feature.id === 'gamified' ? 'Take Quiz' : 'Explore Features'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalFeatures.map((feature, index) => (
            <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;