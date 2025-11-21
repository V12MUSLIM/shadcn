import { useState } from "react";
import { X, Save, Pen, Check, Trash } from "lucide-react";
import api from "@/lib/axios";
export const TaskCard = ({tasks,setTasks}) => {
  
  const [showEditButtons, setshowEditButtons] = useState(null);
  const [editedTask, setEditedTask] = useState(null);

  const handleEdit = (task) => {
    setshowEditButtons(task.id);
    setEditedTask({ ...task });
  };
  const saveChanges = () => {
    setTasks(tasks.map((t) => (t.id === editedTask.id ? editedTask : t)));
    setshowEditButtons(null);
    setEditedTask(null);
  };
  const handleDelete = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      const taskList = tasks.filter((t) => t.id !== id);
      setTasks(taskList);
    } catch (err) {
      console.log(`Eroor ${err.message}`);
    }
  };
  const handelCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return (
    <div className="space-y-6">
      {tasks.map((task) => {
        return (
          <div
            key={task.id}
            className={`  ${
              showEditButtons === task.id
                ? "ring-indigo-300 bg-indigo-50/50 border-indigo-200 shadow-md"
                : task.completed
                ? "border-green-300 hover:border-green-200"
                : "bg-slate-50 hover:bg-slate-100"
            } border  rounded-2xl p-4 md:p-6 shadow-sm ring-1 ring-slate-200 hover:shadow-md  transition duration-200`}
          >
            <div className="flex justify-between items-center mb-4">
              {showEditButtons === task.id ? (
                <input
                  type="text"
                  className=" w-full  border border-indigo-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white mr-2"
                  value={editedTask.header}
                  onChange={(e) =>
                    setEditedTask({ ...editedTask, header: e.target.value })
                  }
                />
              ) : (
                <h3 className="text-lg font-semibold text-slate-800">
                  {task.header}
                </h3>
              )}

              <div
                className={`flex  ${
                  showEditButtons === task.id ? "invisible" : ""
                } gap-2`}
              >
                <button
                  onClick={() => handleEdit(task)}
                  className="bg-slate-200 hover:bg-white hover:text-indigo-500 cursor-pointer text-slate-500 p-2 rounded-xl transition"
                >
                  <Pen className="w-5 h-5 " />
                </button>

                <button
                  onClick={() => handelCompleted(task.id)}
                  className="bg-slate-200 hover:bg-white p-2 rounded-xl transition hover:text-green-500 cursor-pointer text-slate-500 "
                >
                  <Check className="w-5 h-5 " />
                </button>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-slate-200 hover:bg-white p-2 rounded-xl transition hover:text-red-500 cursor-pointer text-slate-500"
                >
                  <Trash className="w-5 h-5 " />
                </button>
              </div>
            </div>
            {showEditButtons === task.id ? (
              <input
                className=" w-full  border border-indigo-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white"
                type="text"
                value={editedTask.description}
                onChange={(e) =>
                  setEditedTask({
                    ...editedTask,
                    description: e.target.value,
                  })
                }
              />
            ) : (
              <p className="text-sm leading-relaxed text-slate-700">
                {task.description}
              </p>
            )}
            {showEditButtons === task.id && (
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setshowEditButtons(null)}
                  className="bg-red-500 hover:bg-red-600 hover:shadow-md focus:ring-2 focus:ring-red-300 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition"
                >
                  Cancel <X className="w-5 h-5" />
                </button>

                <button
                  onClick={saveChanges}
                  className="bg-blue-500 hover:bg-blue-600 hover:shadow-md focus:ring-2 focus:ring-blue-300 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition"
                >
                  Save Changes <Save className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
