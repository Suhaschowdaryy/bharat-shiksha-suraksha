import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Target, 
  Shield, 
  Users, 
  BookOpen, 
  AlertTriangle 
} from "lucide-react";

const ExpectedImpact = () => {
  const impactMetrics = [
    {
      category: "Awareness Enhancement",
      icon: BookOpen,
      description: "Significant improvement in disaster preparedness knowledge across all age groups",
      metrics: [
        { label: "Knowledge Retention", current: 23, target: 85, unit: "%" },
        { label: "Practical Skills", current: 15, target: 78, unit: "%" },
        { label: "Regional Hazard Awareness", current: 31, target: 92, unit: "%" }
      ],
      color: "primary"
    },
    {
      category: "Practical Preparedness",
      icon: Shield,
      description: "Enhanced real-world emergency response capabilities and preparedness scores",
      metrics: [
        { label: "Emergency Response Time", current: 8.5, target: 3.2, unit: "min" },
        { label: "Evacuation Efficiency", current: 45, target: 88, unit: "%" },
        { label: "Equipment Familiarity", current: 22, target: 79, unit: "%" }
      ],
      color: "secondary"
    },
    {
      category: "Campus Safety",
      icon: AlertTriangle,
      description: "Comprehensive safety improvements across educational institutions nationwide",
      metrics: [
        { label: "Safety Drill Participation", current: 56, target: 95, unit: "%" },
        { label: "Incident Response Rate", current: 34, target: 89, unit: "%" },
        { label: "Communication Effectiveness", current: 28, target: 84, unit: "%" }
      ],
      color: "accent"
    }
  ];

  const keyOutcomes = [
    {
      icon: TrendingUp,
      title: "95% Improvement in Preparedness Scores",
      description: "National average preparedness scores increasing from 23% to 85% within 2 years"
    },
    {
      icon: Users,
      title: "50M+ Students Directly Benefited",
      description: "Comprehensive coverage across K-12 and higher education institutions"
    },
    {
      icon: Target,
      title: "90% Drill Participation Rate",
      description: "Regular virtual and physical emergency drills with high engagement"
    },
    {
      icon: Shield,
      title: "Real-time Crisis Communication",
      description: "Instant alerts and coordination during actual emergency situations"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Measurable Impact & Expected Outcomes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive metrics demonstrating the transformative potential of integrated 
            disaster management education across India's educational ecosystem.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {impactMetrics.map((impact, index) => (
            <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`bg-${impact.color}/10 p-3 rounded-lg`}>
                    <impact.icon className={`h-6 w-6 text-${impact.color}`} />
                  </div>
                  <CardTitle className="text-lg">{impact.category}</CardTitle>
                </div>
                <p className="text-muted-foreground text-sm">
                  {impact.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {impact.metrics.map((metric, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">
                          {metric.label}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {metric.current}{metric.unit} → {metric.target}{metric.unit}
                        </span>
                      </div>
                      <Progress 
                        value={(metric.current / metric.target) * 100} 
                        className="h-2"
                      />
                      <div className="text-xs text-muted-foreground mt-1">
                        Target: {metric.target}{metric.unit}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyOutcomes.map((outcome, index) => (
            <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <outcome.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {outcome.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {outcome.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Long-term Societal Impact
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-6">
              Beyond immediate educational outcomes, this platform aims to create a generation of 
              disaster-aware citizens, reducing casualty rates, improving community resilience, 
              and supporting India's national disaster management objectives.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">40%</div>
                <div className="text-sm text-muted-foreground">Reduction in Disaster Casualties</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2x</div>
                <div className="text-sm text-muted-foreground">Faster Emergency Response</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">₹500Cr+</div>
                <div className="text-sm text-muted-foreground">Potential Damage Prevention</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpectedImpact;