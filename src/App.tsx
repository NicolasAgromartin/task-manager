// imports
  // context
    import { TasksContextProvider } from "./context/TasksContextProvider"
  // pages
    import TasksPage from './pages/Task.page';

export default function App() {
  return (
    <TasksContextProvider>
      <TasksPage />
    </TasksContextProvider>    
  )
}

