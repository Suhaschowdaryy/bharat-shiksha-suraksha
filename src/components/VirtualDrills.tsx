import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle,
  Clock,
  Users,
  AlertTriangle,
  Shield,
  MapPin,
  Phone,
  Radio,
  Target,
  Timer,
  Award,
  Building,
  Siren,
  Navigation
} from "lucide-react";
import virtualDrillsImage from "@/assets/virtual-drills.jpg";

const VirtualDrills = () => {
  const [activeDrill, setActiveDrill] = useState<number | null>(null);
  const [drillProgress, setDrillProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const drillStats = [
    { label: "Total Drills", value: "24", icon: Target },
    { label: "Participants", value: "15,647", icon: Users },
    { label: "Success Rate", value: "87%", icon: Award },
    { label: "Response Time", value: "3.2 min", icon: Timer }
  ];

  const drillTypes = [
    { name: "Earthquake", icon: AlertTriangle, color: "amber", count: 8 },
    { name: "Fire Safety", icon: Shield, color: "red", count: 6 },
    { name: "Flood", icon: Navigation, color: "blue", count: 4 },
    { name: "Security", icon: Building, color: "gray", count: 3 },
    { name: "Communication", icon: Radio, color: "green", count: 3 }
  ];

  const recentDrills = [
    { name: "Morning Fire Drill", time: "2 hours ago", participants: 245, score: 92 },
    { name: "Earthquake Response", time: "1 day ago", participants: 189, score: 88 },
    { name: "Lockdown Simulation", time: "3 days ago", participants: 156, score: 95 },
    { name: "Flood Preparedness", time: "1 week ago", participants: 123, score: 84 }
  ];

  const drillScenarios = [
    {
      id: 1,
      title: "Earthquake Response Drill",
      description: "Practice immediate earthquake response protocols including Drop, Cover, and Hold On technique",
      duration: "15 minutes",
      difficulty: "Beginner",
      participants: 1245,
      lastConducted: "2 days ago",
      status: "Active",
      type: "Natural Disaster",
      icon: AlertTriangle,
      color: "amber",
      objectives: [
        "Execute Drop, Cover, Hold On within 10 seconds",
        "Identify safe evacuation routes",
        "Account for all participants post-evacuation"
      ],
      steps: [
        "Initial alert simulation",
        "Drop, Cover, Hold On response",
        "Wait for all-clear signal",
        "Organized evacuation",
        "Assembly point check-in"
      ]
    },
    {
      id: 2,
      title: "Fire Evacuation Simulation",
      description: "Complete fire emergency evacuation with smoke simulation and emergency communication protocols",
      duration: "20 minutes",
      difficulty: "Intermediate",
      participants: 892,
      lastConducted: "1 week ago",
      status: "Scheduled",
      type: "Fire Emergency",
      icon: Shield,
      color: "red",
      objectives: [
        "Execute evacuation within 5 minutes",
        "Practice low crawling through smoke",
        "Test emergency communication systems"
      ],
      steps: [
        "Fire alarm activation",
        "Immediate evacuation start",
        "Use of designated exits",
        "Assembly at safe zone",
        "Headcount verification"
      ]
    },
    {
      id: 3,
      title: "Flood Emergency Protocol",
      description: "Simulate flood emergency response including shelter-in-place and evacuation decisions",
      duration: "25 minutes",
      difficulty: "Advanced",
      participants: 567,
      lastConducted: "3 weeks ago",
      status: "Available",
      type: "Weather Emergency",
      icon: Navigation,
      color: "blue",
      objectives: [
        "Assess flood risk levels",
        "Make evacuation vs shelter decisions",
        "Coordinate with emergency services"
      ],
      steps: [
        "Weather alert notification",
        "Risk assessment phase",
        "Decision making process",
        "Implementation of chosen strategy",
        "Communication with authorities"
      ]
    },
    {
      id: 4,
      title: "Lockdown Security Drill",
      description: "Practice lockdown procedures and secure communication during security threats",
      duration: "30 minutes",
      difficulty: "Advanced",
      participants: 743,
      lastConducted: "5 days ago",
      status: "Active",
      type: "Security Threat",
      icon: Building,
      color: "gray",
      objectives: [
        "Secure all entry points within 3 minutes",
        "Maintain silent communication",
        "Coordinate with security personnel"
      ],
      steps: [
        "Security alert received",
        "Immediate lockdown procedures",
        "Silent communication protocols",
        "Coordination with security",
        "All-clear confirmation"
      ]
    },
    {
      id: 5,
      title: "Communication System Test",
      description: "Test emergency communication systems and alert distribution protocols",
      duration: "10 minutes",
      difficulty: "Beginner",
      participants: 1567,
      lastConducted: "4 days ago",
      status: "Available",
      type: "Communication",
      icon: Radio,
      color: "green",
      objectives: [
        "Test all communication channels",
        "Verify message delivery",
        "Practice emergency contacts"
      ],
      steps: [
        "System activation test",
        "Message broadcast verification",
        "Two-way communication check",
        "Emergency contact verification",
        "System performance review"
      ]
    },
    {
      id: 6,
      title: "Multi-Hazard Response",
      description: "Advanced scenario combining multiple emergency situations requiring coordinated response",
      duration: "45 minutes",
      difficulty: "Expert",
      participants: 234,
      lastConducted: "2 weeks ago",
      status: "Coming Soon",
      type: "Combined Emergency",
      icon: Siren,
      color: "purple",
      objectives: [
        "Manage multiple simultaneous threats",
        "Prioritize response actions",
        "Coordinate multiple teams"
      ],
      steps: [
        "Multiple alert scenarios",
        "Threat prioritization",
        "Resource allocation",
        "Coordinated response execution",
        "Post-incident review"
      ]
    }
  ];

  return (
    <section className="py-16 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Virtual Emergency Drills
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practice emergency response procedures through realistic virtual simulations. 
            Build confidence and improve response times in a safe, controlled environment.
          </p>
        </div>

        {/* Drill Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {drillStats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="drills" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="drills">Available Drills</TabsTrigger>
            <TabsTrigger value="categories">Drill Categories</TabsTrigger>
            <TabsTrigger value="recent">Recent Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="drills" className="mt-8">
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {drillScenarios.map((drill) => (
                <Card key={drill.id} className="shadow-card hover:shadow-card-hover transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge 
                        variant={
                          drill.status === "Active" ? "default" : 
                          drill.status === "Scheduled" ? "secondary" : 
                          drill.status === "Coming Soon" ? "outline" : "outline"
                        }
                      >
                        {drill.status}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {drill.type}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`bg-${drill.color}-100 p-3 rounded-lg`}>
                        <drill.icon className={`h-6 w-6 text-${drill.color}-600`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{drill.title}</CardTitle>
                        <div className="text-sm text-muted-foreground">
                          {drill.difficulty} • {drill.duration}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {drill.description}
                    </p>
                    
                    <div className="rounded-lg overflow-hidden mb-4">
                      <img 
                        src={virtualDrillsImage} 
                        alt={drill.title}
                        className="w-full h-32 object-cover"
                      />
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{drill.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4" />
                          <span>{drill.participants}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <AlertTriangle className="h-4 w-4" />
                          <span>{drill.difficulty}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Last: {drill.lastConducted}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Objectives:</h4>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {drill.objectives.slice(0, 2).map((objective, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <CheckCircle className="h-3 w-3 mt-0.5 text-green-500 flex-shrink-0" />
                              <span>{objective}</span>
                            </li>
                          ))}
                          {drill.objectives.length > 2 && (
                            <li className="text-xs text-muted-foreground">
                              +{drill.objectives.length - 2} more objectives
                            </li>
                          )}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2">Drill Steps:</h4>
                        <div className="text-xs text-muted-foreground space-y-1">
                          {drill.steps.slice(0, 3).map((step, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <span className="bg-primary/20 text-primary rounded-full w-4 h-4 text-xs flex items-center justify-center">
                                {index + 1}
                              </span>
                              <span>{step}</span>
                            </div>
                          ))}
                          {drill.steps.length > 3 && (
                            <div className="text-xs text-muted-foreground ml-6">
                              +{drill.steps.length - 3} more steps
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button 
                          className="flex-1" 
                          disabled={drill.status === "Scheduled" || drill.status === "Coming Soon"}
                          onClick={() => {
                            setActiveDrill(drill.id);
                            setIsRunning(true);
                            setDrillProgress(0);
                          }}
                        >
                          <Play className="h-4 w-4 mr-2" />
                          Start Drill
                        </Button>
                        <Button variant="outline" size="icon">
                          <RotateCcw className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="categories" className="mt-8">
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {drillTypes.map((type, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className={`bg-${type.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <type.icon className={`h-8 w-8 text-${type.color}-600`} />
                    </div>
                    <h3 className="font-semibold mb-2">{type.name}</h3>
                    <div className="text-2xl font-bold text-primary mb-1">{type.count}</div>
                    <div className="text-sm text-muted-foreground">Drills Available</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recent" className="mt-8">
            <div className="grid gap-4">
              {recentDrills.map((drill, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Shield className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{drill.name}</h3>
                          <div className="text-sm text-muted-foreground">
                            {drill.participants} participants • {drill.time}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">{drill.score}%</div>
                        <div className="text-sm text-muted-foreground">Success Rate</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Active Drill Progress */}
        {activeDrill && isRunning && (
          <Card className="mt-8 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Drill in Progress</h3>
                <p className="text-muted-foreground">
                  {drillScenarios.find(d => d.id === activeDrill)?.title}
                </p>
              </div>
              <Progress value={drillProgress} className="h-4 mb-4" />
              <div className="flex justify-center space-x-4">
                <Button 
                  variant="outline" 
                  onClick={() => setIsRunning(false)}
                >
                  <Pause className="h-4 w-4 mr-2" />
                  Pause
                </Button>
                <Button 
                  variant="destructive" 
                  onClick={() => {
                    setActiveDrill(null);
                    setIsRunning(false);
                    setDrillProgress(0);
                  }}
                >
                  Stop Drill
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
        
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Shield className="h-16 w-16 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-4">Drill Performance Analytics</h3>
              <p className="text-muted-foreground mb-6">
                Track your progress and identify areas for improvement with detailed analytics 
                and performance metrics for each drill type.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">87%</div>
                  <div className="text-sm text-muted-foreground">Average Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">3.2 min</div>
                  <div className="text-sm text-muted-foreground">Average Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">15,647</div>
                  <div className="text-sm text-muted-foreground">Total Participants</div>
                </div>
              </div>
              <Button>
                <Target className="h-4 w-4 mr-2" />
                View Analytics Dashboard
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VirtualDrills;