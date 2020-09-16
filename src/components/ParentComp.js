import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

class ParentComp extends Component {
    constructor(props) {
        super()
    
        this.state = {
            name: 'Danish' 
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"Danish"
            })
        },2000)
    }
    render() {
        return (
            <div>
              ParentComp  
              <RegularComp name={this.state.name}></RegularComp>
              <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp
