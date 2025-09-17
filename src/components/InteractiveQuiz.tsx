import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  Award, 
  Brain,
  RotateCcw,
  ArrowRight,
  Trophy,
  Target,
  Users,
  Zap,
  BookOpen,
  Star
} from "lucide-react";

const InteractiveQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [activeQuizCategory, setActiveQuizCategory] = useState("earthquake");

  const quizCategories = [
    {
      id: "earthquake",
      name: "Earthquake Safety",
      description: "Test your knowledge of earthquake preparedness and response",
      icon: Target,
      color: "amber",
      questions: 8,
      difficulty: "Intermediate"
    },
    {
      id: "fire",
      name: "Fire Safety",
      description: "Essential fire safety knowledge and evacuation procedures",
      icon: Zap,
      color: "red",
      questions: 6,
      difficulty: "Beginner"
    },
    {
      id: "flood",
      name: "Flood Preparedness",
      description: "Water safety and flood response protocols",
      icon: Trophy,
      color: "blue",
      questions: 7,
      difficulty: "Intermediate"
    },
    {
      id: "general",
      name: "General Emergency",
      description: "Comprehensive disaster preparedness knowledge",
      icon: Brain,
      color: "green",
      questions: 10,
      difficulty: "Advanced"
    }
  ];

  const quizStats = [
    { label: "Total Quizzes", value: "25+", icon: BookOpen },
    { label: "Participants", value: "8,547", icon: Users },
    { label: "Average Score", value: "78%", icon: Target },
    { label: "Completion Rate", value: "94%", icon: Trophy }
  ];

  const quizData = [
    {
      question: "What is the first action you should take during an earthquake in a building?",
      options: [
        "Run outside immediately",
        "Stand in a doorway",
        "Drop, Cover, and Hold On",
        "Call emergency services"
      ],
      correct: 2,
      explanation: "Drop, Cover, and Hold On is the recommended immediate response. Drop to hands and knees, take cover under a desk or table, and hold on until shaking stops.",
      category: "earthquake",
      difficulty: "intermediate"
    },
    {
      question: "Which of these items should NOT be included in an emergency kit?",
      options: [
        "Flashlight and batteries",
        "First aid supplies",
        "Candles and matches",
        "Emergency water supply"
      ],
      correct: 2,
      explanation: "Candles and matches pose fire hazards, especially after disasters. Use flashlights or battery-powered lights instead.",
      category: "general",
      difficulty: "beginner"
    },
    {
      question: "During a flood, what is the minimum depth of moving water that can knock you down?",
      options: [
        "12 inches (30 cm)",
        "6 inches (15 cm)",
        "18 inches (45 cm)",
        "24 inches (60 cm)"
      ],
      correct: 1,
      explanation: "Just 6 inches of moving water can knock you down. It takes only 12 inches of water to carry away a vehicle.",
      category: "flood",
      difficulty: "intermediate"
    },
    {
      question: "What should you do if you smell gas after an earthquake?",
      options: [
        "Turn on lights to see better",
        "Use a cell phone to call for help immediately",
        "Turn off the gas valve and evacuate",
        "Open all windows and doors"
      ],
      correct: 2,
      explanation: "Turn off the gas valve if you can do so safely, then evacuate immediately. Avoid creating sparks from electrical devices or flames.",
      category: "earthquake",
      difficulty: "advanced"
    },
    {
      question: "In case of a fire, what is the correct way to escape through smoke?",
      options: [
        "Walk upright and move quickly",
        "Crawl low under the smoke",
        "Cover your face with a wet cloth and run",
        "Hold your breath and move fast"
      ],
      correct: 1,
      explanation: "Crawl low under smoke to avoid toxic gases that rise. Smoke and toxic gases kill more people than flames in fires.",
      category: "fire",
      difficulty: "beginner"
    },
    {
      question: "How often should fire drills be conducted in schools?",
      options: [
        "Once per year",
        "Twice per year",
        "Monthly",
        "Weekly"
      ],
      correct: 2,
      explanation: "Fire drills should be conducted monthly to ensure all students and staff are familiar with evacuation procedures.",
      category: "fire",
      difficulty: "beginner"
    },
    {
      question: "What is the 'Triangle of Life' theory in earthquake safety?",
      options: [
        "A widely accepted safety protocol",
        "A controversial and NOT recommended method",
        "The official Indian earthquake response guideline",
        "A new emergency app"
      ],
      correct: 1,
      explanation: "The 'Triangle of Life' theory is NOT recommended by safety experts. Official guidelines recommend 'Drop, Cover, and Hold On' instead.",
      category: "earthquake",
      difficulty: "advanced"
    },
    {
      question: "During a cyclone warning, when should you evacuate?",
      options: [
        "When the storm arrives",
        "24 hours before predicted landfall",
        "As soon as authorities issue evacuation orders",
        "Only if your house is damaged"
      ],
      correct: 2,
      explanation: "Evacuate immediately when authorities issue evacuation orders. Don't wait for the storm to intensify or cause damage.",
      category: "general",
      difficulty: "intermediate"
    }
  ];

  const handleSubmitQuiz = () => {
    const finalScore = selectedAnswers.reduce((acc, answer, index) => {
      return acc + (answer === quizData[index].correct ? 1 : 0);
    }, 0);
    setScore((finalScore / quizData.length) * 100);
    setShowResults(true);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setScore(0);
  };

  return (
    <section className="py-16 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Interactive Knowledge Assessment
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Test and improve your disaster preparedness knowledge through interactive quizzes 
            designed for different skill levels and emergency scenarios.
          </p>
        </div>

        {/* Quiz Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {quizStats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="categories" className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="categories">Quiz Categories</TabsTrigger>
            <TabsTrigger value="practice">Practice Quiz</TabsTrigger>
          </TabsList>

          <TabsContent value="categories" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quizCategories.map((category) => (
                <Card key={category.id} className="shadow-card hover:shadow-card-hover transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className={`bg-${category.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <category.icon className={`h-8 w-8 text-${category.color}-600`} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                    <div className="flex justify-between items-center mb-4 text-sm">
                      <span>{category.questions} Questions</span>
                      <Badge variant="outline">{category.difficulty}</Badge>
                    </div>
                    <Button 
                      className="w-full" 
                      onClick={() => {
                        setActiveQuizCategory(category.id);
                        // Switch to practice tab when starting quiz
                        (document.querySelector('[value="practice"]') as HTMLElement)?.click();
                      }}
                    >
                      Start Quiz
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="practice" className="mt-8">
            <div className="max-w-4xl mx-auto">
              {!showResults ? (
                <Card className="shadow-card">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Brain className="h-6 w-6 text-primary" />
                        <span className="text-lg font-semibold">
                          Disaster Preparedness Quiz
                        </span>
                      </div>
                      <Badge variant="outline">
                        Question {currentQuestion + 1} of {quizData.length}
                      </Badge>
                    </div>
                    <Progress 
                      value={(currentQuestion / quizData.length) * 100} 
                      className="h-2 mb-4" 
                    />
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {Math.ceil(quizData.length * 1.5)} min
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {quizData[currentQuestion].category}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {quizData[currentQuestion].difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-foreground">
                        {quizData[currentQuestion].question}
                      </h3>
                      
                      <div className="grid gap-3">
                        {quizData[currentQuestion].options.map((option, index) => (
                          <Button
                            key={index}
                            variant={selectedAnswers[currentQuestion] === index ? "default" : "outline"}
                            className="justify-start text-left h-auto p-4"
                            onClick={() => {
                              const newAnswers = [...selectedAnswers];
                              newAnswers[currentQuestion] = index;
                              setSelectedAnswers(newAnswers);
                            }}
                          >
                            <span className="mr-3 font-semibold">
                              {String.fromCharCode(65 + index)}.
                            </span>
                            {option}
                          </Button>
                        ))}
                      </div>
                      
                      <div className="flex justify-between pt-6">
                        <Button 
                          variant="outline"
                          onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                          disabled={currentQuestion === 0}
                        >
                          Previous
                        </Button>
                        
                        {currentQuestion === quizData.length - 1 ? (
                          <Button 
                            onClick={handleSubmitQuiz}
                            disabled={selectedAnswers[currentQuestion] === undefined}
                          >
                            Submit Quiz
                            <Award className="ml-2 h-4 w-4" />
                          </Button>
                        ) : (
                          <Button 
                            onClick={() => setCurrentQuestion(currentQuestion + 1)}
                            disabled={selectedAnswers[currentQuestion] === undefined}
                          >
                            Next
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="shadow-card">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      {score >= 80 ? (
                        <Award className="h-16 w-16 text-yellow-500" />
                      ) : score >= 60 ? (
                        <CheckCircle className="h-16 w-16 text-green-500" />
                      ) : (
                        <XCircle className="h-16 w-16 text-red-500" />
                      )}
                    </div>
                    <CardTitle className="text-3xl mb-2">Quiz Complete!</CardTitle>
                    <p className="text-xl text-muted-foreground">
                      Your Score: {score}% ({selectedAnswers.filter((answer, index) => answer === quizData[index].correct).length}/{quizData.length})
                    </p>
                    <div className="flex justify-center mt-4">
                      {score >= 80 && <Badge className="bg-yellow-500">🏆 Excellence Award</Badge>}
                      {score >= 60 && score < 80 && <Badge className="bg-green-500">✅ Well Done</Badge>}
                      {score < 60 && <Badge variant="secondary">📚 Keep Learning</Badge>}
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-6">
                      <div className="text-center">
                        <Progress value={score} className="h-4 mb-4" />
                        <p className="text-muted-foreground">
                          {score >= 80 ? "Excellent! You're well-prepared for emergencies." :
                           score >= 60 ? "Good job! Consider reviewing some topics." :
                           "Keep learning! Practice makes perfect."}
                        </p>
                      </div>
                      
                      <div className="border-t pt-6">
                        <h4 className="font-semibold mb-4">Review Your Answers:</h4>
                        <div className="space-y-4">
                          {quizData.map((question, index) => (
                            <div key={index} className="border border-border rounded-lg p-4">
                              <div className="flex items-start space-x-3">
                                {selectedAnswers[index] === question.correct ? (
                                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                ) : (
                                  <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                                )}
                                <div className="flex-1">
                                  <p className="font-medium mb-2">{question.question}</p>
                                  <p className="text-sm text-muted-foreground mb-2">
                                    Your answer: {question.options[selectedAnswers[index]]}
                                  </p>
                                  {selectedAnswers[index] !== question.correct && (
                                    <p className="text-sm text-green-600 mb-2">
                                      Correct answer: {question.options[question.correct]}
                                    </p>
                                  )}
                                  <p className="text-sm text-muted-foreground">
                                    {question.explanation}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-center space-x-4 pt-6">
                        <Button onClick={handleRestartQuiz} variant="outline">
                          <RotateCcw className="mr-2 h-4 w-4" />
                          Retake Quiz
                        </Button>
                        <Button>
                          <BookOpen className="mr-2 h-4 w-4" />
                          Continue Learning
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default InteractiveQuiz;