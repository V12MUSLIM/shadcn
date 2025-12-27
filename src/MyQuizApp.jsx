import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  AlertCircle,
  Timer,
  BookOpen,
  Trophy,
  Zap,
  Star,
  ChevronRight,
  Sparkles,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuestions } from "./contexts/QuestionContext";
import { Results } from "./Results";
import gsap from "gsap";

const optionLabels = ["A", "B", "C", "D"];

/* -------------------------------------------------------
   MODERN QUIZ COMPONENT WITH GLASS EFFECTS & GSAP
   Now supports both MCQ and Essay questions
--------------------------------------------------------*/
export default function ModernQuizApp() {
  const { chapterId } = useParams();
  const { getQuestionsByChapter, submitAnswer, getUserAnswer } = useQuestions();

  const questions = getQuestionsByChapter(chapterId);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [streak, setStreak] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  // Refs for GSAP animations
  const cardRef = useRef(null);
  const headerRef = useRef(null);
  const optionsRef = useRef([]);
  const feedbackRef = useRef(null);
  const progressRef = useRef(null);
  const floatingElements = useRef([]);

  /* TIMER */
  useEffect(() => {
    let interval;
    if (isTimerRunning && !isFinished) {
      interval = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, isFinished]);

  /* RESET ON CHAPTER CHANGE */
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setIsFinished(false);
    setScore(0);
    setStreak(0);
    setTimeElapsed(0);
    setIsTimerRunning(true);
  }, [chapterId]);

  /* GSAP: Initial animations on mount */
  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.9, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.4)", delay: 0.2 }
    );

    // Animate floating elements
    floatingElements.current.forEach((el, i) => {
      if (el) {
        gsap.to(el, {
          y: "random(-20, 20)",
          x: "random(-20, 20)",
          rotation: "random(-10, 10)",
          duration: "random(3, 5)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.1,
        });
      }
    });
  }, []);

  /* GSAP: Question transition */
  useEffect(() => {
    if (currentQuestionIndex === 0) return;

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, x: 50, scale: 0.95 },
      { opacity: 1, x: 0, scale: 1, duration: 0.6, ease: "power2.out" }
    );

    // Stagger options animation (only for MCQ)
    if (optionsRef.current.length > 0) {
      gsap.fromTo(
        optionsRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
          delay: 0.2,
        }
      );
    }

    // Progress bar animation
    if (progressRef.current) {
      gsap.to(progressRef.current, {
        scaleX: ((currentQuestionIndex + 1) / questions.length),
        duration: 0.8,
        ease: "power2.out",
        transformOrigin: "left",
      });
    }
  }, [currentQuestionIndex, questions.length]);

  /* HANDLE ANSWER (MCQ only) */
  const handleAnswer = (optionIndex) => {
    if (showFeedback) return;

    const currentQ = questions[currentQuestionIndex];

    setSelectedOption(optionIndex);
    setShowFeedback(true);

    // Animate selected option
    gsap.to(optionsRef.current[optionIndex], {
      scale: 1.05,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
    });

    // Save to storage
    submitAnswer(chapterId, currentQ.id, optionIndex);

    // Score and streak (only for MCQ)
    if (optionIndex === currentQ.correct) {
      setScore((prev) => prev + 1);
      setStreak((prev) => prev + 1);

      // Success particle effect
      createParticles(optionsRef.current[optionIndex]);
    } else {
      setStreak(0);
      
      // Shake animation for wrong answer
      gsap.to(cardRef.current, {
        x: -10,
        duration: 0.1,
        repeat: 3,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    // Animate feedback in
    setTimeout(() => {
      if (feedbackRef.current) {
        gsap.fromTo(
          feedbackRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );
      }
    }, 100);
  };

  /* HANDLE NEXT for Essay questions */
  const handleEssayNext = () => {
    const currentQ = questions[currentQuestionIndex];
    
    if (!showFeedback) {
      // Show explanation first
      setShowFeedback(true);
      
      // Animate feedback in
      setTimeout(() => {
        if (feedbackRef.current) {
          gsap.fromTo(
            feedbackRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
          );
        }
      }, 100);
    } else {
      // Move to next question
      handleNext();
    }
  };

  const handleNext = () => {
    // Slide out animation
    gsap.to(cardRef.current, {
      opacity: 0,
      x: -50,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        if (currentQuestionIndex + 1 < questions.length) {
          setCurrentQuestionIndex((prev) => prev + 1);
          setSelectedOption(null);
          setShowFeedback(false);
        } else {
          setIsFinished(true);
          setIsTimerRunning(false);
        }
      },
    });
  };

  /* Particle effect for correct answers */
  const createParticles = (element) => {
    const rect = element.getBoundingClientRect();
    const particles = [];

    for (let i = 0; i < 15; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.cssText = `
        position: fixed;
        left: ${rect.left + rect.width / 2}px;
        top: ${rect.top + rect.height / 2}px;
        width: 8px;
        height: 8px;
        background: linear-gradient(135deg, #B19EEF, #5227FF);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
      `;
      document.body.appendChild(particle);
      particles.push(particle);

      gsap.to(particle, {
        x: `random(-100, 100)`,
        y: `random(-100, 100)`,
        opacity: 0,
        scale: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => particle.remove(),
      });
    }
  };

  /* Format time */
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  /* Calculate total MCQ questions for accurate scoring */
  const mcqQuestions = questions.filter(q => q.type !== 'essay');
  const mcqCount = mcqQuestions.length;

  /* FINISHED VIEW */
  if (isFinished) {
    return (
      <Results
        score={score}
        total={mcqCount} // Only count MCQ questions in score
        questions={questions}
        chapterId={chapterId}
        getUserAnswer={getUserAnswer}
        onRetry={() => window.location.reload()}
        timeElapsed={timeElapsed}
      />
    );
  }

  /* INVALID CHAPTER */
  if (!questions || questions.length === 0) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(177,158,239,0.1),transparent_50%)]" />
        <div className="text-center relative z-10">
          <AlertCircle className="w-16 h-16 text-[#B19EEF] mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">No Questions Found</h2>
          <p className="text-slate-400 mb-6">This chapter doesn't have any questions yet.</p>
          <Link
            to="/subjects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#B19EEF] hover:bg-[#9f89e3] text-white rounded-xl font-semibold transition-all"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            Back to Subjects
          </Link>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestionIndex];
  const isEssay = currentQ.type === 'essay';
  const isCorrect = selectedOption === currentQ.correct;
  
  // Calculate accuracy based only on MCQ questions answered so far
  const mcqAnsweredCount = questions
    .slice(0, currentQuestionIndex)
    .filter(q => q.type !== 'essay').length;
  const accuracy = mcqAnsweredCount > 0 ? Math.round((score / mcqAnsweredCount) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-4 md:p-6 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={(el) => (floatingElements.current[0] = el)}
          className="absolute top-20 left-10 w-72 h-72 bg-[#B19EEF]/10 rounded-full blur-3xl"
        />
        <div
          ref={(el) => (floatingElements.current[1] = el)}
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#5227FF]/10 rounded-full blur-3xl"
        />
        <div
          ref={(el) => (floatingElements.current[2] = el)}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl w-full space-y-6 relative z-10">
        {/* HEADER */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#B19EEF]/20 to-[#5227FF]/20 backdrop-blur-xl border border-[#B19EEF]/30 flex items-center justify-center text-[#B19EEF] shadow-lg shadow-[#B19EEF]/20">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-wider flex items-center gap-2">
                <Sparkles className="w-3 h-3" />
                Interactive Quiz
              </p>
              <h1 className="text-white text-xl md:text-2xl font-bold capitalize leading-none mt-1">
                {chapterId}
              </h1>
            </div>
          </div>

          {/* Stats Panel */}
          <div className="flex items-center gap-3 flex-wrap">
            {/* Timer */}
            <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-xl px-4 py-2.5 rounded-full border border-slate-700/50 shadow-lg">
              <Timer className="w-4 h-4 text-[#B19EEF]" />
              <span className="text-sm font-mono text-slate-200 font-semibold">
                {formatTime(timeElapsed)}
              </span>
            </div>

            {/* Progress */}
            <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-xl px-4 py-2.5 rounded-full border border-slate-700/50 shadow-lg">
              <span className="text-sm font-mono text-slate-200 font-semibold">
                {currentQuestionIndex + 1}{" "}
                <span className="text-slate-500">/</span> {questions.length}
              </span>
            </div>

            {/* Streak indicator (only show for MCQ streaks) */}
            {streak > 1 && !isEssay && (
              <div className="flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-xl px-4 py-2.5 rounded-full border border-amber-500/50 shadow-lg animate-pulse">
                <Zap className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-bold text-amber-400">
                  {streak}x Streak!
                </span>
              </div>
            )}

            {/* Accuracy (only show if MCQ questions have been answered) */}
            {mcqAnsweredCount > 0 && (
              <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-xl px-4 py-2.5 rounded-full border border-slate-700/50 shadow-lg">
                <Trophy className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-400">
                  {accuracy}%
                </span>
              </div>
            )}
          </div>
        </div>

        {/* QUESTION CARD */}
        <div
          ref={cardRef}
          className="bg-slate-800/30 backdrop-blur-2xl border border-slate-700/50 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/5 hover:ring-white/10 transition-all duration-300"
          style={{
            background: "rgba(30, 41, 59, 0.4)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
          }}
        >
          {/* PROGRESS BAR */}
          <div className="h-2 w-full bg-slate-900/50 relative overflow-hidden">
            <div
              ref={progressRef}
              className="absolute inset-y-0 left-0 w-full origin-left"
              style={{
                background: "linear-gradient(90deg, #B19EEF 0%, #5227FF 100%)",
                transform: `scaleX(${((currentQuestionIndex + 1) / questions.length)})`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          </div>

          <div className="p-6 md:p-12">
            {/* Question number badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B19EEF]/10 backdrop-blur-sm rounded-full border border-[#B19EEF]/20 mb-6">
              {isEssay ? (
                <>
                  <FileText className="w-4 h-4 text-[#B19EEF]" />
                  <span className="text-sm font-bold text-[#B19EEF]">
                    Essay Question {currentQuestionIndex + 1}
                  </span>
                </>
              ) : (
                <>
                  <Star className="w-4 h-4 text-[#B19EEF]" />
                  <span className="text-sm font-bold text-[#B19EEF]">
                    Question {currentQuestionIndex + 1}
                  </span>
                </>
              )}
            </div>

            <h2 className="text-2xl md:text-4xl font-bold text-white mb-10 leading-snug">
              {currentQ.question}
            </h2>

            {/* MCQ Options */}
            {!isEssay && (
              <div className="space-y-4">
                {currentQ.options.map((option, index) => {
                  let styleClass =
                    "bg-slate-900/40 backdrop-blur-sm border-slate-700/50 text-slate-300 hover:bg-slate-800/60 hover:border-slate-600 hover:text-white hover:shadow-lg hover:shadow-[#B19EEF]/10";
                  let indicatorClass =
                    "bg-slate-800 text-slate-500 group-hover:bg-[#B19EEF]/20 group-hover:text-[#B19EEF]";
                  let iconElement = null;

                  if (showFeedback) {
                    if (index === currentQ.correct) {
                      styleClass =
                        "bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 border-emerald-500/60 text-emerald-300 shadow-lg shadow-emerald-500/20";
                      indicatorClass = "bg-emerald-500 text-white shadow-lg shadow-emerald-500/50";
                      iconElement = <CheckCircle2 className="w-6 h-6 text-emerald-400" />;
                    } else if (selectedOption === index) {
                      styleClass =
                        "bg-gradient-to-r from-rose-500/20 to-rose-600/20 border-rose-500/60 text-rose-300 shadow-lg shadow-rose-500/20";
                      indicatorClass = "bg-rose-500 text-white shadow-lg shadow-rose-500/50";
                      iconElement = <XCircle className="w-6 h-6 text-rose-400" />;
                    } else {
                      styleClass =
                        "opacity-40 bg-slate-900/20 border-slate-800/50 text-slate-600";
                    }
                  }

                  return (
                    <button
                      key={index}
                      ref={(el) => (optionsRef.current[index] = el)}
                      onClick={() => handleAnswer(index)}
                      disabled={showFeedback}
                      className={`w-full flex items-center p-5 rounded-2xl border-2 transition-all duration-300 group text-left relative overflow-hidden ${styleClass}`}
                      style={{
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                      }}
                    >
                      {/* Hover glow effect */}
                      {!showFeedback && (
                        <div className="absolute inset-0 bg-gradient-to-r from-[#B19EEF]/0 via-[#B19EEF]/10 to-[#B19EEF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      )}

                      <span
                        className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold mr-4 transition-all duration-300 z-10 ${indicatorClass}`}
                      >
                        {optionLabels[index]}
                      </span>
                      <span className="font-semibold text-lg flex-1 z-10">
                        {option}
                      </span>

                      {iconElement && (
                        <div className="z-10 animate-in zoom-in-50 duration-300">
                          {iconElement}
                        </div>
                      )}

                      {!showFeedback && (
                        <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-[#B19EEF] transition-colors opacity-0 group-hover:opacity-100 z-10" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Essay Question - Show button to reveal explanation */}
            {isEssay && !showFeedback && (
              <div className="flex justify-center mt-8">
                <Button
                  onClick={handleEssayNext}
                  className="bg-gradient-to-r from-[#B19EEF] to-[#5227FF] hover:from-[#9f89e3] hover:to-[#4018dd] text-white px-8 h-14 font-bold shadow-lg shadow-[#B19EEF]/30 rounded-xl text-base transition-all duration-300 hover:scale-105"
                >
                  View Explanation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            )}
          </div>

          {/* FEEDBACK */}
          {showFeedback && (
            <div
              ref={feedbackRef}
              className="bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-xl border-t border-slate-700/50 p-6 md:px-12 md:py-10"
              style={{
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
              }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                <div className="space-y-3 flex-1">
                  {!isEssay && (
                    <div
                      className={`font-bold text-xl flex items-center gap-3 ${
                        isCorrect ? "text-emerald-400" : "text-rose-400"
                      }`}
                    >
                      {isCorrect ? (
                        <>
                          <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                            <CheckCircle2 className="w-6 h-6" />
                          </div>
                          Excellent! That's correct!
                        </>
                      ) : (
                        <>
                          <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center">
                            <AlertCircle className="w-6 h-6" />
                          </div>
                          Not quite right
                        </>
                      )}
                    </div>
                  )}
                  
                  {isEssay && (
                    <div className="font-bold text-xl flex items-center gap-3 text-[#B19EEF]">
                      <div className="w-10 h-10 rounded-full bg-[#B19EEF]/20 flex items-center justify-center">
                        <FileText className="w-6 h-6" />
                      </div>
                      Key Points & Explanation
                    </div>
                  )}
                  
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50">
                    <p className="text-slate-300 leading-relaxed text-base">
                      {currentQ.explanation}
                    </p>
                  </div>
                </div>

                <Button
                  onClick={isEssay ? handleEssayNext : handleNext}
                  className="w-full md:w-auto whitespace-nowrap bg-gradient-to-r from-[#B19EEF] to-[#5227FF] hover:from-[#9f89e3] hover:to-[#4018dd] text-white px-8 h-14 font-bold shadow-lg shadow-[#B19EEF]/30 rounded-xl text-base transition-all duration-300 hover:scale-105"
                >
                  {currentQuestionIndex + 1 < questions.length
                    ? "Next Question"
                    : "Finish Quiz"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}