import SingleTask from "./SingleTask"

const ManyTasks = ({tasks, onDeleteMany, onToggleMany}) => {
    return (
        <>
            {tasks.map((task)=>(
                <SingleTask task={task} key={task.id}  onDelete={ onDeleteMany } onToggle={onToggleMany}/>
            ))}
        </>
    )
}

export default ManyTasks