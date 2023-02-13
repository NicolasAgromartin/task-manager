// imports
  // react-icons
    import { AiFillGithub } from "react-icons/ai";
  // components
    import TasksInput from "./components/TasksInput/TasksInput";
    import TasksLists from "./components/TasksLists/TasksLists";
  // scss
    import './scss/task-page.scss';

export default function TasksPage() {
  return (
    <div className="task-page">
      <h1> Task Manager </h1>
      <TasksInput /> 
      <TasksLists />
      <div>
        <a href="https://github.com/NicolasAgromartin/task-manager" target='_blank' rel="noopener noreferrer"> <AiFillGithub /> </a>
      </div>      
    </div>
  )
}
