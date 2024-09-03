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
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleSubmitTask = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("submitTask");
    event.preventDefault();
    if (state.newTask?.trim() === "") return;
    dispatch({
      type: "added",
      payload: { task: { id: state.nextId + 1, name: state.newTask?.trim()? state.newTask : '' } },
    });
  };

  const handleInsertText = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    dispatch({
      type: "insert",
      payload: {
        taskName: event.target.value,
      },
    });
  };

  const onCheckTask: ChangeEventHandler<HTMLInputElement> = (event) => {
    const id = parseInt(event.currentTarget.getAttribute("data-id") || "", 10);
    dispatch({
      type: "completed",
      payload: {
        task: {
          id,
          name: event.target.value,
          completed: event.target.checked,
        },
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
        task: {
          id,
          name: newTask,
          completed,
        },
      },
    });
  };

  const handleDeleteTask: MouseEventHandler<HTMLButtonElement> = (event) => {
    const id = parseInt(event.currentTarget.getAttribute("data-id") ?? "", 10);
    dispatch({
      type: "deleted",
      payload: {
        task: {
          id,
          name: "",
          completed: true,
        },
      },
    });
  };

  return (
    <div className="flex flex-row items-start justify-center h-screen">
      <form onSubmit={handleSubmitTask}>
        <input type="text" value={state.newTask} onChange={handleInsertText} />
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
