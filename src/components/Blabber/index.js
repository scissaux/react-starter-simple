import React from 'react'
import './style.css'

import Counter from './components/Counter'
import Comments from './components/Comments'

const Blabber = (props) => (
    <div className='blabber-container'>
        <p>{props.text}</p>
        <Counter votes={props.votes} />
        <Comments comments={props.comments} />

    </div>
)
export default Blabber