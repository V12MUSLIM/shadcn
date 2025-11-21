import { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const TodosContext = createContext();

export function TodosProvider({ children }) {
  // Load from localStorage once (lazy initializer)
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem("todos");
      return saved ? JSON.parse(saved) : [];
    } catch (err) {
      console.error("Error loading todos:", err);
      return [];
    }
  });

  // Save to localStorage whenever todos change
  useEffect(() => {
    try {
      localStorage.setItem("todos", JSON.stringify(todos));
    } catch (err) {
      console.error("Error saving todos:", err);
    }
  }, [todos]);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
}
