import React from 'react'
import "./Button.scss"


const Button = (props) => {
    const {text} = props;
    const [counter, setCounter] = useState(0)


    return (
        <div>
            <button className='button'>{text}</button>
            Button</div>
    )
}

export default Button