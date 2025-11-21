import { Button } from "./components/ui/button";
import { Checkbox } from "./components/ui/checkbox";
import { Pen, Trash, Check } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Todo({ todo, DeleteTodo, onToggle, openModal }) {
  return (
    <li className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
      {/* Left: checkbox + text */}
      <div className="flex items-center gap-2">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={() => onToggle(todo.id)}
          className={`h-6 w-6 rounded-md border ${
            todo.completed ? "bg-green-500 border-green-500" : "border-gray-400"
          }`}
        >
          {todo.completed && <Check className="h-4 w-4 text-white" />}
        </Checkbox>

        <span
          className={
            todo.completed
              ? "line-through text-gray-500 italic"
              : "font-medium"
          }
        >
          {todo.text}
        </span>
      </div>

      {/* Right: action buttons */}
      <div className="flex items-center gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => openModal(todo)}
                variant="ghost"
                size="icon"
                className="hover:bg-blue-100"
              >
                <Pen className="h-4 w-4 text-blue-500" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Edit Task</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-red-100"
                onClick={() => DeleteTodo(todo)}
              >
                <Trash className="h-4 w-4 text-red-500" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Delete Task</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </li>
  );
}
