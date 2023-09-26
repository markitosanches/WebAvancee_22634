import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import ManyTasks from './components/ManyTasks'
import AddTask from './components/AddTask'
import About from './components/About'
import Footer from './components/Footer'
function App() {

//GLOBAL
const [tasks, setTasks] = useState([])
useEffect(() =>{
    const getTasks = async () => {
        const tasksFromServer = await fetchTasks()
        setTasks(tasksFromServer)
    }
    getTasks()
}, [])

const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    //console.log(data)
    return data
} 

//DELETE
const deleteTask = async (id) => {
    //console.log(id)
    await fetch(`http://localhost:5000/tasks/${id}`,{
        method: 'DELETE',
    })
    setTasks(tasks.filter((task) => task.id !== id))
}
//update

const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
} 

const toggleReminder = async (id) => {
   // console.log(id)
   const taskToToggle = await fetchTask(id)
   const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
   const res = await fetch(`http://localhost:5000/tasks/${id}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updTask)
   })
   const data = await res.json()
   setTasks(tasks.map((task) => task.id === id ? {...task, reminder:data.reminder}: task ))
}
//Add
const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    const newTask = await res.json()
    //console.log(task)
    //const id = Math.floor(Math.random()*1000);
    //const newTask = {id, ...task}
    //console.log(newTask)
    setTasks([...tasks, newTask])
}

// toggle form


const [showAddTask, setShowAddTask] = useState(false)

  return (
    <BrowserRouter>
        <div className='container'>
            <Header onAddBtn={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
            {/* <AddTask onAdd={addTask}/> */}
            {showAddTask && <AddTask onAdd={addTask}/>}
            <Routes>
                <Route path='/' element={<ManyTasks tasks={tasks} onDeleteMany={deleteTask}  onToggleMany={toggleReminder} />}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
            <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
