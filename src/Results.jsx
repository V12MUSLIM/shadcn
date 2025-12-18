import { RotateCcw, LayoutDashboard, Trophy } from "lucide-react";
import { useQuestions } from "./contexts/QuestionContext";
import { Button } from "./components/ui/button";
import { Link } from "react-router-dom";
export const Results = ({ score, total, onRetry, questions, chapterId }) => {
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

  const questionContext = useQuestions();
  console.log("Question Context:", questionContext);
  const getUserAnswer = questionContext?.getUserAnswer;
  console.log("getUserAnswer function:", getUserAnswer);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-6 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 shadow-2xl">
        {/* HEADER */}
        <div className="w-20 h-20 bg-[#5227FF]/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#5227FF]/50">
          <Trophy className="w-10 h-10 text-[#5227FF]" />
        </div>

        <h2 className="text-3xl font-bold text-white mb-2 text-center">
          Quiz Complete!
        </h2>
        <p className={`text-lg font-medium text-center ${color} mb-8`}>
          {message}
        </p>

        {/* SCORE BOXES */}
        <div className="grid grid-cols-2 gap-4 mb-10">
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

        {/* USER ANSWERS */}
        <div className="space-y-4">
          {questions.map((q, i) => {
            const userAnswer = getUserAnswer(chapterId, q.id);
            const isCorrect = userAnswer === q.correct;

            return (
              <div
                key={q.id}
                className="p-4 rounded-xl bg-slate-900/30 border border-slate-700"
              >
                <p className="text-white font-semibold mb-2">
                  {i + 1}. {q.question}
                </p>

                <p
                  className={`font-bold ${
                    isCorrect ? "text-emerald-400" : "text-rose-400"
                  }`}
                >
                  Your Answer:{" "}
                  {userAnswer !== null && userAnswer !== undefined
                    ? q.options[userAnswer]
                    : "Not Answered"}
                </p>

                <p className="text-slate-400">
                  Correct Answer: {q.options[q.correct]}
                </p>
              </div>
            );
          })}
        </div>

        {/* BUTTONS */}
        <div className="mt-8 space-y-4">
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
