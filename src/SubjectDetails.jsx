import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useQuestions } from "./contexts/QuestionContext";

export default function SubjectDetails() {
  const { id } = useParams();
  const { getSubject, getChaptersBySubject } = useQuestions();
  const subject = getSubject(id);
  const chapters = getChaptersBySubject(id) || [];

  if (!subject) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-xl font-bold">Subject not found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-white">
          <h1 className="text-3xl font-bold">{subject.title}</h1>
          <p className="text-slate-400">{subject.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {chapters.map((ch) => (
            <Card key={ch.id} className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">{ch.title}</CardTitle>
                <CardDescription className="text-slate-400">{ch.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex gap-2">

                <Link to={`/quiz/${ch.id}`}>
                  <Button className="bg-[#5227FF] text-white">Start Quiz</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
          {chapters.length === 0 && (
            <div className="text-slate-400">No chapters found for this subject.</div>
          )}
        </div>
      </div>
    </div>
  );
}