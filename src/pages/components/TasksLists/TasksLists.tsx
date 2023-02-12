// imports
  // scss
    import './task-list.scss';
  // context
    import { useTasksContext } from "../../../context/TasksContextProvider";
    import { AiFillCheckSquare, AiFillDelete } from 'react-icons/ai';

export default function TasksLists() {
  

  const { tasks,setTasks } = useTasksContext()

  function deleteTask(taskId:String){
    setTasks(tasks.filter( task => task.id !== taskId))
  }


  function modifyTask(taskId:string){
    const modifiedTasks = [...tasks];
    tasks.map( task => {
      task.id === taskId ? ( task.completed = !task.completed ) : null 
    })

    tasks.map( task => {
      task.id === taskId ? ( 
        task.completed = !task.completed,
        document.querySelectorAll('li').forEach( li => {
          li.id === taskId ? li.classList.toggle('task-completed') : null
        })
        ) : null 
    })

    return setTasks(modifiedTasks)

  }

  return (
    <ul className="tasks-list">
      {typeof tasks === 'undefined' ? null : tasks.map( task => 
        (<>
          <li id={task.id}>
            <p> {task.content}  </p>
            <span>
              <button type="button" onClick={ () => deleteTask(task.id)} title='button'> 
                <AiFillDelete className="icon delete-button"/> 
              </button> 

              <button type="button" onClick={ () => modifyTask(task.id) } title='button'> 
                <AiFillCheckSquare className="icon modify-button"/> 
              </button>   
            </span>
          </li>
          </>)
      )}
    </ul>
  )
}
