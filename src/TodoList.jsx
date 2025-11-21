import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./components/ui/alert-dialog";
import { FileText, CheckCircle, Clock } from "lucide-react";
import { AuroraBackground } from "./components/ui/shadcn-io/aurora-background";
import Todo from "./Todo";
import { TodosContext } from "./contexts/todosContext";

export default function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);

  const [input, setInput] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [editedInput, setEditedInput] = useState("");
  const [editedId, setEditedId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [isDelete, setIsDelete] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);
 
  function addTodo() {
    if (!input.trim()) return;
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), text: input.trim(), completed: false },
    ]);

    setInput("");
  }

  function onToggle(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function openModal(todo) {
    setEditedId(todo.id);
    setEditedInput(todo.text);
    setModalOpen(true);
  }

  function closeModal() {
    setEditedId(null);
    setEditedInput("");
    setModalOpen(false);
  }

  function saveEditedInput() {
    if (!editedInput.trim()) return;
    setTodos(
      todos.map((todo) =>
        todo.id === editedId ? { ...todo, text: editedInput } : todo
      )
    );
    closeModal();
  }

  function openDeleteDialog(todo) {
    setTodoToDelete(todo);
    setIsDelete(true);
  }

  function closeDeleteDialog() {
    setTodoToDelete(null);
    setIsDelete(false);
  }

  function confirmDelete() {
    if (todoToDelete) {
      setTodos(todos.filter((todo) => todo.id !== todoToDelete.id));
      closeDeleteDialog();
    }
  }

  // Filtered todos
  const filteredTodos =
    filter === "done"
      ? todos.filter((t) => t.completed)
      : filter === "not-done"
      ? todos.filter((t) => !t.completed)
      : todos;

  const completedCount = todos.filter((t) => t.completed).length;
  const activeCount = todos.filter((t) => !t.completed).length;

  return (
    <AuroraBackground>
      <Card className="w-full max-w-xl shadow-xl border-0 bg-white">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-bold text-center">
            My Todo App
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {/* Filter Buttons */}
          <div className="grid grid-cols-1 xs:grid-cols-3 gap-2">
            <Button
              onClick={() => setFilter("all")}
              className={`text-base py-3 ${
                filter === "all"
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
            >
              All ({todos.length})
            </Button>
            <Button
              onClick={() => setFilter("done")}
              className={`text-base py-3 ${
                filter === "done"
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
            >
              Done ({completedCount})
            </Button>
            <Button
              onClick={() => setFilter("not-done")}
              className={`text-base py-3 ${
                filter === "not-done"
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
            >
              Active ({activeCount})
            </Button>
          </div>

          {/* Add Todo Input */}
          <div className="flex gap-3">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a task..."
              className="text-base h-11 flex-1"
              onKeyPress={(e) => e.key === "Enter" && addTodo()}
            />
            <Button
              onClick={addTodo}
              className="h-11 px-4 text-base bg-indigo-100"
            >
              Add
            </Button>
          </div>

          {/* Todo List */}
          <div className="space-y-2">
            {filteredTodos.length === 0 ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                  {filter === "all" && (
                    <FileText className="w-5 h-5 text-gray-600" />
                  )}
                  {filter === "done" && (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  )}
                  {filter === "not-done" && (
                    <Clock className="w-5 h-5 text-orange-600" />
                  )}
                </div>
                <p className="text-gray-500 font-medium text-sm">
                  {filter === "all" && "No todos yet"}
                  {filter === "done" && "No completed todos"}
                  {filter === "not-done" && "All tasks completed!"}
                </p>
              </div>
            ) : (
              <ul className="space-y-2">
                {filteredTodos.map((todo) => (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    DeleteTodo={openDeleteDialog} // opens delete confirmation
                    onToggle={onToggle} // toggle completed
                    openModal={openModal} // open edit modal
                  />
                ))}
              </ul>
            )}
          </div>
        </CardContent>
        <Dialog open={isModalOpen} onOpenChange={closeModal}>
          <DialogContent className="w-[95vw] max-w-sm mx-auto bg-white border border-gray-200 shadow-lg">
            <DialogHeader>
              <DialogTitle>Edit Task</DialogTitle>
              <DialogDescription>
                Update your todo item below.
              </DialogDescription>
            </DialogHeader>
            <Input
              value={editedInput}
              onChange={(e) => setEditedInput(e.target.value)}
              placeholder="Enter your task..."
              onKeyPress={(e) => e.key === "Enter" && saveEditedInput()}
            />
            <div className="flex gap-2 pt-3">
              <Button variant="outline" onClick={closeModal}>
                Cancel
              </Button>
              <Button
                onClick={saveEditedInput}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Save
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Delete Confirmation Dialog */}
        <AlertDialog open={isDelete} onOpenChange={setIsDelete}>
          <AlertDialogContent className="w-[95vw] max-w-sm mx-auto bg-white  border-red-500 shadow-lg">
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Task</AlertDialogTitle>
              <AlertDialogDescription className="text-red-700  font-bold">
                Are you sure you want to delete "{todoToDelete?.text}"? This
                action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={closeDeleteDialog}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={confirmDelete}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Card>
    </AuroraBackground>
  );
}
