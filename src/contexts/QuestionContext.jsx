import { createContext, useContext, useState, useEffect } from "react";
import { QUESTIONS_DB, SUBJECTS_DATA } from "../data/quizData";

const QuestionContext = createContext();

export function QuestionProvider({ children }) {
  // 1. State for User Progress (Answers)
  // Structure: { "os-chapter-1-1": 0, "os-chapter-1-2": 1 } (key is "chapterId-questionId")
  const [userAnswers, setUserAnswers] = useState(() => {
    // Initialize from LocalStorage if available
    try {
      const saved = localStorage.getItem("quizApp_progress");
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.error("Failed to load progress", e);
      return {};
    }
  });

  // 2. Save to LocalStorage whenever answers change
  useEffect(() => {
    try {
      localStorage.setItem("quizApp_progress", JSON.stringify(userAnswers));
    } catch (e) {
      console.error("Failed to save progress", e);
    }
  }, [userAnswers]);

  // --- New Methods for Subject/Chapter Structure ---

  // Get a specific subject by ID
  const getSubject = (subjectId) => {
    return SUBJECTS_DATA[subjectId] || null;
  };

  // Get all chapters for a specific subject
  const getChaptersBySubject = (subjectId) => {
    const subject = SUBJECTS_DATA[subjectId];
    return subject ? subject.chapters : [];
  };

  // --- Existing Methods (Updated) ---

  // Get Questions for a specific chapter
  const getQuestionsByChapter = (chapterId) => {
    return QUESTIONS_DB[chapterId] || [];
  };

  // Submit an answer
  const submitAnswer = (chapterId, questionId, selectedOptionIndex) => {
    const key = `${chapterId}-${questionId}`;
    setUserAnswers((prev) => ({
      ...prev,
      [key]: selectedOptionIndex,
    }));
  };

  // Check if a specific question is answered and correct
  const getQuestionStatus = (chapterId, questionId) => {
    const key = `${chapterId}-${questionId}`;
    const answer = userAnswers[key];

    // If not answered yet
    if (answer === undefined) return { status: "unanswered", userAnswer: null };

    // Find the correct answer from DB
    const questions = getQuestionsByChapter(chapterId);
    const question = questions.find((q) => q.id === questionId);

    if (!question) return { status: "error", userAnswer: null };

    const isCorrect = question.correct === answer;
    return {
      status: isCorrect ? "correct" : "incorrect",
      userAnswer: answer,
    };
  };

  // Calculate progress for a chapter
  const getChapterProgress = (chapterId) => {
    const questions = getQuestionsByChapter(chapterId);
    const total = questions.length;
    if (total === 0) return { total: 0, completed: 0, percentage: 0 };

    let completed = 0;
    questions.forEach((q) => {
      if (userAnswers[`${chapterId}-${q.id}`] !== undefined) completed++;
    });

    return {
      total,
      completed,
      percentage: Math.round((completed / total) * 100),
    };
  };

  // Calculate progress for entire subject (all chapters)
  const getSubjectProgress = (subjectId) => {
    const chapters = getChaptersBySubject(subjectId);
    let totalQuestions = 0;
    let completedQuestions = 0;

    chapters.forEach((chapter) => {
      const progress = getChapterProgress(chapter.id);
      totalQuestions += progress.total;
      completedQuestions += progress.completed;
    });

    return {
      total: totalQuestions,
      completed: completedQuestions,
      percentage:
        totalQuestions > 0
          ? Math.round((completedQuestions / totalQuestions) * 100)
          : 0,
    };
  };

  // Reset all progress (Optional)
  const resetProgress = () => {
    setUserAnswers({});
    localStorage.removeItem("quizApp_progress");
  };
  const getUserAnswer = (chapterId, questionId) => {
    const key = `${chapterId}-${questionId}`;
    return userAnswers[key];
  };

  const value = {
    // New methods
    getSubject,
    getChaptersBySubject,
    getSubjectProgress,

    // Existing methods
    getQuestionsByChapter,
    submitAnswer,
    getQuestionStatus,
    getChapterProgress,
    resetProgress,
    userAnswers, // exposed just in case
    getUserAnswer,
  };

  return (
    <QuestionContext.Provider value={value}>
      {children}
    </QuestionContext.Provider>
  );
}

export const useQuestions = () => useContext(QuestionContext);
