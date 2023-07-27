import './Button.css'

const Button = (props) => {

    return (

        // If the component called in the parent has a 'props' named 'double', 'ac', 'del' or 'operation' it will add a class to the element
            // that will be used to style it
        // When the user click the button it will activated the function received through props, defined in 'Main.jsx'
        // The label of the button will be defined by the props in 'Main.jsx'
        <button className={`
            buttons 
            ${props.double ? 'double' : ''}
            ${props.ac ? 'ac' : ''}
            ${props.del ? 'del' : ''}
            ${props.operation ? 'operation' : ''}`
            }
            onClick={e => props.click(props.label)}>
            {props.label}
        </button>
    )

}

export default Button;