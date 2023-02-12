// imports 
  // react
    import { createContext, ReactNode, useContext, useEffect, useState } from "react";
  // models
    import { Task, TasksContextType } from "../models/tasksModels";




export const TasksContext = createContext({});

type Props = {
  children: ReactNode
}

export function TasksContextProvider({ children }: Props ) {
  // el estado de la aplicacion es un arreglo de tareas, cada tarea tiene id, contenido, y completado
  const [ tasks, setTasks ] = useState<Task []>([])

  useEffect(() => {
    console.log(tasks)
    
  },[tasks])


  return(
    <TasksContext.Provider value={{ tasks, setTasks }}>
      { children }
    </TasksContext.Provider>
  )
}

export function useTasksContext(){
  return useContext(TasksContext) as TasksContextType;
}