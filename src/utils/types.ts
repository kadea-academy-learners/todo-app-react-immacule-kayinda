export interface Task {
  id: number;
  name: string;
  completed?: boolean;
}

export interface State {
  tasks: Task[];
  newTask?: string;
  nextId: number;
}

export type ReducerAction = {
  type: "added" | "changed" | "deleted" | "completed" | "insert";
  payload: { task?: Task; taskName?: string };
};

export interface Action {
  type: string;
}

export type ReducerType<S, A extends Action> = (state: S, action: A) => S;

export type CountReducer = ReducerType<State, ReducerAction>;
