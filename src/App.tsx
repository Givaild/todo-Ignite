import { useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

export interface InterfaceTask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [dbTasks,setDbTasks] = useState<InterfaceTask[]>([
    
  ]);

  function addTask(taskTitle:string) {
    setDbTasks ([
      ...dbTasks, 
      {
        id:crypto.randomUUID(),
        title:taskTitle,
        isCompleted: false,
      }
    ])
  }
  function deleteTaskById(taskDeleteId: string) {
    const newTasks = dbTasks.filter(deleteTask =>deleteTask.id != taskDeleteId);
    setDbTasks(newTasks);
  }

  function toggleTaskCompletedById(completedTaskId:string) {
    const newTasks = dbTasks.map(toogleTask=>{
     if(toogleTask.id === completedTaskId){
      return{
        ...toogleTask,
        isCompleted: !toogleTask.isCompleted,
      };
     }
     return toogleTask 
    });
    setDbTasks(newTasks);
  }
  return (
    <>
      <Header onAddTask = {addTask}/>
      <Tasks tasks={dbTasks} onDelete={deleteTaskById} onComplete={toggleTaskCompletedById}/>  
    </>
  );
}

export default App;
