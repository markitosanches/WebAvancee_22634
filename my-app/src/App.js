import { useState } from 'react'
import Header from './components/Header'
import ManyTasks from './components/ManyTasks'
function App() {

//GLOBAL
const [tasks, setState] = useState([
    {
        id:1,
        text: 'Doctos appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
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
  return (
   <div className='container'>
      <Header/>
      <ManyTasks tasks={tasks}/>
   </div>
  );
}

export default App;
