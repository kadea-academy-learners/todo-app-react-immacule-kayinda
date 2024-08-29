import type { Task } from "../utils/types";
import "../index.css";
import { ChangeEventHandler, MouseEventHandler } from "react";

function TaskCard({
  task,
  dataId,
  onChangeTask,
  onDeleteTask,
}: {
  task: Task;
  dataId: number;
  onChangeTask: ChangeEventHandler<HTMLInputElement>;
  onDeleteTask: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <li className="grid grid-cols-4 gap-4 justify-baseline">
      <input onChange={onChangeTask} type="checkbox" checked={task.completed} />
      <span className="text-2xl underline">{task.name}</span>
      <button data-id={`${dataId}`} onClick={onDeleteTask}>
        Supprimer
      </button>
      <button>Modifier</button>
    </li>
  );
}

export default TaskCard;
