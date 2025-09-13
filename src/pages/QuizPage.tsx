import Navigation from "@/components/Navigation";
import InteractiveQuiz from "@/components/InteractiveQuiz";
import Footer from "@/components/Footer";

const QuizPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <InteractiveQuiz />
      <Footer />
    </div>
  );
};

export default QuizPage;