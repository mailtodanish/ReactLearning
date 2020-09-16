import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props) {
        super()
    
        this.state = {
             name:"Danish"
        }
        console.log("B :constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("B :GetDerievdStateFromProps")

        return null

    }
    componentDidMount(){
        console.log("B :componentDidMount")
    }
    render() {
        console.log("B :render")
        return (
            <div>
                I am in B
            </div>
        )
    }
}

export default LifeCycleB
