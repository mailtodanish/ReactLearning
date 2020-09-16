import React, { Component } from 'react'
import FrInpur from './FrInpur'

class FRParentInput extends Component {
    constructor(props) {
        super(props)
    
       this.inputref = React.createRef()
    }
    
    render() {
        return (
            <div>
                <FrInpur ref={this.inputref}></FrInpur>
                <button >click</button>
            </div>
        )
    }
}

export default FRParentInput
