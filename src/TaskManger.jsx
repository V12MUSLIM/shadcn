import { useState, useEffect } from "react";
import { Plus, X } from "lucide-react";
import api from "./lib/axios";
import { v4 as uuidv4 } from "uuid";
import { TaskCard } from "./TaskCard";
export default function TaskManger() {
  const [tasks, setTasks] = useState([]);
  const [isopen, setIsOpen] = useState(false);

  const [newTask, setNewTask] = useState({
    header: "",
    description: "",
    completed: false,
  });
  const AddTask = async (e) => {
    const res = await api.post("/tasks", taskToAdd);

    e.preventDefault();
    const taskToAdd = {
      id: uuidv4(),
      header: newTask.header,
      description: newTask.description,
      completed: newTask.completed,
    };

    try {
      setTasks((prev) => [...prev, res.data]);
      setNewTask({ header: "", description: "", completed: false }); // Reset form
      setIsOpen(false);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await api.get("/tasks");
        setTasks(res.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error in fetching data: ${err.response}`);
        }
      }
    };
    fetchTasks();
  }, []);
  const handelCancel = () => {
    setIsOpen(false);
    setNewTask({ header: "", description: "", completed: false });
  };

  return (
    <div className="min-h-screen flex justify-start items-start flex-col px-4 py-8 md:py-12 bg-gray-100">
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="mb-6 text-3xl md:text-5xl ">Tasks</h1>
      </div>
      {tasks.length === 0 ? (
        <div className="self-center text-gray-500 flex flex-col items-center gap-4 text-3xl">
          <h3>No Tasks Yet</h3>
          <X size={64} />
        </div>
      ) : (
        <div className="self-center">
          <TaskCard tasks={tasks} setTasks={setTasks} />
        </div>
      )}
      <div className="self-center space-y-7 mt-6">
        <button
          onClick={() => setIsOpen(true)}
          className=" bg-indigo-500 hover:bg-indigo-600 shadow-sm hover:shadow-md focus:ring-2 focus:ring-indigo-400 focus:outline-none text-white px-4 py-2 rounded-xl flex items-center gap-2 transition duration-200"
        >
          Add a Task <Plus className="w-5 h-5" />
        </button>
      </div>
      {isopen && (
        <div className=" fixed inset-0 bg-black/40 backdrop-blur-md flex justify-center items-center z-50">
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-6 w-11/12  max-w-md shadow-lg">
            <h2 className="text-white/90 font-semibold text-2xl mb-4 ">
              Add a New Task
            </h2>
            <input
              autoFocus
              type="text"
              value={newTask.header}
              onChange={(e) => {
                setNewTask({ ...newTask, header: e.target.value });
              }}
              className="w-full bg-white/10 border border-white/40 rounded-lg  px-3 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-300 mb-4"
            />
            <textarea
              name=""
              id=""
              value={newTask.description}
              onChange={(e) => {
                setNewTask({ ...newTask, description: e.target.value });
              }}
              className="w-full bg-white/10 border border-white/40 rounded-lg  px-3 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-300 mb-4"
            ></textarea>
            <div className="flex justify-end gap-3 mt-2">
              <button
                onClick={handelCancel}
                className=" bg-red-500/50 hover:bg-red-500/50 shadow-sm hover:shadow-md focus:ring-2  focus:outline-none text-white px-4 py-2 rounded-xl flex items-center gap-2 transition duration-200"
              >
                Cancel
                <X className="w-5 h-5" />
              </button>
              <button
                onClick={AddTask}
                disabled={!newTask.header.trim() || !newTask.description.trim()}
                className=" bg-indigo-500/50 hover:bg-indigo-500/50 disabled:opacity-40 shadow-sm hover:shadow-md focus:ring-2 focus:ring-indigo-400 focus:outline-none text-white px-4 py-2 rounded-xl flex items-center gap-2 transition duration-200"
              >
                Add
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
