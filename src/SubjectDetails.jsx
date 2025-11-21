import { useParams, Link } from "react-router-dom";
import { useQuestions } from "./contexts/QuestionContext";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SubjectDetails() {
  const { id } = useParams(); // subject ID مثل "os"
  const { getSubject, getChaptersBySubject } = useQuestions();

  const subject = getSubject(id);
  const chapters = getChaptersBySubject(id);

  if (!subject) return <p className="text-white">Subject not found</p>;

  return (
    <div className="min-h-screen p-6 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto space-y-10">

        <h1 className="text-4xl font-bold">{subject.title}</h1>
        <p className="text-slate-400">{subject.description}</p>

        <div className="grid md:grid-cols-2 gap-6">
          {chapters.map((chapter) => (
            <Card key={chapter.id} className="border-slate-700 bg-slate-800/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-xl">{chapter.title}</CardTitle>
                <CardDescription>{chapter.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <Link to={`/quiz/${chapter.id}`}>
                  <Button className="w-full bg-[#5227FF] text-white">Start Quiz</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
}
