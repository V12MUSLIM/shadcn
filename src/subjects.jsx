import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SUBJECTS_DATA } from "./data/quizData";

export default function Subjects() {
  const subjects = Object.values(SUBJECTS_DATA); // بدل الـ array اللي أنت كاتبه بإيدك

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4 pt-8">
          <h1 className="text-5xl font-bold text-white">Choose a Subject</h1>
          <p className="text-xl text-slate-400">
            Pick a subject to view its chapters
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
          {subjects.map((subject) => {
            const Icon = subject.icon;
            return (
              <Card
                key={subject.id}
                className="border-slate-700 bg-slate-800/50 backdrop-blur"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center border"
                      style={{
                        backgroundColor: `${subject.color}15`,
                        borderColor: `${subject.color}30`,
                      }}
                    >
                      <Icon
                        style={{ color: subject.color }}
                        className="w-7 h-7"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-white text-2xl">
                        {subject.title}
                      </CardTitle>
                      <CardDescription className="text-slate-400">
                        {subject.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Link to={`/subject/${subject.id}/pdfs`} className="flex-1">
                      <Button className="w-full bg-[#5227FF] text-white">
                        View PDFs
                      </Button>
                    </Link>
                    <Link to={`/subject/${subject.id}`} className="flex-1">
                      <Button  className="w-full bg-slate-300">
                        View Quizes
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
