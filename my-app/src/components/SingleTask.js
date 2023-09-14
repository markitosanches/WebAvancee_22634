import { FaTimes } from 'react-icons/fa'
const SingleTask = ({task, onDelete, onToogle}) => {
    return(
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={ () => onToogle(task.id)}>
            <h3>{task.text}
                <FaTimes
                style={{ color: 'red'}}
                onClick = { () => onDelete(task.id) }
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default SingleTask