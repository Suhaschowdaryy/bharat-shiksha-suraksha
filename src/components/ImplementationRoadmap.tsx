import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Rocket, 
  Users, 
  Globe, 
  Target,
  Calendar,
  CheckCircle,
  Clock,
  ArrowRight
} from "lucide-react";

const ImplementationRoadmap = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation & Pilot",
      duration: "Months 1-6",
      status: "Planning",
      icon: Rocket,
      objectives: [
        "Platform development and testing",
        "Content creation for core modules",
        "Pilot implementation in 50 schools",
        "Teacher training programs",
        "Stakeholder engagement initiation"
      ],
      deliverables: [
        "MVP Platform Launch",
        "Basic Learning Modules",
        "Teacher Training Curriculum",
        "Pilot Feedback Report"
      ],
      metrics: ["50 schools", "5,000 students", "500 teachers"],
      color: "primary"
    },
    {
      phase: "Phase 2", 
      title: "Scale & Enhance",
      duration: "Months 7-18",
      status: "Ready",
      icon: Users,
      objectives: [
        "Expansion to 500 institutions",
        "Advanced feature development",
        "Regional customization",
        "Parent engagement modules",
        "Government partnership establishment"
      ],
      deliverables: [
        "Enhanced Platform v2.0",
        "Regional Content Packages",
        "Parent Mobile App",
        "Government Integration APIs"
      ],
      metrics: ["500 institutions", "100K students", "10K teachers"],
      color: "secondary"
    },
    {
      phase: "Phase 3",
      title: "National Rollout", 
      duration: "Months 19-36",
      status: "Future",
      icon: Globe,
      objectives: [
        "Nationwide deployment",
        "AI-powered personalization",
        "Real-time alert integration",
        "Community engagement features",
        "Comprehensive impact assessment"
      ],
      deliverables: [
        "National Platform v3.0",
        "AI Learning Engine",
        "Emergency Alert System",
        "Impact Assessment Report"
      ],
      metrics: ["5,000+ institutions", "2M+ students", "200K+ teachers"],
      color: "accent"
    }
  ];

  const keyMilestones = [
    {
      month: "Month 3",
      milestone: "Platform Beta Release",
      icon: CheckCircle,
      status: "completed"
    },
    {
      month: "Month 6", 
      milestone: "Pilot Program Results",
      icon: Target,
      status: "in-progress"
    },
    {
      month: "Month 12",
      milestone: "500 Schools Connected",
      icon: Users,
      status: "upcoming"
    },
    {
      month: "Month 24",
      milestone: "1M Students Reached",
      icon: Globe,
      status: "upcoming"
    }
  ];

  return (
    <section id="implementation" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Implementation Roadmap & Timeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A structured 3-phase approach to nationwide deployment, ensuring sustainable 
            growth and maximum impact across India's educational ecosystem.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {phases.map((phase, index) => (
            <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-1 bg-${phase.color}`}></div>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge 
                    variant={phase.status === 'Planning' ? 'default' : phase.status === 'Ready' ? 'secondary' : 'outline'}
                    className="text-xs"
                  >
                    {phase.status}
                  </Badge>
                  <div className={`bg-${phase.color}/10 p-2 rounded-lg`}>
                    <phase.icon className={`h-5 w-5 text-${phase.color}`} />
                  </div>
                </div>
                <CardTitle className="text-xl">{phase.phase}: {phase.title}</CardTitle>
                <p className="text-sm text-muted-foreground flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {phase.duration}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Objectives</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {phase.objectives.map((objective, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Deliverables</h4>
                    <div className="flex flex-wrap gap-1">
                      {phase.deliverables.map((deliverable, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {deliverable}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Success Metrics</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {phase.metrics.map((metric, idx) => (
                        <div key={idx} className="text-sm font-medium text-primary">
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 shadow-card mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Key Milestones & Timeline
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {keyMilestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 ${
                  milestone.status === 'completed' ? 'bg-secondary text-white' :
                  milestone.status === 'in-progress' ? 'bg-primary/20 text-primary' :
                  'bg-muted text-muted-foreground'
                }`}>
                  <milestone.icon className="h-6 w-6" />
                </div>
                <div className="text-sm font-semibold text-foreground">{milestone.month}</div>
                <div className="text-xs text-muted-foreground mt-1">{milestone.milestone}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Begin Implementation?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join us in building a safer, more prepared educational ecosystem for India's future.
          </p>
          <Button size="lg" className="bg-hero-gradient border-0 hover:opacity-90 text-lg px-8 py-4">
            Start Partnership Discussion
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImplementationRoadmap;