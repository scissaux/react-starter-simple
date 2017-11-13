import React from 'react'

import Blabber from '../Blabber'

import './style.css'

const BlabberList = (props) => {
    return (
    <ul className='blabberList'>
        {props.blabbers.map(blabber => {
            return (
                <li><Blabber text={blabber.text} /></li>
            )
        } )}
    </ul>
)
}

export default BlabberList