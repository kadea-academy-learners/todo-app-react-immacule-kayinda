import TaskCard from "./TaskCard";
import { Task } from "../utils/types";
import { ChangeEventHandler, MouseEventHandler } from "react";

function TaskList({
  tasks,
  onDeleteTask,
  onCheckTask,
}: {
  tasks: Task[];
  onCheckTask: ChangeEventHandler<HTMLInputElement>;
  onChangeTask: ChangeEventHandler<HTMLInputElement>;
  onDeleteTask: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div>
      {tasks.map((task: Task) => (
        <TaskCard
          dataId={task.id}
          onCheckTask={onCheckTask}
          onDeleteTask={onDeleteTask}
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
}

export default TaskList;
