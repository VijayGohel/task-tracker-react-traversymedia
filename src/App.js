import Header from './components/header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
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

  const toggleReminder = (id)=>{
    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder:!task.reminder}:task));
  }

  const addTask = (task)=>{
    const id = Math.floor(Math.random()*1000+1);
    const newTask = {id,...task};
    setTasks([...tasks, newTask]);
  }
  return (
    <div className='container'>
      <Header onClick={()=>console.log("Button clicked")}/>

      <AddTask onAdd={addTask}/>
      
      {tasks.length>0 ? 
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 
          "No tasks to show"}
      
    </div>
  );
}

export default App;
