import TaskCard from "./TaskCard";
import { Task } from "../utils/types";
import { ChangeEventHandler, MouseEventHandler } from "react";

function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask,
}: {
  tasks: Task[];
  onChangeTask: ChangeEventHandler<HTMLInputElement>;
  onDeleteTask: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div>
      {tasks.map((task: Task) => (
        <TaskCard
          dataId={task.id}
          onChangeTask={onChangeTask}
          onDeleteTask={onDeleteTask}
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
}

export default TaskList;
