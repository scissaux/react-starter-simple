import React from 'react'

import './style.css'

const Button = (props) => (

    <div className='addNewContainer'>

        <button className='addNew' 
        onClick={props.handleClick}>+</button>

    </div>

    )


export default Button