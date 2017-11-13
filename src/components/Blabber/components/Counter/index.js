import React from 'react'

import './style.css'

const Counter = (props) => (
    <div>
        <button className='counter-plus'>+</button>
        <div className='votes'>{props.votes}</div>
        <button className='counter-minus'>-</button>
        
    </div>
)

export default Counter