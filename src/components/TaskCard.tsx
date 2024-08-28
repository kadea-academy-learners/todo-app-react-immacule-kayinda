import type { Task } from "../utils/types";

function TaskCard({ name, completed }: Task) {
  return <li>
    <input type="checkbox" checked={completed} />
    <span>{name}</span>
    <button>Supprimer</button>
    <button>Modifier</button>
  </li>;
}

export default TaskCard;
