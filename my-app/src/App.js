import { useState } from 'react'
import Header from './components/Header'
import ManyTasks from './components/ManyTasks'
import AddTask from './components/AddTask'
function App() {

//GLOBAL
const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Doctos appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },
    {
        id:2,
        text: 'Meeting at scholl',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id:3,
        text: 'Food shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
])
//DELETE
const deleteTask = (id) => {
    //console.log(id)
    setTasks(tasks.filter((task) => task.id !== id))
}
//update
const toogleReminder = (id) => {
   // console.log(id)
   setTasks(tasks.map((task) => task.id === id ? {...task, reminder:!task.reminder}: task ))
}
//Add
const addTask = (task) => {
    console.log(task)
}

  return (
   <div className='container'>
      <Header/>
      <AddTask onAdd={addTask}/>
      <ManyTasks tasks={tasks} onDeleteMany={deleteTask}  onToogleMany={toogleReminder} />
   </div>
  );
}

export default App;
