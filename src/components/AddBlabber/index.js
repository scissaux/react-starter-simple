import React from 'react'

import './style.css'

class AddBlabber extends React.Component {
    constructor (){
        super()
    }
    render() {
        return (
            <div>
                <button className='addNew'>+</button>
            </div>
        )
    }
}

export default AddBlabber