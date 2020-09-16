import React, { Component } from 'react'
import Refs_class from './Refs_class'

class FocusInput extends Component {
    constructor(props) {
        super(props)
    
        this.inputref = React.createRef()
    }
    clickHandler =()=>{
        this.inputref.current.focusInput()
    }
    render() {
        return (
            <div>
                <Refs_class ref={this.inputref}></Refs_class>
                <button onClick={this.clickHandler}>focus</button>
            </div>
        )
    }
}

export default FocusInput
