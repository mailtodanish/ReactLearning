import React, { Component } from 'react'


export class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedin:false
        }
    }
    
    render() {
        if(!this.state.isLoggedin){
            return (
                <div>               
                <div>Welcome Guest</div>
                </div>
            ) 
        }
        else{
            return (
                <div>
                <div>Welcome danish</div>
               
                </div>
            )
        }
        
    }
}

export default UserGreeting
