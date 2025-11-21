import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Play,
  BarChart3,
  CheckCircle2,
  Zap,
  TrendingUp,
  Award,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#B19EEF]/10 border border-[#B19EEF]/20 mb-4">
            <Award className="w-8 h-8 text-[#B19EEF]" />
          </div>
          <h1 className="text-5xl font-bold text-white tracking-tight">
            Quiz Master
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Test your knowledge with our interactive quizzes and track your
            progress
          </p>
        </div>

        {/* Main Action Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-slate-700 bg-slate-800/50 backdrop-blur hover:bg-slate-800/70 transition-all duration-300 hover:border-[#B19EEF]/50 group">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-white text-2xl flex items-center gap-2">
                    <Play className="w-5 h-5 text-[#B19EEF]" />
                    Browes Subjects
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    View all the 5 Subjects
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Link to="/Subjects">
                <Button className="w-full bg-[#5227FF] hover:bg-[#B19EEF] text-white font-semibold shadow-lg shadow-[#5227FF]/20 transition-all duration-300 group-hover:shadow-[#B19EEF]/40">
                  View
                  <Play className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-slate-700 bg-slate-800/50 backdrop-blur hover:bg-slate-800/70 transition-all duration-300 hover:border-[#B19EEF]/50 group">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-white text-2xl flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-[#B19EEF]" />
                    View Results
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    Check your previous quiz attempts and scores
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Link to="/results">
                <Button
                  variant="outline"
                  className="w-full border-slate-600 text-slate-200 hover:bg-slate-700 hover:text-white hover:border-[#B19EEF]/50 transition-all duration-300"
                >
                  View Results
                  <BarChart3 className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Features Card */}
        <Card className="border-slate-700 bg-slate-800/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-white text-xl">How it works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 group">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#B19EEF]/10 border border-[#B19EEF]/20 flex items-center justify-center group-hover:bg-[#B19EEF]/20 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-[#B19EEF]" />
              </div>
              <div>
                <p className="text-slate-300 font-medium">
                  Answer multiple choice questions
                </p>
                <p className="text-sm text-slate-500">
                  Select from carefully crafted options
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 group">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#B19EEF]/10 border border-[#B19EEF]/20 flex items-center justify-center group-hover:bg-[#B19EEF]/20 transition-colors">
                <Zap className="w-5 h-5 text-[#B19EEF]" />
              </div>
              <div>
                <p className="text-slate-300 font-medium">
                  Get instant feedback on your answers
                </p>
                <p className="text-sm text-slate-500">
                  Learn immediately from your mistakes
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 group">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#B19EEF]/10 border border-[#B19EEF]/20 flex items-center justify-center group-hover:bg-[#B19EEF]/20 transition-colors">
                <TrendingUp className="w-5 h-5 text-[#B19EEF]" />
              </div>
              <div>
                <p className="text-slate-300 font-medium">
                  Track your progress over time
                </p>
                <p className="text-sm text-slate-500">
                  Monitor your improvement with detailed analytics
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
