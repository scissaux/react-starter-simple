import React from 'react'

import './style.css'

class Form extends React.Component {
    constructor(props) {
        super(props) 

            this.state={text: ' '}
        }

    render() {
        return (
    <div className='text-container'>
        
        <textarea 
            value={this.state.text} 
            placeholder='Type your blabber here...' 
            className='text-area'
            onChange={(event) => {this.setState({text: event.currentTarget.value})}} 
            />
            
        <div>
            <button className='cancel-form'>Cancel</button>

            <button className='new-post' onClick={()=>{
                fetch('http://api.ortenblabber.com/blabbers', {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({text: this.state.text})
                })
            }} >Post</button>
        </div>

    </div>
    
    )
    }
}
export default Form