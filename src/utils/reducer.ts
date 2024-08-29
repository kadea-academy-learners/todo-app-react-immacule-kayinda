import { ReducerAction, State } from "./types";

function reducer(state: State, action: ReducerAction): State {
  switch (action.type) {
    case "added": {
      return {
        tasks: [
          ...state["tasks"],
          {
            id: state.nextId,
            name: action.payload.name,
            completed: false,
          },
        ],
        newTask: "",
        nextId: state?.nextId ? state.nextId + 1 : 1,
      };
    }
    case "changed": {
      return {
        tasks: state.tasks.map((t) => {
          if (t.id === action.payload.id) {
            return action.payload;
          } else {
            return t;
          }
        }),
        nextId: state.nextId,
        newTask: "",
      };
    }
    case 'completed': {
      return {
        tasks: state.tasks.map((t) => {
          if (t.id === action.payload.id) {
            return {...t, completed: action.payload.completed };
          } else {
            return t;
          }
        }),
        nextId: state.nextId,
      };
    }
    case "deleted": {
      return {
        tasks: state.tasks.filter((t) => t.id !== action.payload.id),
        nextId: state.nextId,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export default reducer;
