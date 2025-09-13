import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Handshake, 
  Building, 
  Users, 
  BookOpen, 
  Shield, 
  TrendingUp,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const StakeholderEngagement = () => {
  const stakeholderStrategies = [
    {
      stakeholder: "Educational Institutions",
      icon: Building,
      priority: "High",
      strategy: "Direct Partnership & Integration",
      approaches: [
        "Phased pilot program implementation",
        "Teacher training and certification",
        "Campus safety assessment integration",
        "Student engagement analytics"
      ],
      benefits: [
        "Enhanced campus safety protocols",
        "Improved emergency response capabilities", 
        "Government compliance achievement",
        "Community reputation enhancement"
      ],
      engagement: [
        "Principal/Administrator workshops",
        "Free pilot program offering",
        "Success story documentation",
        "Peer referral incentives"
      ],
      color: "primary"
    },
    {
      stakeholder: "Government Departments",
      icon: Shield,
      priority: "Critical",
      strategy: "Policy Alignment & Support",
      approaches: [
        "NDMA partnership establishment",
        "State education department collaboration",
        "Policy compliance framework development",
        "National preparedness metrics integration"
      ],
      benefits: [
        "Nationwide disaster preparedness improvement",
        "Educational policy objective fulfillment",
        "Reduced disaster response costs",
        "Enhanced citizen safety metrics"
      ],
      engagement: [
        "High-level government presentations",
        "Policy briefing documents",
        "Pilot program success demonstrations",
        "International best practice showcases"
      ],
      color: "secondary"
    },
    {
      stakeholder: "Parents & Communities",
      icon: Users,
      priority: "Medium",
      strategy: "Awareness & Participation",
      approaches: [
        "Family preparedness program extension",
        "Community engagement initiatives",
        "Parent education workshops",
        "Home safety integration tools"
      ],
      benefits: [
        "Enhanced family safety preparedness",
        "Children's practical skill development",
        "Community resilience building",
        "Emergency communication access"
      ],
      engagement: [
        "Parent-teacher meeting presentations",
        "Community safety workshops",
        "Social media awareness campaigns",
        "Local emergency service partnerships"
      ],
      color: "accent"
    }
  ];

  const sustainabilityApproaches = [
    {
      aspect: "Financial Sustainability",
      icon: TrendingUp,
      strategies: [
        "Government funding partnerships",
        "Educational institution subscriptions",
        "Corporate CSR initiatives",
        "International development grants"
      ]
    },
    {
      aspect: "Technical Sustainability", 
      icon: BookOpen,
      strategies: [
        "Open-source platform development",
        "Local technical capacity building",
        "Scalable cloud infrastructure",
        "Continuous platform evolution"
      ]
    },
    {
      aspect: "Content Sustainability",
      icon: CheckCircle,
      strategies: [
        "Regional expert collaboration",
        "Continuous content updates",
        "User-generated content integration",
        "Multi-language support development"
      ]
    }
  ];

  return (
    <section id="stakeholders" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Stakeholder Engagement & Sustainability Strategy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive approach to engaging key stakeholders and ensuring long-term 
            sustainability of disaster management education initiatives across India.
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {stakeholderStrategies.map((strategy, index) => (
            <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`bg-${strategy.color}/10 p-3 rounded-lg`}>
                      <strategy.icon className={`h-6 w-6 text-${strategy.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{strategy.stakeholder}</CardTitle>
                      <p className="text-sm text-muted-foreground">{strategy.strategy}</p>
                    </div>
                  </div>
                  <Badge 
                    variant={strategy.priority === 'Critical' ? 'destructive' : strategy.priority === 'High' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {strategy.priority} Priority
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Implementation Approaches</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {strategy.approaches.map((approach, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {approach}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Benefits</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {strategy.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Engagement Tactics</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {strategy.engagement.map((tactic, idx) => (
                        <li key={idx} className="flex items-start">
                          <Handshake className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          {tactic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {sustainabilityApproaches.map((approach, index) => (
            <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <approach.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{approach.aspect}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-3">
                  {approach.strategies.map((strategy, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {strategy}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 shadow-card text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Partnership & Collaboration Framework
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            We invite educational institutions, government departments, and community organizations 
            to join us in creating a comprehensive disaster-resilient educational ecosystem for India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-hero-gradient border-0 hover:opacity-90 text-lg px-8 py-4">
              Become a Partner
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary/20 hover:bg-primary/5">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StakeholderEngagement;