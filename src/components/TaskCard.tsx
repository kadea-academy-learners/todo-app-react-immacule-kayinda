import type { Task } from "../utils/types";
import "../index.css";
import { ChangeEventHandler, MouseEventHandler } from "react";

function TaskCard({
  task,
  dataId,
  onCheckTask,
  onDeleteTask,
}: {
  task: Task;
  dataId: number;
  onCheckTask: ChangeEventHandler<HTMLInputElement>;
  onDeleteTask: MouseEventHandler<HTMLButtonElement>;
}) {
  const completedStyle = task.completed ? 'text-green-500 underline' : ''
  return (
    <li className="grid grid-cols-4 gap-4 justify-baseline">
      <input
        onChange={onCheckTask}
        data-id={`${dataId}`}
        type="checkbox"
        checked={task.completed}
      />
      <span className={`text-xl ${completedStyle}`}>{task.name}</span>
      <button data-id={`${dataId}`} onClick={onDeleteTask}>
        Supprimer
      </button>
      <button data-id={`${dataId}`}>Modifier</button>
    </li>
  );
}

export default TaskCard;
