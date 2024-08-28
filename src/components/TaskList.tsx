import React from "react";
import TaskCard from "./TaskCard";
import { Task } from "../utils/types";


function TaskList({ tasks }: { tasks: Task[] }) {
  return (
    <div>
      {tasks.map((task: Task) => (
        <TaskCard key={task.id} {...task} />
      ))}
    </div>
  );
}

export default TaskList;
