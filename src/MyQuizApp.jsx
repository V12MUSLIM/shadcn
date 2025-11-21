import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  LayoutDashboard,
  AlertCircle,
  Trophy,
  Timer,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuestions } from "./contexts/QuestionContext";

const optionLabels = ["A", "B", "C", "D"];

// --- Results Component (Internal) ---
const Results = ({ score, total, onRetry }) => {
  const percentage = (score / total) * 100;
  let message = "Keep practicing!";
  let color = "text-slate-400";

  if (percentage >= 80) {
    message = "Excellent! You're a master! 🌟";
    color = "text-[#B19EEF]";
  } else if (percentage >= 60) {
    message = "Good job! Solid effort! 👍";
    color = "text-green-400";
  } else if (percentage >= 40) {
    message = "Not bad, but review the material. 📚";
    color = "text-yellow-400";
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 text-center shadow-2xl">
        <div className="w-20 h-20 bg-[#5227FF]/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#5227FF]/50">
          <Trophy className="w-10 h-10 text-[#5227FF]" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Quiz Complete!</h2>
        <p className={`text-lg font-medium ${color} mb-8`}>{message}</p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
            <p className="text-slate-400 text-sm">Score</p>
            <p className="text-2xl font-bold text-white">
              {score} / {total}
            </p>
          </div>
          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
            <p className="text-slate-400 text-sm">Accuracy</p>
            <p className="text-2xl font-bold text-white">
              {Math.round(percentage)}%
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <Button
            onClick={onRetry}
            className="w-full bg-[#5227FF] hover:bg-[#5227FF]/90 text-white h-12 rounded-xl"
          >
            <RotateCcw className="w-4 h-4 mr-2" /> Retry Quiz
          </Button>
          <Link to="/subjects">
            <Button
              variant="outline"
              className="w-full border-slate-600 text-slate-300 hover:text-white hover:bg-slate-700 h-12 rounded-xl"
            >
              <LayoutDashboard className="w-4 h-4 mr-2" /> Back to Subjects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// --- Main Player Component ---
export default function MyQuizApp() {
  const { chapterId } = useParams(); // Get "os", "algorithm", etc.

  // HOOK: Get logic from Context
  const { getQuestionsByChapter, submitAnswer } = useQuestions();

  // Load questions for this specific chapter
  const questions = getQuestionsByChapter(chapterId);
  console.log("CHAPTER ID:", chapterId);
  console.log("QUESTIONS:", questions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Reset state if user switches chapters directly
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsFinished(false);
    setSelectedOption(null);
    setShowFeedback(false);
  }, [chapterId]);

  // --- Logic: Handle User Selection ---
  const handleAnswer = (index) => {
    if (showFeedback) return; // Prevent double clicks

    const currentQ = questions[currentQuestionIndex];
    setSelectedOption(index);
    setShowFeedback(true);

    // 1. Calculate Score for this session
    if (index === currentQ.correct) {
      setScore((prev) => prev + 1);
    }

    // 2. CRITICAL: Save answer to Context (LocalStorage)
    submitAnswer(chapterId, currentQ.id, index);
  };

  const handleNext = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setIsFinished(true);
    }
  };
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setSelectedOption(null);
      setShowFeedback(false);
    }
  };
  // Render Results if finished
  if (isFinished) {
    return (
      <Results
        score={score}
        total={questions.length}
        onRetry={() => window.location.reload()}
      />
    );
  }

  // Handle Empty State (e.g. invalid chapter ID)
  if (!questions || questions.length === 0) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-xl font-bold">No Questions Found</h2>
          <Link
            to="/subjects"
            className="text-[#B19EEF] hover:underline mt-4 block"
          >
            Back to Subjects
          </Link>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestionIndex];
  const isCorrect = selectedOption === currentQ.correct;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-6 flex items-center justify-center">
      <div className="max-w-3xl w-full space-y-6">
        {/* Top Bar: Breadcrumbs & Timer */}
        <div className="flex items-center justify-between text-slate-400">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#B19EEF]/10 border border-[#B19EEF]/20 flex items-center justify-center text-[#B19EEF]">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">
                Quiz
              </p>
              <h1 className="text-white font-bold capitalize leading-none">
                {chapterId}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700 backdrop-blur-md">
            <Timer className="w-4 h-4 text-[#B19EEF]" />
            <span className="text-sm font-mono text-slate-200">
              {currentQuestionIndex + 1}{" "}
              <span className="text-slate-500">/</span> {questions.length}
            </span>
          </div>
        </div>

        {/* Main Game Card */}
        <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/5">
          {/* Progress Bar */}
          <div className="h-1.5 w-full bg-slate-900/50">
            <div
              className="h-full bg-gradient-to-r from-[#B19EEF] to-[#5227FF] transition-all duration-500 ease-out"
              style={{
                width: `${
                  ((currentQuestionIndex + 1) / questions.length) * 100
                }%`,
              }}
            />
          </div>

          <div className="p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-snug">
              {currentQ.question}
            </h2>

            <div className="space-y-3">
              {currentQ.options.map((option, index) => {
                let styleClass =
                  "bg-slate-900/40 border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600 hover:text-white";
                let indicatorClass =
                  "bg-slate-800 text-slate-500 group-hover:bg-slate-700 group-hover:text-slate-300";

                if (showFeedback) {
                  if (index === currentQ.correct) {
                    styleClass =
                      "bg-emerald-500/10 border-emerald-500/50 text-emerald-400";
                    indicatorClass = "bg-emerald-500 text-white";
                  } else if (selectedOption === index) {
                    styleClass =
                      "bg-rose-500/10 border-rose-500/50 text-rose-400";
                    indicatorClass = "bg-rose-500 text-white";
                  } else {
                    styleClass =
                      "opacity-40 bg-slate-900/20 border-slate-800 text-slate-600";
                  }
                } else if (selectedOption === index) {
                  styleClass =
                    "bg-[#5227FF]/20 border-[#5227FF] text-white shadow-[0_0_15px_rgba(82,39,255,0.1)]";
                  indicatorClass = "bg-[#5227FF] text-white";
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={showFeedback}
                    className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 group text-left relative overflow-hidden ${styleClass}`}
                  >
                    <span
                      className={`
                                    w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold mr-4 transition-colors z-10
                                    ${indicatorClass}
                                `}
                    >
                      {optionLabels[index]}
                    </span>
                    <span className="font-medium text-lg flex-1 z-10">
                      {option}
                    </span>
                    {showFeedback && index === currentQ.correct && (
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 z-10" />
                    )}
                    {showFeedback &&
                      selectedOption === index &&
                      index !== currentQ.correct && (
                        <XCircle className="w-6 h-6 text-rose-500 z-10" />
                      )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Explanation Footer */}
          {showFeedback && (
            <div className="bg-slate-900/80 border-t border-slate-800/50 p-6 md:px-10 md:py-8 animate-in slide-in-from-bottom-4 fade-in duration-300">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                <div className="space-y-2 flex-1">
                  <div
                    className={`font-bold text-lg flex items-center gap-2 ${
                      isCorrect ? "text-emerald-400" : "text-rose-400"
                    }`}
                  >
                    {isCorrect ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      <AlertCircle className="w-6 h-6" />
                    )}
                    {isCorrect ? "Correct Answer!" : "Incorrect"}
                  </div>
                  <p className="text-slate-400 leading-relaxed max-w-2xl">
                    {currentQ.explanation}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <Button
                    onClick={handleNext}
                    className="w-full md:w-auto whitespace-nowrap bg-white text-slate-950 hover:bg-slate-200 px-8 h-12 font-bold shadow-lg shadow-white/5 rounded-xl text-base"
                  >
                    {currentQuestionIndex + 1 < questions.length
                      ? "Next Question"
                      : "Finish Quiz"}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
        {currentQuestionIndex > 0 && (
          <Button
            onClick={handlePrevious}
            className="w-full md:w-auto whitespace-nowrap bg-white text-slate-950 hover:bg-slate-200 px-8 h-12 font-bold shadow-lg shadow-white/5 rounded-xl text-base"
          >
            <ArrowLeft className="w-5 h-5 ml-2" /> Previous Question
          </Button>
        )}
      </div>
    </div>
  );
}
