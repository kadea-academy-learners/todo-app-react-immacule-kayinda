import { ReducerAction, State } from "./types";

function reducer(state: State, action: ReducerAction): State {
  if(!(action.payload.task ?? action.payload.taskName)){
    return {
      ...state
    }
  }
  switch (action.type) {
    case "added": {
      return {
        tasks: [
          ...state["tasks"],
          {
            id: state.nextId,
            name: action.payload.task?.name ? action.payload.task.name : "added",
            completed: false,
          },
        ],
        newTask: "",
        nextId: state.nextId + 1,
      };
    }
    case "changed": {
      return {
        ...state,
        tasks: state.tasks.map((t) => {
          if (t.id === action.payload.task?.id) {
            return action.payload.task;
          } else {
            return t;
          }
        }),
        newTask: "",
      };
    }
    case "completed": {
      return {
        ...state,
        tasks: state.tasks.map((t) => {
          if (t.id === action.payload.task?.id) {
            return { ...t, completed: !t.completed };
          } else {
            return t;
          }
        }),
      };
    }
    case "deleted": {
      return {
        tasks: state.tasks.filter((t) => t.id !== action.payload.task?.id),
        nextId: state.nextId,
      };
    }
    case "insert": {
      return { ...state, newTask: action.payload.taskName };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export default reducer;
