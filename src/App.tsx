import {
  ChangeEventHandler,
  MouseEventHandler,
  useReducer,
  useState,
} from "react";
import "./App.css";
import { State } from "./utils/types";
import TaskList from "./components/TaskList";
import reducer from "./utils/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  //const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleSubmitTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newTask.trim() === "") return;
    dispatch({
      type: "added",
      payload: {
        id: state.nextId + 1,
        name: newTask.trim(),
      },
    });
    setNewTask("");
  };

  const onCheckTask: ChangeEventHandler = (event) => {
    const id = parseInt(event.currentTarget.getAttribute("data-id") || "", 10);
    dispatch({
      type: "completed",
      payload: {
        id,
        name: "",
        completed: isChecked,
      },
    });
    setIsChecked(!isChecked);
  };

  const handleChangeTask: ChangeEventHandler<HTMLInputElement> = (event) => {
    const id = parseInt(event.currentTarget.getAttribute("data-id") || "", 10);
    const newTask = event.target.value;
    const completed = event.target.checked;

    dispatch({
      type: "changed",
      payload: {
        id,
        name: newTask,
        completed,
      },
    });
  };

  const handleDeleteTask: MouseEventHandler<HTMLButtonElement> = (event) => {
    const id = parseInt(event.currentTarget.getAttribute("data-id") ?? "", 10);
    dispatch({
      type: "deleted",
      payload: {
        id,
        name: "",
        completed: true,
      },
    });
  };

  return (
    <div className="flex flex-row items-start justify-center h-screen">
      <form onSubmit={handleSubmitTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Ajouter une tache</button>
      </form>
      <div>
        <TaskList
          tasks={state.tasks}
          onCheckTask={onCheckTask}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
}

const initialState: State = {
  tasks: [],
  nextId: 0,
  newTask: "",
};

export default App;
