import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super()
        this.state={
            counter:0
        }
    }
    increment(){
        
        //setstate have callback url - syncronous
        this.setState(prevState  => ({
            counter: prevState.counter + 1
        }),()=>{console.log("callback", this.state.counter)})

        console.log("after_callback", this.state.counter)
    }
    incrementfive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <div>
               <h1>counter - {this.state.counter}</h1>
               <button onClick={()=>this.incrementfive()}>click</button>
            </div>
        )
    }
}

export default Counter
