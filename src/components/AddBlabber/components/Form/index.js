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
            placeholder='Type your text here...' 
            className='text-area'
            onChange={(event) => {this.setState({text: event.currentTarget.value})}} 
            />
            
        <div>
            <button className='new-post'>Post</button>
        </div>

    </div>
    
    )
    }
}
export default Form