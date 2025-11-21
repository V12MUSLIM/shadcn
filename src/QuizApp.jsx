import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, XCircle, Trophy, RotateCcw } from 'lucide-react';

const quizQuestions = [
  {
    id: 1,
    question: "What is the primary focus of Data Analysis?",
    options: [
      "Predicting future outcomes",
      "Answering specific, known questions about the past and present",
      "Building recommendation systems",
      "Creating new machine learning models"
    ],
    correct: 1,
    explanation: "Data Analysis is focused on answering specific, known questions about the past and present, summarizing data and creating reports."
  },
  {
    id: 2,
    question: "Which of the following is NOT one of the '3V model' dimensions of big data?",
    options: [
      "Volume",
      "Velocity",
      "Variety",
      "Validity"
    ],
    correct: 3,
    explanation: "The 3V model consists of Volume (size of data), Velocity (speed of data processing), and Variety (types of data)."
  },
  {
    id: 3,
    question: "What is Datafication?",
    options: [
      "The process of deleting old data",
      "The process of turning various forms of information into structured digital data",
      "The process of encrypting data",
      "The process of backing up databases"
    ],
    correct: 1,
    explanation: "Datafication refers to the process of turning various forms of information into structured digital data that can be analyzed and used to gain insights."
  },
  {
    id: 4,
    question: "Machine Learning is primarily about:",
    options: [
      "Hardware engineering",
      "Database management",
      "Learning patterns from data to make predictions",
      "Creating user interfaces"
    ],
    correct: 2,
    explanation: "Machine Learning focuses on learning patterns from data to make predictions or decisions without being explicitly programmed."
  },
  {
    id: 5,
    question: "What is Data Science?",
    options: [
      "Only about statistics",
      "The business application of machine learning, AI, and other quantitative fields",
      "Just another name for programming",
      "Only about data visualization"
    ],
    correct: 1,
    explanation: "Data Science is the business application of machine learning, artificial intelligence and other quantitative fields like statistics, visualization and mathematics."
  },
  {
    id: 6,
    question: "Which is an example of a Data Science use case?",
    options: [
      "Writing documentation",
      "Recommendation engines for movies",
      "Creating spreadsheets",
      "Sending emails"
    ],
    correct: 1,
    explanation: "Recommendation engines that recommend movies for users are a classic example of data science applications, along with fraud detection and churn prediction."
  },
  {
    id: 7,
    question: "What does 'Volume' refer to in the 3V model?",
    options: [
      "The speed of data processing",
      "The number of types of data",
      "The size and scope of the data",
      "The accuracy of data"
    ],
    correct: 2,
    explanation: "Volume refers to the size and scope of the data in the 3V model of big data."
  },
  {
    id: 8,
    question: "Artificial Intelligence is about:",
    options: [
      "Only playing chess",
      "Giving machines the capability of mimicking human behavior",
      "Creating databases",
      "Writing code faster"
    ],
    correct: 1,
    explanation: "Artificial Intelligence is about giving machines the capability of mimicking human behavior, particularly cognitive functions."
  }
];

export default function DataScienceQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (index) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(index);
      setShowResult(true);
      
      const isCorrect = index === quizQuestions[currentQuestion].correct;
      if (isCorrect) {
        setScore(score + 1);
      }
      
      setAnsweredQuestions([...answeredQuestions, {
        question: currentQuestion,
        selected: index,
        correct: quizQuestions[currentQuestion].correct,
        isCorrect
      }]);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions([]);
    setQuizCompleted(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 80) return "Excellent! You've mastered Data Science basics! 🌟";
    if (percentage >= 60) return "Good job! You have a solid understanding! 👍";
    if (percentage >= 40) return "Not bad! Keep studying to improve! 📚";
    return "Keep learning! Review the lecture material! 💪";
  };

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl shadow-xl">
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <Trophy className="w-20 h-20 text-yellow-500" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-800">
              Quiz Completed!
            </CardTitle>
            <CardDescription className="text-xl">
              Your final score: {score} out of {quizQuestions.length}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert className="bg-blue-50 border-blue-200">
              <AlertDescription className="text-center text-lg font-medium text-gray-700">
                {getScoreMessage()}
              </AlertDescription>
            </Alert>
            
            <div className="space-y-3">
              <h3 className="font-semibold text-lg text-gray-800">Review Your Answers:</h3>
              {answeredQuestions.map((ans, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  {ans.isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">
                      Question {idx + 1}: {quizQuestions[ans.question].question}
                    </p>
                    <p className={`text-sm ${ans.isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                      Your answer: {quizQuestions[ans.question].options[ans.selected]}
                    </p>
                    {!ans.isCorrect && (
                      <p className="text-sm text-green-700 mt-1">
                        Correct answer: {quizQuestions[ans.question].options[ans.correct]}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button 
              onClick={handleRestart}
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Retake Quiz
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-xl">
        <CardHeader>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-indigo-600">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              Score: {score}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">
            {question.question}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {question.options.map((option, index) => {
            let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ";
            
            if (selectedAnswer === null) {
              buttonClass += "border-gray-200 hover:border-indigo-400 hover:bg-indigo-50";
            } else if (index === question.correct) {
              buttonClass += "border-green-500 bg-green-50";
            } else if (index === selectedAnswer) {
              buttonClass += "border-red-500 bg-red-50";
            } else {
              buttonClass += "border-gray-200 bg-gray-50 opacity-60";
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={selectedAnswer !== null}
                className={buttonClass}
              >
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center font-semibold text-gray-700">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="font-medium text-gray-800">{option}</span>
                  {selectedAnswer !== null && index === question.correct && (
                    <CheckCircle2 className="w-5 h-5 text-green-600 ml-auto" />
                  )}
                  {selectedAnswer === index && index !== question.correct && (
                    <XCircle className="w-5 h-5 text-red-600 ml-auto" />
                  )}
                </div>
              </button>
            );
          })}

          {showResult && (
            <Alert className={selectedAnswer === question.correct ? "bg-green-50 border-green-200" : "bg-blue-50 border-blue-200"}>
              <AlertDescription className="text-gray-700">
                <span className="font-semibold">
                  {selectedAnswer === question.correct ? "Correct! " : "Incorrect. "}
                </span>
                {question.explanation}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleNext}
            disabled={!showResult}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50"
            size="lg"
          >
            {currentQuestion === quizQuestions.length - 1 ? "Finish Quiz" : "Next Question"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}