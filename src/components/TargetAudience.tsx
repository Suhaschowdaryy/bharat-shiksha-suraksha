import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Users, 
  Building, 
  Heart, 
  Shield 
} from "lucide-react";

const TargetAudience = () => {
  const audiences = [
    {
      icon: GraduationCap,
      title: "Students",
      subtitle: "K-12 & Higher Education",
      description: "Primary beneficiaries learning essential life-saving skills through engaging digital experiences",
      demographics: ["Ages 5-25", "250M+ in India", "Urban & Rural"],
      benefits: [
        "Age-appropriate disaster education",
        "Gamified learning experiences", 
        "Peer collaboration tools",
        "Achievement recognition"
      ],
      color: "primary"
    },
    {
      icon: Users,
      title: "Teachers & Educators",
      subtitle: "Training & Implementation",
      description: "Empowering educators with tools and resources to effectively deliver disaster management education",
      demographics: ["9.5M+ Teachers", "All Education Levels", "Professional Development"],
      benefits: [
        "Comprehensive training modules",
        "Classroom management tools",
        "Assessment frameworks",
        "Resource libraries"
      ],
      color: "secondary"
    },
    {
      icon: Building,
      title: "Educational Institutions",
      subtitle: "Schools & Colleges",
      description: "Institutional adoption for campus-wide safety and emergency preparedness implementation",
      demographics: ["1.5M+ Schools", "40K+ Colleges", "Public & Private"],
      benefits: [
        "Campus safety protocols",
        "Emergency response systems",
        "Compliance tracking",
        "Stakeholder communication"
      ],
      color: "accent"
    },
    {
      icon: Heart,
      title: "Parents & Families",
      subtitle: "Home Safety Extension",
      description: "Extending disaster preparedness education to families and communities through student engagement",
      demographics: ["500M+ Parents", "Multi-generational", "Community Impact"],
      benefits: [
        "Family preparedness plans",
        "Home safety checklists",
        "Community alerts",
        "Child progress tracking"
      ],
      color: "primary"
    },
    {
      icon: Shield,
      title: "Government Departments",
      subtitle: "Policy & Implementation",
      description: "Supporting government initiatives for national disaster resilience through educational integration",
      demographics: ["Central & State Govt", "NDMA Partnership", "Policy Implementation"],
      benefits: [
        "Policy compliance tools",
        "National preparedness metrics",
        "Resource allocation insights",
        "Impact assessment"
      ],
      color: "secondary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Comprehensive Stakeholder Engagement
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform serves diverse stakeholders across India's educational ecosystem, 
            creating a unified approach to disaster management education and preparedness.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {audiences.slice(0, 3).map((audience, index) => (
            <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`bg-${audience.color}/10 p-3 rounded-lg`}>
                    <audience.icon className={`h-6 w-6 text-${audience.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{audience.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{audience.subtitle}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {audience.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Demographics</h4>
                  <div className="flex flex-wrap gap-1">
                    {audience.demographics.map((demo, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {demo}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Benefits</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {audience.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {audiences.slice(3).map((audience, index) => (
            <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`bg-${audience.color}/10 p-3 rounded-lg`}>
                    <audience.icon className={`h-6 w-6 text-${audience.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{audience.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{audience.subtitle}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {audience.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Demographics</h4>
                  <div className="flex flex-wrap gap-1">
                    {audience.demographics.map((demo, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {demo}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Benefits</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {audience.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;