import Button from "./Button"
import PropTypes from "prop-types"

const Header = ({title , onClick})=>{

    return(
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick={onClick} color="red" text="Add"/>
        </header>
    )
}

Header.defaultProps = {
    title: "Task tracker"
}

Header.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func
}

export default Header