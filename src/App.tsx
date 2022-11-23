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
    {id:'teste1',
    title: 'teste primeira linha',
    isCompleted:false
  },
  {id:'teste2',
    title: 'teste segunda linha',
    isCompleted:true
  }
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
  return (
    <>
      <Header onAddTask = {addTask}/>
      <Tasks tasks={dbTasks} />  
    </>
  );
}

export default App;
