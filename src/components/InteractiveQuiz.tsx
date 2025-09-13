import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  Trophy,
  RotateCcw,
  ArrowRight,
  Star
} from "lucide-react";
import { toast } from "sonner";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
}

const InteractiveQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);

  const questions: Question[] = [
    {
      id: 1,
      question: "What is the first thing you should do during an earthquake?",
      options: ["Run outside immediately", "Drop, Cover, and Hold On", "Stand in a doorway", "Call for help"],
      correctAnswer: 1,
      explanation: "Drop, Cover, and Hold On is the recommended immediate response to earthquake shaking.",
      difficulty: 'easy',
      points: 10
    },
    {
      id: 2,
      question: "How many seconds of earthquake warning can early warning systems typically provide?",
      options: ["5-10 seconds", "10-60 seconds", "1-2 minutes", "5-10 minutes"],
      correctAnswer: 1,
      explanation: "Earthquake early warning systems can typically provide 10-60 seconds of warning before strong shaking arrives.",
      difficulty: 'medium',
      points: 15
    },
    {
      id: 3,
      question: "What should be included in a family emergency kit for flood preparedness?",
      options: ["Only food and water", "Important documents in waterproof container", "Electronics and gadgets", "Heavy furniture"],
      correctAnswer: 1,
      explanation: "Important documents should be stored in waterproof containers as part of flood preparedness.",
      difficulty: 'medium',
      points: 15
    },
    {
      id: 4,
      question: "During a fire emergency in a building, you should:",
      options: ["Use elevators for quick escape", "Stay low and crawl under smoke", "Open all doors to ventilate", "Wait for rescue in your room"],
      correctAnswer: 1,
      explanation: "Staying low and crawling under smoke helps avoid inhaling toxic gases that rise to the ceiling.",
      difficulty: 'hard',
      points: 20
    },
    {
      id: 5,
      question: "What wind speed defines a Super Cyclonic Storm?",
      options: ["120-150 km/h", "150-180 km/h", "180-200 km/h", "Above 220 km/h"],
      correctAnswer: 3,
      explanation: "A Super Cyclonic Storm has sustained wind speeds above 220 km/h.",
      difficulty: 'hard',
      points: 20
    }
  ];

  useEffect(() => {
    if (quizStarted && !answered && !quizComplete && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !answered) {
      handleTimeUp();
    }
  }, [timeLeft, quizStarted, answered, quizComplete]);

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(30);
    setQuizComplete(false);
    setUserAnswers(new Array(questions.length).fill(null));
  };

  const handleAnswer = (answerIndex: number) => {
    if (answered) return;
    
    setSelectedAnswer(answerIndex);
    setAnswered(true);
    
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setUserAnswers(newAnswers);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      const points = questions[currentQuestion].points;
      setScore(score + points);
      toast.success(`Correct! +${points} points`, {
        description: "Well done! Moving to next question."
      });
    } else {
      toast.error("Incorrect answer", {
        description: "Don't worry, keep learning!"
      });
    }
  };

  const handleTimeUp = () => {
    if (!answered) {
      setAnswered(true);
      const newAnswers = [...userAnswers];
      newAnswers[currentQuestion] = null;
      setUserAnswers(newAnswers);
      toast.warning("Time's up!", {
        description: "Moving to next question."
      });
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setAnswered(false);
      setTimeLeft(30);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setScore(0);
    setTimeLeft(30);
    setQuizComplete(false);
    setUserAnswers([]);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.reduce((sum, q) => sum + q.points, 0)) * 100;
    if (percentage >= 80) return { message: "Excellent! You're well-prepared!", icon: Trophy, color: "text-warning" };
    if (percentage >= 60) return { message: "Good job! Keep learning!", icon: Star, color: "text-primary" };
    return { message: "Keep practicing to improve!", icon: RotateCcw, color: "text-muted-foreground" };
  };

  if (!quizStarted) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-foreground mb-4">
              Disaster Preparedness Quiz
            </CardTitle>
            <p className="text-muted-foreground text-lg">
              Test your knowledge on earthquake, flood, fire, and cyclone safety protocols
            </p>
          </CardHeader>
          
          <CardContent className="text-center space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="font-semibold text-foreground">Questions</h4>
                <p className="text-2xl font-bold text-primary">{questions.length}</p>
              </div>
              <div className="bg-secondary/10 p-4 rounded-lg">
                <h4 className="font-semibold text-foreground">Time per Question</h4>
                <p className="text-2xl font-bold text-secondary">30s</p>
              </div>
              <div className="bg-warning/10 p-4 rounded-lg">
                <h4 className="font-semibold text-foreground">Max Points</h4>
                <p className="text-2xl font-bold text-warning">
                  {questions.reduce((sum, q) => sum + q.points, 0)}
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-semibold text-foreground">Quiz Topics:</h5>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline">Earthquake Safety</Badge>
                <Badge variant="outline">Flood Management</Badge>
                <Badge variant="outline">Fire Safety</Badge>
                <Badge variant="outline">Cyclone Preparedness</Badge>
              </div>
            </div>
            
            <Button onClick={startQuiz} size="lg" className="mt-6">
              <Trophy className="h-5 w-5 mr-2" />
              Start Quiz
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (quizComplete) {
    const scoreData = getScoreMessage();
    const ScoreIcon = scoreData.icon;
    
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <ScoreIcon className={`h-10 w-10 ${scoreData.color}`} />
            </div>
            <CardTitle className="text-3xl font-bold text-foreground mb-2">
              Quiz Complete!
            </CardTitle>
            <p className="text-lg text-muted-foreground">{scoreData.message}</p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{score}</div>
              <div className="text-muted-foreground">out of {questions.reduce((sum, q) => sum + q.points, 0)} points</div>
              <Progress 
                value={(score / questions.reduce((sum, q) => sum + q.points, 0)) * 100} 
                className="mt-4"
              />
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Review Your Answers:</h4>
              {questions.map((question, index) => (
                <div key={question.id} className="border rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    {userAnswers[index] === question.correctAnswer ? (
                      <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                    ) : (
                      <XCircle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{question.question}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Your answer: {userAnswers[index] !== null ? question.options[userAnswers[index]!] : "No answer"}
                      </p>
                      <p className="text-sm text-success mt-1">
                        Correct answer: {question.options[question.correctAnswer]}
                      </p>
                      {userAnswers[index] !== question.correctAnswer && (
                        <p className="text-sm text-muted-foreground mt-2 italic">
                          {question.explanation}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button onClick={resetQuiz} variant="outline">
                <RotateCcw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
              <Button onClick={() => setQuizStarted(false)}>
                <Trophy className="h-4 w-4 mr-2" />
                New Quiz
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <Badge variant="outline">
              Question {currentQuestion + 1} of {questions.length}
            </Badge>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className={`font-mono ${timeLeft <= 10 ? 'text-destructive' : 'text-foreground'}`}>
                {timeLeft}s
              </span>
            </div>
          </div>
          
          <Progress value={progress} className="mb-4" />
          
          <div className="flex items-center justify-between">
            <Badge className={
              question.difficulty === 'easy' ? 'bg-success text-success-foreground' :
              question.difficulty === 'medium' ? 'bg-warning text-warning-foreground' :
              'bg-destructive text-destructive-foreground'
            }>
              {question.difficulty.toUpperCase()}
            </Badge>
            <span className="text-sm text-muted-foreground">{question.points} points</span>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground leading-relaxed">
            {question.question}
          </h3>
          
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className={`w-full text-left justify-start h-auto p-4 whitespace-normal ${
                  selectedAnswer === index 
                    ? answered 
                      ? index === question.correctAnswer 
                        ? 'border-success bg-success/10 text-success-foreground'
                        : 'border-destructive bg-destructive/10 text-destructive-foreground'
                      : 'border-primary bg-primary/10'
                    : answered && index === question.correctAnswer
                      ? 'border-success bg-success/10 text-success-foreground'
                      : ''
                }`}
                onClick={() => handleAnswer(index)}
                disabled={answered}
              >
                <span className="mr-3 font-mono">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
                {answered && selectedAnswer === index && (
                  <div className="ml-auto">
                    {index === question.correctAnswer ? (
                      <CheckCircle className="h-5 w-5 text-success" />
                    ) : (
                      <XCircle className="h-5 w-5 text-destructive" />
                    )}
                  </div>
                )}
              </Button>
            ))}
          </div>
          
          {answered && (
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Explanation:</strong> {question.explanation}
              </p>
            </div>
          )}
          
          {answered && (
            <div className="flex justify-between items-center">
              <div className="text-sm text-muted-foreground">
                Score: <span className="font-semibold text-foreground">{score}</span> points
              </div>
              <Button onClick={nextQuestion}>
                {currentQuestion < questions.length - 1 ? (
                  <>
                    Next Question
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </>
                ) : (
                  <>
                    Finish Quiz
                    <Trophy className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveQuiz;