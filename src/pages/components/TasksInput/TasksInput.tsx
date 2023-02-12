// imports
  // scss
    import './task-input.scss'
  // react
    import { FormEvent, useRef, useEffect } from "react"
  // context
    import { useTasksContext } from "../../../context/TasksContextProvider"
  // uuid
    import { v4 as uuidv4 } from 'uuid';

export default function TasksInput() {
  const addKey = uuidv4();
  const inputRef = useRef<HTMLInputElement>(null);
  const { tasks, setTasks } = useTasksContext();
  
  function addTask(e:FormEvent) {
    e.preventDefault();
    // evita que se agregen tareas que no tengan contenido
    inputRef.current!.value.trim().length > 0 ? (
      setTasks([...tasks, {id:addKey, content: inputRef.current!.value, completed:false}])
    ) : null
    inputRef.current!.value = ''
  }



  return(
    <form action="" onSubmit={addTask} className='tasks-input'>
      <input type="text" placeholder="Whats next to do...? " ref={inputRef} required/>
      <button type="submit">Add Task</button>
    </form>
  )
}