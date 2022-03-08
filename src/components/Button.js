import PropTypes from "prop-types"

const Button= ({onClick, color, text})=>{
    return(
        <button onClick={onClick}  style={{backgroundColor:color}} className="btn">
            {text}
        </button>
    )
}

Button.propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string
}

Button.defaultProps ={
    color: "steelblue",
    text: "Button"
}

export default Button