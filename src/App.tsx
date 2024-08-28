import { useState } from "react";
import "./App.css";
import { Task } from "./utils/types";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const handleSubmitTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newTask.trim() === "") return;
    setTasks([
      ...tasks,
      { id: tasks.length + 1, name: newTask, completed: false },
    ]);
    setNewTask("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmitTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Ajouter une tache</button>
      </form>
      <div>
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
