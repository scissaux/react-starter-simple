import React from 'react'
import './style.css'

import Counter from './components/Counter'

const Blabber = (props) => (
    <div className='blabber-container'>
        <p>{props.text}</p>
        <Counter />

    </div>
)
export default Blabber