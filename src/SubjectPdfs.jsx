
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useQuestions } from "./contexts/QuestionContext";
import { Download } from "lucide-react";
export default function SubjectPdfs() {
  const { id } = useParams();
  const { getSubject } = useQuestions();
  const subject = getSubject(id);

  if (!subject) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-xl font-bold">Subject not found</h2>
        </div>
      </div>
    );
  }

  const pdfs = subject.pdfs || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-white">
          <h1 className="text-3xl font-bold">{subject.title} — PDFs</h1>
          <p className="text-slate-400">{subject.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {pdfs.map((pdf) => (
            <Card key={pdf.id} className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">{pdf.title}</CardTitle>
                <CardDescription className="text-slate-400">PDF</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Link to={`/subject/${id}/pdfs/${pdf.id}`}>
                    <Button className="bg-[#5227FF] text-white">Open</Button>
                  </Link>
                  <a href={pdf.file} download className="ml-2">
                    <Button className="bg-slate-300" > <Download/> Download</Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
          {pdfs.length === 0 && (
            <div className="text-slate-400">No PDFs available for this subject.</div>
          )}
        </div>
      </div>
    </div>
  );
}