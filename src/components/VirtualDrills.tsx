import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle,
  AlertTriangle,
  Users,
  Clock,
  MapPin,
  Shield,
  Bell,
  ArrowRight,
  Timer
} from "lucide-react";
import { toast } from "sonner";

interface DrillStep {
  id: number;
  instruction: string;
  timeLimit: number;
  type: 'action' | 'decision' | 'evacuation';
  options?: string[];
  correctAction?: number;
  points: number;
}

interface Drill {
  id: string;
  title: string;
  description: string;
  scenario: string;
  difficulty: 'Basic' | 'Intermediate' | 'Advanced';
  duration: string;
  participants: number;
  type: 'earthquake' | 'fire' | 'flood' | 'general';
  steps: DrillStep[];
}

const VirtualDrills = () => {
  const [activeDrill, setActiveDrill] = useState<Drill | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [drillStarted, setDrillStarted] = useState(false);
  const [drillPaused, setDrillPaused] = useState(false);
  const [stepTimeLeft, setStepTimeLeft] = useState(0);
  const [score, setScore] = useState(0);
  const [drillComplete, setDrillComplete] = useState(false);
  const [participantAnswers, setParticipantAnswers] = useState<number[]>([]);

  const drills: Drill[] = [
    {
      id: 'earthquake-basic',
      title: 'Earthquake Response Drill',
      description: 'Practice the Drop, Cover, and Hold On technique and evacuation procedures',
      scenario: 'You are in a classroom when sudden earthquake shaking begins. The building starts swaying.',
      difficulty: 'Basic',
      duration: '5 mins',
      participants: 156,
      type: 'earthquake',
      steps: [
        {
          id: 1,
          instruction: 'Earthquake shaking detected! What is your immediate response?',
          timeLimit: 10,
          type: 'decision',
          options: ['Run outside immediately', 'Drop to hands and knees', 'Stand in doorway', 'Get under a table'],
          correctAction: 1,
          points: 20
        },
        {
          id: 2,
          instruction: 'Good! Now take cover under your desk and hold on. Stay in position for 60 seconds.',
          timeLimit: 60,
          type: 'action',
          points: 30
        },
        {
          id: 3,
          instruction: 'Shaking has stopped. What should you do next?',
          timeLimit: 15,
          type: 'decision',
          options: ['Immediately evacuate', 'Check for injuries first', 'Wait for instructions', 'Take elevator'],
          correctAction: 1,
          points: 25
        },
        {
          id: 4,
          instruction: 'Begin evacuation. Walk quickly but do not run. Follow evacuation routes.',
          timeLimit: 120,
          type: 'evacuation',
          points: 25
        }
      ]
    },
    {
      id: 'fire-intermediate',
      title: 'Fire Emergency Evacuation',
      description: 'Navigate through a building fire scenario with smoke and blocked exits',
      scenario: 'Fire alarm sounds in your building. You smell smoke and see it coming from the hallway.',
      difficulty: 'Intermediate',
      duration: '8 mins',
      participants: 89,
      type: 'fire',
      steps: [
        {
          id: 1,
          instruction: 'Fire alarm is sounding and you smell smoke. What is your first action?',
          timeLimit: 8,
          type: 'decision',
          options: ['Open door to check hallway', 'Feel door for heat first', 'Call fire department', 'Gather belongings'],
          correctAction: 1,
          points: 25
        },
        {
          id: 2,
          instruction: 'Door feels cool. Open it slowly and check for smoke in hallway.',
          timeLimit: 15,
          type: 'action',
          points: 20
        },
        {
          id: 3,
          instruction: 'Hallway has light smoke. How should you proceed?',
          timeLimit: 10,
          type: 'decision',
          options: ['Walk normally', 'Stay low and crawl', 'Cover face and run', 'Go back inside'],
          correctAction: 1,
          points: 30
        },
        {
          id: 4,
          instruction: 'Crawl low under smoke toward nearest exit. Avoid elevators.',
          timeLimit: 90,
          type: 'evacuation',
          points: 25
        }
      ]
    },
    {
      id: 'flood-advanced',
      title: 'Flash Flood Response',
      description: 'React to sudden flooding with limited escape routes and rescue scenarios',
      scenario: 'Heavy rains have caused sudden flooding. Water is rising rapidly around your location.',
      difficulty: 'Advanced',
      duration: '12 mins',
      participants: 67,
      type: 'flood',
      steps: [
        {
          id: 1,
          instruction: 'Flash flood warning issued. Water is ankle-deep and rising. What do you do?',
          timeLimit: 12,
          type: 'decision',
          options: ['Drive through flood water', 'Move to higher ground immediately', 'Wait and see', 'Wade through water'],
          correctAction: 1,
          points: 30
        },
        {
          id: 2,
          instruction: 'Moving to second floor. Water is now knee-deep in ground floor.',
          timeLimit: 45,
          type: 'action',
          points: 25
        },
        {
          id: 3,
          instruction: 'You see someone trapped in rising water. What should you do?',
          timeLimit: 20,
          type: 'decision',
          options: ['Jump in to help', 'Throw rope or flotation device', 'Call for help only', 'Look for a boat'],
          correctAction: 1,
          points: 35
        },
        {
          id: 4,
          instruction: 'Emergency services contacted. Signal for help from safe location.',
          timeLimit: 60,
          type: 'action',
          points: 10
        }
      ]
    }
  ];

  useEffect(() => {
    if (drillStarted && !drillPaused && !drillComplete && stepTimeLeft > 0) {
      const timer = setTimeout(() => setStepTimeLeft(stepTimeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (stepTimeLeft === 0 && drillStarted && !drillComplete) {
      handleStepTimeout();
    }
  }, [stepTimeLeft, drillStarted, drillPaused, drillComplete]);

  const startDrill = (drill: Drill) => {
    setActiveDrill(drill);
    setDrillStarted(true);
    setCurrentStep(0);
    setScore(0);
    setDrillComplete(false);
    setParticipantAnswers([]);
    setStepTimeLeft(drill.steps[0].timeLimit);
    toast.success("Drill started!", {
      description: "Follow the instructions carefully."
    });
  };

  const handleStepAction = (actionIndex?: number) => {
    if (!activeDrill) return;
    
    const step = activeDrill.steps[currentStep];
    let earnedPoints = 0;
    
    if (step.type === 'decision' && actionIndex !== undefined) {
      const newAnswers = [...participantAnswers];
      newAnswers[currentStep] = actionIndex;
      setParticipantAnswers(newAnswers);
      
      if (actionIndex === step.correctAction) {
        earnedPoints = step.points;
        setScore(score + earnedPoints);
        toast.success(`Correct action! +${earnedPoints} points`);
      } else {
        toast.error("Incorrect action", {
          description: "Learn from this mistake and improve."
        });
      }
    } else {
      earnedPoints = step.points;
      setScore(score + earnedPoints);
      toast.success(`Step completed! +${earnedPoints} points`);
    }
    
    // Move to next step
    if (currentStep < activeDrill.steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setStepTimeLeft(activeDrill.steps[currentStep + 1].timeLimit);
    } else {
      setDrillComplete(true);
      toast.success("Drill completed!", {
        description: `Final score: ${score + earnedPoints} points`
      });
    }
  };

  const handleStepTimeout = () => {
    toast.warning("Time's up for this step!");
    if (!activeDrill) return;
    
    if (currentStep < activeDrill.steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setStepTimeLeft(activeDrill.steps[currentStep + 1].timeLimit);
    } else {
      setDrillComplete(true);
    }
  };

  const pauseDrill = () => {
    setDrillPaused(!drillPaused);
    toast.info(drillPaused ? "Drill resumed" : "Drill paused");
  };

  const resetDrill = () => {
    setActiveDrill(null);
    setDrillStarted(false);
    setCurrentStep(0);
    setScore(0);
    setDrillComplete(false);
    setDrillPaused(false);
    setParticipantAnswers([]);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Basic': return 'bg-success text-success-foreground';
      case 'Intermediate': return 'bg-warning text-warning-foreground';
      case 'Advanced': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const getScoreGrade = () => {
    if (!activeDrill) return 'F';
    const maxPoints = activeDrill.steps.reduce((sum, step) => sum + step.points, 0);
    const percentage = (score / maxPoints) * 100;
    
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B';
    if (percentage >= 60) return 'C';
    return 'F';
  };

  if (!activeDrill || !drillStarted) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Virtual Emergency Drills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practice emergency response scenarios in a safe, virtual environment. 
            Build muscle memory and decision-making skills for real emergencies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {drills.map((drill) => (
            <Card key={drill.id} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className={getDifficultyColor(drill.difficulty)}>
                    {drill.difficulty}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {drill.duration}
                  </div>
                </div>
                
                <CardTitle className="text-xl">{drill.title}</CardTitle>
                <p className="text-muted-foreground">{drill.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-foreground mb-1">Scenario:</p>
                  <p className="text-sm text-muted-foreground italic">{drill.scenario}</p>
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {drill.participants} participants
                  </div>
                  <div className="flex items-center gap-1">
                    <Timer className="h-4 w-4" />
                    {drill.steps.length} steps
                  </div>
                </div>
                
                <Button 
                  onClick={() => startDrill(drill)} 
                  className="w-full"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Start Drill
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (drillComplete) {
    const maxPoints = activeDrill.steps.reduce((sum, step) => sum + step.points, 0);
    const grade = getScoreGrade();
    
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold text-foreground mb-2">
              Drill Completed!
            </CardTitle>
            <p className="text-lg text-muted-foreground">
              {activeDrill.title}
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{score}</div>
              <div className="text-muted-foreground mb-4">out of {maxPoints} points</div>
              <Badge className="text-lg px-4 py-2">
                Grade: {grade}
              </Badge>
              <Progress value={(score / maxPoints) * 100} className="mt-4" />
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Performance Review:</h4>
              {activeDrill.steps.map((step, index) => (
                <div key={step.id} className="border rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-semibold text-primary">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{step.instruction}</p>
                      {step.type === 'decision' && step.options && (
                        <div className="mt-2">
                          <p className="text-sm text-muted-foreground">
                            Your choice: {participantAnswers[index] !== undefined 
                              ? step.options[participantAnswers[index]] 
                              : "No response"}
                          </p>
                          {step.correctAction !== undefined && (
                            <p className="text-sm text-success">
                              Correct: {step.options[step.correctAction]}
                            </p>
                          )}
                        </div>
                      )}
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm text-muted-foreground">
                          Points: {participantAnswers[index] === step.correctAction || step.type !== 'decision' ? step.points : 0}
                        </span>
                        {(participantAnswers[index] === step.correctAction || step.type !== 'decision') && (
                          <CheckCircle className="h-4 w-4 text-success" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button onClick={resetDrill} variant="outline">
                <RotateCcw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
              <Button onClick={() => { resetDrill(); }}>
                <Play className="h-4 w-4 mr-2" />
                New Drill
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Active drill view
  const step = activeDrill.steps[currentStep];
  const progress = ((currentStep + 1) / activeDrill.steps.length) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <Badge variant="outline">
              Step {currentStep + 1} of {activeDrill.steps.length}
            </Badge>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={pauseDrill}
              >
                {drillPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
              </Button>
              <div className="flex items-center gap-2">
                <Timer className="h-4 w-4 text-muted-foreground" />
                <span className={`font-mono ${stepTimeLeft <= 10 ? 'text-destructive' : 'text-foreground'}`}>
                  {Math.floor(stepTimeLeft / 60)}:{(stepTimeLeft % 60).toString().padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>
          
          <Progress value={progress} className="mb-4" />
          
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">{activeDrill.title}</h3>
            <span className="text-sm text-muted-foreground">Score: {score}</span>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-warning flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium text-foreground">{step.instruction}</p>
                {step.type === 'action' && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Perform this action and click "Action Completed" when done.
                  </p>
                )}
              </div>
            </div>
          </div>
          
          {step.type === 'decision' && step.options && (
            <div className="space-y-3">
              <p className="font-medium text-foreground">Choose your response:</p>
              {step.options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full text-left justify-start h-auto p-4 whitespace-normal"
                  onClick={() => handleStepAction(index)}
                  disabled={drillPaused}
                >
                  <span className="mr-3 font-mono">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </Button>
              ))}
            </div>
          )}
          
          {step.type === 'action' && (
            <div className="text-center">
              <Button 
                onClick={() => handleStepAction()}
                disabled={drillPaused}
                size="lg"
              >
                <CheckCircle className="h-5 w-5 mr-2" />
                Action Completed
              </Button>
            </div>
          )}
          
          {step.type === 'evacuation' && (
            <div className="text-center space-y-4">
              <div className="bg-primary/10 p-4 rounded-lg">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="font-medium text-foreground">Evacuation in Progress</p>
                <p className="text-sm text-muted-foreground">Follow evacuation procedures</p>
              </div>
              <Button 
                onClick={() => handleStepAction()}
                disabled={drillPaused}
                size="lg"
              >
                <Shield className="h-5 w-5 mr-2" />
                Reached Safety Zone
              </Button>
            </div>
          )}
          
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>Points available: {step.points}</span>
            <Button variant="ghost" size="sm" onClick={resetDrill}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Exit Drill
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VirtualDrills;