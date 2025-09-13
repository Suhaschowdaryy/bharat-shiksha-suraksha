import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Users, GraduationCap, Building } from "lucide-react";

const ProblemStatement = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Limited Disaster Awareness",
      description: "Only 23% of Indian students have adequate knowledge of disaster preparedness protocols",
      stat: "77% Gap"
    },
    {
      icon: Users,
      title: "Ineffective Communication",
      description: "Lack of real-time emergency communication systems in educational institutions",
      stat: "85% Schools"
    },
    {
      icon: GraduationCap,
      title: "Outdated Curricula",
      description: "Traditional teaching methods fail to engage students in practical disaster management",
      stat: "90% Traditional"
    },
    {
      icon: Building,
      title: "Campus Vulnerability",
      description: "Educational institutions lack comprehensive emergency response frameworks",
      stat: "68% Unprepared"
    }
  ];

  return (
    <section id="overview" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            The Challenge We're Addressing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            India's educational institutions face critical gaps in disaster preparedness, 
            leaving millions of students vulnerable during emergencies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 border-border/50">
              <CardContent className="p-6 text-center">
                <div className="bg-destructive/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <problem.icon className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {problem.description}
                </p>
                <div className="text-2xl font-bold text-destructive">
                  {problem.stat}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-card border border-border rounded-2xl p-8 shadow-card">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              The Need for Digital Transformation
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              With over 250 million students across India's educational landscape, there's an urgent need 
              for a comprehensive, technology-driven approach to disaster management education that can 
              scale effectively while ensuring practical preparedness and safety.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;