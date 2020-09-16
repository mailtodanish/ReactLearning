import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super()
    
        this.state = {
             message:'Hello'
        }
        this.clcikHandler = this.clcikHandler.bind(this)
    }
    // clcikHandler(){
    //     this.setState({
    //         message:'GoodBye'
    //     })
    //     console.log(this)

    // }
    clcikHandler = () =>{
               this.setState({
                  message:'Goodbye' 
               })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clcikHandler.bind(this)}>EventBindClcik</button> */}
                {/* <button onClick={()=> this.clcikHandler()}>EventBindClcik</button> */}
                <button onClick={this.clcikHandler}>EventBindClcik</button>
            </div>
        )
    }
}

export default EventBind
