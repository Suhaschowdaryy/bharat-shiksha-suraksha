import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Clock, 
  Award, 
  Users,
  CheckCircle,
  PlayCircle,
  FileText,
  Download,
  Star,
  Globe,
  Shield,
  Zap,
  Mountain,
  Waves,
  Flame,
  Wind
} from "lucide-react";
import learningModulesImage from "@/assets/learning-modules.jpg";

const LearningModules = () => {
  const modules = [
    {
      id: 1,
      title: "Earthquake Preparedness",
      description: "Learn essential earthquake safety protocols and response techniques",
      duration: "45 minutes",
      difficulty: "Beginner",
      completionRate: 78,
      enrolled: 2847,
      rating: 4.8,
      lessons: 12,
      status: "Available",
      category: "Natural Disasters",
      icon: Mountain,
      color: "amber",
      topics: ["Drop, Cover, Hold technique", "Building safety assessment", "Emergency kit preparation", "Post-earthquake response"]
    },
    {
      id: 2,
      title: "Flood Management & Safety",
      description: "Understanding flood risks and implementing effective safety measures",
      duration: "60 minutes",
      difficulty: "Intermediate",
      completionRate: 65,
      enrolled: 1923,
      rating: 4.6,
      lessons: 15,
      status: "Available",
      category: "Water Emergencies",
      icon: Waves,
      color: "blue",
      topics: ["Flood risk assessment", "Evacuation planning", "Water safety protocols", "Recovery procedures"]
    },
    {
      id: 3,
      title: "Fire Safety & Prevention",
      description: "Comprehensive fire safety protocols for educational institutions",
      duration: "50 minutes",
      difficulty: "Beginner",
      completionRate: 82,
      enrolled: 3124,
      rating: 4.9,
      lessons: 10,
      status: "Available",
      category: "Fire Safety",
      icon: Flame,
      color: "red",
      topics: ["Fire triangle understanding", "Evacuation procedures", "Fire extinguisher usage", "Smoke safety protocols"]
    },
    {
      id: 4,
      title: "Cyclone & Storm Preparedness",
      description: "Coastal disaster management and storm safety procedures",
      duration: "55 minutes",
      difficulty: "Advanced",
      completionRate: 45,
      enrolled: 1456,
      rating: 4.7,
      lessons: 14,
      status: "Available",
      category: "Weather Emergencies",
      icon: Wind,
      color: "slate",
      topics: ["Storm tracking systems", "Shelter preparation", "Communication protocols", "Recovery planning"]
    },
    {
      id: 5,
      title: "First Aid & Medical Response",
      description: "Essential first aid skills for emergency situations",
      duration: "40 minutes",
      difficulty: "Beginner",
      completionRate: 89,
      enrolled: 4521,
      rating: 4.9,
      lessons: 8,
      status: "Available",
      category: "Medical Emergency",
      icon: Shield,
      color: "green",
      topics: ["Basic life support", "Wound care", "Emergency assessment", "Medical kit usage"]
    },
    {
      id: 6,
      title: "Emergency Communication",
      description: "Effective communication during crisis situations",
      duration: "35 minutes",
      difficulty: "Intermediate",
      completionRate: 71,
      enrolled: 2896,
      rating: 4.7,
      lessons: 9,
      status: "Available",
      category: "Communication",
      icon: Zap,
      color: "yellow",
      topics: ["Crisis communication", "Alert systems", "Social media safety", "Information verification"]
    }
  ];

  const categories = [
    { name: "All Modules", count: modules.length },
    { name: "Natural Disasters", count: 2 },
    { name: "Fire Safety", count: 1 },
    { name: "Water Emergencies", count: 1 },
    { name: "Weather Emergencies", count: 1 },
    { name: "Medical Emergency", count: 1 }
  ];

  const learningStats = [
    { label: "Total Modules", value: "15+", icon: BookOpen },
    { label: "Active Learners", value: "12,847", icon: Users },
    { label: "Completion Rate", value: "76%", icon: Award },
    { label: "Languages", value: "12", icon: Globe }
  ];

  return (
    <section className="py-16 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Interactive Learning Modules
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive disaster management education designed for Indian schools and colleges, 
            featuring region-specific content and interactive learning experiences.
          </p>
        </div>

        {/* Learning Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {learningStats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full grid-cols-6">
            {categories.map((category, index) => (
              <TabsTrigger key={index} value={category.name.toLowerCase().replace(' ', '-')}>
                {category.name} ({category.count})
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {modules.map((module) => (
                <Card key={module.id} className="shadow-card hover:shadow-card-hover transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant={module.status === "Available" ? "default" : "secondary"}>
                        {module.status}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{module.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`bg-${module.color}-100 p-3 rounded-lg`}>
                        <module.icon className={`h-6 w-6 text-${module.color}-600`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{module.title}</CardTitle>
                        <Badge variant="outline" className="text-xs mt-1">
                          {module.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {module.description}
                    </p>
                    
                    <div className="rounded-lg overflow-hidden mb-4">
                      <img 
                        src={learningModulesImage} 
                        alt={module.title}
                        className="w-full h-32 object-cover"
                      />
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{module.duration}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <FileText className="h-4 w-4" />
                          <span>{module.lessons} lessons</span>
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center text-sm">
                        <span>Difficulty: {module.difficulty}</span>
                        <span className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{module.enrolled.toLocaleString()}</span>
                        </span>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Completion Rate</span>
                          <span className="text-sm">{module.completionRate}%</span>
                        </div>
                        <Progress value={module.completionRate} className="h-2" />
                      </div>

                      {/* Module Topics */}
                      <div>
                        <div className="text-sm font-medium mb-2">Key Topics:</div>
                        <div className="flex flex-wrap gap-1">
                          {module.topics.slice(0, 2).map((topic, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                          {module.topics.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{module.topics.length - 2} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button 
                          className="flex-1" 
                          disabled={module.status !== "Available"}
                        >
                          <PlayCircle className="h-4 w-4 mr-2" />
                          Start Learning
                        </Button>
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Feature Highlights */}
        <Card className="mt-12">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-6">Learning Platform Features</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <CheckCircle className="h-12 w-12 mx-auto mb-3 text-green-500" />
                <h4 className="font-semibold mb-2">Interactive Content</h4>
                <p className="text-sm text-muted-foreground">
                  Engaging multimedia lessons with videos, simulations, and interactive exercises
                </p>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 mx-auto mb-3 text-yellow-500" />
                <h4 className="font-semibold mb-2">Progress Tracking</h4>
                <p className="text-sm text-muted-foreground">
                  Comprehensive analytics and achievements to monitor learning progress
                </p>
              </div>
              <div className="text-center">
                <Globe className="h-12 w-12 mx-auto mb-3 text-blue-500" />
                <h4 className="font-semibold mb-2">Regional Content</h4>
                <p className="text-sm text-muted-foreground">
                  Localized content covering region-specific hazards and cultural considerations
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LearningModules;