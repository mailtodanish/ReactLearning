import React, { Component } from 'react'

export class Refs_class extends Component {
    constructor(props) {
        super(props)
    
        this.inputref = React.createRef()
    }
    focusInput(){
        this.inputref.current.focus()
    }
    render() {
        return (
            <div>
                <input ref={this.inputref}></input>
            </div>
        )
    }
}

export default Refs_class
