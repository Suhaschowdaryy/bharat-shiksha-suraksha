import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Play, 
  CheckCircle, 
  Clock,
  Star,
  Trophy,
  AlertTriangle,
  Waves,
  Flame,
  Wind
} from "lucide-react";

interface Module {
  id: string;
  title: string;
  description: string;
  icon: any;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  progress: number;
  completed: boolean;
  lessons: number;
  type: 'earthquake' | 'flood' | 'fire' | 'cyclone';
}

const LearningModules = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [userProgress, setUserProgress] = useState({
    totalPoints: 1250,
    level: 3,
    achievements: ['First Steps', 'Quiz Master', 'Safety Expert']
  });

  const modules: Module[] = [
    {
      id: 'earthquake',
      title: 'Earthquake Safety Protocols',
      description: 'Learn essential earthquake preparedness and response techniques',
      icon: AlertTriangle,
      difficulty: 'Beginner',
      duration: '45 min',
      progress: 85,
      completed: false,
      lessons: 8,
      type: 'earthquake'
    },
    {
      id: 'flood',
      title: 'Flood Management & Safety',
      description: 'Understanding flood risks and emergency response procedures',
      icon: Waves,
      difficulty: 'Intermediate',
      duration: '60 min',
      progress: 60,
      completed: false,
      lessons: 10,
      type: 'flood'
    },
    {
      id: 'fire',
      title: 'Fire Safety & Prevention',
      description: 'Fire prevention, evacuation procedures, and emergency protocols',
      icon: Flame,
      difficulty: 'Beginner',
      duration: '30 min',
      progress: 100,
      completed: true,
      lessons: 6,
      type: 'fire'
    },
    {
      id: 'cyclone',
      title: 'Cyclone Preparedness',
      description: 'Cyclone warning systems and protective measures',
      icon: Wind,
      difficulty: 'Advanced',
      duration: '75 min',
      progress: 25,
      completed: false,
      lessons: 12,
      type: 'cyclone'
    }
  ];

  const startModule = (moduleId: string) => {
    setActiveModule(moduleId);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-success text-success-foreground';
      case 'Intermediate': return 'bg-warning text-warning-foreground';
      case 'Advanced': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* User Progress Dashboard */}
      <div className="mb-8">
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Learning Dashboard</h2>
                <p className="text-muted-foreground">Track your disaster preparedness journey</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-5 w-5 text-warning" />
                  <span className="text-2xl font-bold text-foreground">{userProgress.totalPoints}</span>
                  <span className="text-muted-foreground">points</span>
                </div>
                <Badge variant="secondary">Level {userProgress.level}</Badge>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Achievements</p>
                <div className="flex flex-wrap gap-1">
                  {userProgress.achievements.map((achievement, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      <Star className="h-3 w-3 mr-1" />
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-2">Modules Completed</p>
                <div className="text-2xl font-bold text-foreground">
                  {modules.filter(m => m.completed).length}/{modules.length}
                </div>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-2">Overall Progress</p>
                <Progress 
                  value={modules.reduce((sum, m) => sum + m.progress, 0) / modules.length} 
                  className="mt-2"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Learning Modules Grid */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-6">Available Learning Modules</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module) => (
            <Card key={module.id} className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <module.icon className="h-6 w-6 text-primary" />
                  </div>
                  {module.completed && (
                    <CheckCircle className="h-5 w-5 text-success" />
                  )}
                </div>
                <CardTitle className="text-lg">{module.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{module.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <Badge className={getDifficultyColor(module.difficulty)}>
                      {module.difficulty}
                    </Badge>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {module.duration}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="text-foreground">{module.progress}%</span>
                    </div>
                    <Progress value={module.progress} />
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{module.lessons} lessons</span>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      Interactive
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => startModule(module.id)}
                    className="w-full"
                    variant={module.completed ? "secondary" : "default"}
                  >
                    <Play className="h-4 w-4 mr-2" />
                    {module.completed ? 'Review' : module.progress > 0 ? 'Continue' : 'Start'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Daily Challenge</h4>
            <p className="text-sm text-muted-foreground mb-4">Test your knowledge with today's quiz</p>
            <Button variant="outline" size="sm">Start Challenge</Button>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="h-6 w-6 text-secondary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Virtual Drill</h4>
            <p className="text-sm text-muted-foreground mb-4">Practice emergency scenarios</p>
            <Button variant="outline" size="sm">Join Drill</Button>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="bg-warning/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-6 w-6 text-warning" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Study Notes</h4>
            <p className="text-sm text-muted-foreground mb-4">Review your saved content</p>
            <Button variant="outline" size="sm">View Notes</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LearningModules;