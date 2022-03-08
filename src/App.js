import Header from './components/header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
  const [tasks, setTasks]= useState([
    {
      id:1,
      text:"Clean room",
      date:"Feb 5th at 2:30pm",
      reminder:true
    },
    {
      id:2,
      text:"Shopping",
      date:"Feb 10th at 5:00pm",
      reminder:true
    }
  ])

  const deleteTask = (id)=>{
    setTasks(tasks.filter((task)=> task.id != id));
  }

  return (
    <div className='container'>
      <Header onClick={()=>console.log("Button clicked")}/>

      
      <Tasks tasks={tasks} onDelete={deleteTask} />
      
    </div>
  );
}

export default App;
