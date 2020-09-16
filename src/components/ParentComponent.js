import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super()
    
        this.state = {
             parentName:'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent(){
        alert(`hello, ${this.state.parentName}`)
    }
    render() {
        return (
            <div>
               <ChildComponent greetParent={this.greetParent}></ChildComponent> 
            </div>
        )
    }
}

export default ParentComponent
