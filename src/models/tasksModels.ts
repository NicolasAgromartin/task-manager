

// children model
export interface Props {
  children: JSX.Element | JSX.Element[];
}
// task model
export type Task = {
  id: string,
  content: string,
  completed: boolean,
}

// context model
export type TasksContextType = {
  tasks: Array<Task>;
  setTasks: (value: Array<Task>) => void;
}
