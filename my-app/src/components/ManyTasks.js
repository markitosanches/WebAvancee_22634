import SingleTask from "./SingleTask"

const ManyTasks = ({tasks, onDeleteMany, onToogleMany}) => {
    return (
        <>
            {tasks.map((task)=>(
                <SingleTask task={task} key={task.id}  onDelete={ onDeleteMany } onToogle={onToogleMany}/>
            ))}
        </>
    )
}

export default ManyTasks