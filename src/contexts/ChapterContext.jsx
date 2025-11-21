import { createContext, useContext } from "react";
import { CHAPTERS_DATA } from "../data/quizData";

const ChapterContext = createContext();

export function ChapterProvider({ children }) {
  return (
    <ChapterContext.Provider value={{ chapters: CHAPTERS_DATA }}>
      {children}
    </ChapterContext.Provider>
  );
}

// Custom Hook for easy access
export const useChapters = () => useContext(ChapterContext);