import React from 'react'

import Blabber from '../Blabber'

import './style.css'

const BlabberList = () => (
    <ul className='blabberList'>
        <li>
            <Blabber text='Blabber 1'/>
        </li>
        <li>
            <Blabber text='Blabber 2'/>
        </li>
        <li>
            <Blabber text='Blabber 3'/>
        </li>
        <li>
            <Blabber text='Blabber 4'/>
        </li>
        <li>
            <Blabber text='Blabber 5'/>
        </li>
    </ul>
)

export default BlabberList