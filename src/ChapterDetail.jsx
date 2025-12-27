import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Play,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react";
import { useChapters } from "./contexts/ChapterContext";
import { useQuestions } from "./contexts/QuestionContext";

export default function ChapterDetail() {
  const { id } = useParams(); 
  const { chapters } = useChapters();
  const { getQuestionsByChapter, getQuestionStatus, getChapterProgress } = useQuestions();

  // 1. Find current chapter metadata
  const currentChapter = chapters.find(ch => ch.id === id);
  
  // 2. Get questions and stats
  const questions = getQuestionsByChapter(id);
  const stats = getChapterProgress(id);

  // Fallback if invalid ID
  if (!currentChapter) return <div className="text-white text-center p-10">Chapter not found</div>;

  const Icon = currentChapter.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* --- Header --- */}
        <div className="space-y-6 pt-4">
          <Link to="/subjects">
            <Button 
              variant="ghost" 
              className="text-slate-400 hover:text-white hover:bg-slate-800/50 pl-0 gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Subjects
            </Button>
          </Link>

          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center border shadow-2xl shadow-[#B19EEF]/20"
              style={{
                backgroundColor: `${currentChapter.color}15`,
                borderColor: `${currentChapter.color}30`,
              }}
            >
              <Icon
                className="w-10 h-10"
                style={{ color: currentChapter.color }}
              />
            </div>
            
            <div className="space-y-2 flex-1">
              <h1 className="text-4xl font-bold text-white tracking-tight">
                {currentChapter.title}
              </h1>
              <p className="text-lg text-slate-400">
                {currentChapter.description}
              </p>
              
              <div className="flex gap-4 pt-2">
                 <Badge variant="outline" className="border-slate-700 bg-slate-800/50 text-slate-300 gap-1.5 py-1.5 px-3">
                    <AlertCircle className="w-3.5 h-3.5 text-[#B19EEF]" />
                    {stats.total} Questions
                 </Badge>
                 <Badge variant="outline" className="border-slate-700 bg-slate-800/50 text-slate-300 gap-1.5 py-1.5 px-3">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                    {stats.completed} Completed
                 </Badge>
              </div>
            </div>

            <Link to={`/quiz/${id}/play`}>
                <Button className="bg-[#5227FF] hover:bg-[#5227FF]/90 text-white px-8 h-12 text-lg shadow-lg shadow-[#5227FF]/20 border border-[#B19EEF]/20">
                   {stats.completed > 0 ? "Resume Quiz" : "Start Qui"}
                </Button>
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-800/60" />

        {/* --- Question List --- */}
        <div className="space-y-4 pb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">Topic Breakdown</h2>
            
            {questions.map((question, index) => {
                const { status } = getQuestionStatus(id, question.id);
                const isCompleted = status === "correct" || status === "incorrect"; // Simplified logic: any attempt counts? or just correct? 
                // Actually, context returns "correct"/"incorrect" based on last answer. 
                
                return (
                    <Card 
                      key={question.id}
                      className="group border-slate-800 bg-slate-800/40 backdrop-blur hover:bg-slate-800/60 transition-all duration-300 hover:border-[#B19EEF]/30"
                    >
                      <CardContent className="p-5 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className={`
                                w-8 h-8 rounded-full border flex items-center justify-center text-sm font-medium transition-colors
                                ${isCompleted ? 'bg-green-500/20 border-green-500 text-green-400' : 'bg-slate-900 border-slate-700 text-slate-400'}
                            `}>
                                {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : index + 1}
                            </div>
                            
                            <div className="space-y-1">
                                <h3 className="text-white font-medium text-lg group-hover:text-[#B19EEF] transition-colors">
                                    {question.question}
                                </h3>
                                <div className="flex items-center gap-3 text-xs">
                                    <span className="flex items-center text-slate-500">
                                        <Clock className="w-3 h-3 mr-1" /> ~2 min
                                    </span>
                                    <span className={`font-medium ${isCompleted ? 'text-green-400' : 'text-slate-500'}`}>
                                        {status === 'correct' ? 'Mastered' : status === 'incorrect' ? 'Needs Review' : 'Not Started'}
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        {/* We link to the quiz player, ideally we could pass ?startAt=index to jump to specific Q */}
                        <Link to={`/quiz/${id}/play`}>
                            <Button 
                                size="sm" 
                                variant="outline" 
                                className={`
                                    border-slate-700 hover:border-[#B19EEF]/50 hover:bg-[#5227FF] hover:text-white transition-all duration-300
                                    ${isCompleted ? 'opacity-50' : 'opacity-100'}
                                `}
                            >
                                {isCompleted ? 'Review' : 'Solve'} 
                                <Play className="w-3 h-3 ml-2 fill-current" />
                            </Button>
                        </Link>
                      </CardContent>
                    </Card>
                );
            })}
        </div>
      </div>
    </div>
  );
}