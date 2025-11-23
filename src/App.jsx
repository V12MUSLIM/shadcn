import { Routes, Route } from "react-router-dom"; // Standard import for web
import { ChapterProvider } from "./contexts/ChapterContext";
import { QuestionProvider } from "./contexts/QuestionContext";
import Layout from "@/layout/layout";
import PdfViewer from "./pdf";
// --- Page Imports ---
import Home from "./Home";
import Subjects from "./subjects";
import ChapterDetail from "./ChapterDetail";
import MyQuizApp from "./MyQuizApp";
import SubjectDetails from "./SubjectDetails";
function App() {
  return (
    // Wrap the entire application with the Context Providers
    <ChapterProvider>
      <QuestionProvider>
        <Routes>
          {/* Layout wraps all pages to give them the Sidebar/Navbar */}
          <Route element={<Layout />}>
            {/* 1. Home Page */}
            <Route path="/" element={<Home />} />

            {/* 2. The Subject Selection Grid */}
            <Route path="/subjects" element={<Subjects />} />

            {/* 3. The Dynamic Chapter Page (The List of Questions) */}
            {/* The ":id" captures "os", "algorithm", etc. */}
            <Route path="/chapter/:id" element={<ChapterDetail />} />

            {/* 4. The Actual Quiz Player */}
            {/* Dynamic ID for subject */}
            <Route path="/quiz/:chapterId" element={<MyQuizApp />} />

            {/* Fallback/Direct link for demo */}

            <Route path="/subject/:id" element={<SubjectDetails />} />
            <Route path="pdf" element={<PdfViewer />} />
          </Route>
        </Routes>
      </QuestionProvider>
    </ChapterProvider>
  );
}

export default App;
