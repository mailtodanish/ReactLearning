import React, { Component } from 'react'

class Refs extends Component {
    constructor(props) {
        super()
    
       this.inputRef = React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}></input>
                <button onClick={this.clickHandler}>Clcik</button>
            </div>
        )
    }
}

export default Refs
