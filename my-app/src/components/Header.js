import PropTypes from 'prop-types'
import Button from './Button'
const Header = (props) => {
    // const onClick = () => {
    //     console.log('Click component')
    // }

    return(
        <header className="header">
            {/*<h1 style={{ color: 'red', backgroundColor: 'black'}}>{props.title}</h1>*/}
            {/*<h1 style={headingStyle}>{props.title}</h1>*/}
            <h1>{props.title}</h1>
            {/*<button className='btn'>Ajouter</button>*/}
            <Button text={props.showAdd ? 'Ferner' : 'Ajouter' } color={props.showAdd ? 'red' : 'green' } onClick={props.onAddBtn}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
/*
const headingStyle = {
    color: 'red', 
    backgroundColor: 'black'
}*/
export default Header