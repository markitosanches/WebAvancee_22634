import SingleTask from "./SingleTask"
const ManyTasks = ({tasks}) => {
    return (
        <>
            {tasks.map((task)=>(
                <SingleTask task={task} key={task.id}/>
            ))}
        </>
    )
}

export default ManyTasks