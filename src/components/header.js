import Button from "./Button"
import PropTypes from "prop-types"

const Header = ({title , onClick , showAdd})=>{

    return(
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick={onClick} color={showAdd?"red":"green"} text={showAdd?"Close":"Add"}/>
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func
}

export default Header