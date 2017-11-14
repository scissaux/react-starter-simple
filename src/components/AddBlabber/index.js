import React from 'react'

import Button from './components/Button'
import Form from './components/Form'

import './style.css'

class AddBlabber extends React.Component {
    constructor (props) {
        super(props)

        this.state = {isFormVisible: false}
        
    }



    render() {
        return (
            <div>
                {this.state.isFormVisible
                ? <Form />
            : <Button handleClick={() => 
            
            {this.setState({isFormVisible: true})} } />}
                

            </div>      
        )
    }
}

export default AddBlabber