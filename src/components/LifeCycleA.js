import React, { Component } from 'react'
import { LifeCycleB } from './LifeCycleB'

export class LifeCycleA extends Component {
    constructor(props) {
        super()
    
        this.state = {
             name:"Danish"
        }
        console.log("A :constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("A :GetDerievdStateFromProps")

        return null

    }
    componentDidMount(){
        console.log("A :componentDidMount")
    }
    render() {
        console.log("A :render")
        return (
            <div>
                Hello Danish
                <LifeCycleB></LifeCycleB>
            </div>
        )
    }
}

export default LifeCycleA
