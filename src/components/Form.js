import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super()
    
        this.state = {
            username:"danish",
            comment:"",
            topic:''
        }
    }
    handleUserNameChange =(event)=>{
        this.setState({
            username : event.target.value
            
        })
    }
    handleCommentChange=(event)=>{
        this.setState({
            comment : event.target.value
            
        })
    }
    handlerTopicChange=(event)=>{
        this.setState({
            topic : event.target.value
            
        })
    }
    handleSubmit=(event)=>{
        alert(`${this.state.topic}`)
        event.preventDefault()
    }
    render() {
        const { username ,comment,topic} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>username</label>
                        <input 
                        type="text" 
                        value={username} 
                        onChange={this.handleUserNameChange}></input>
                    </div>
                    <div>
                        <label>comments</label>
                        <textarea 
                        value={this.state.comment}
                        onChange={this.handleCommentChange}>
                        </textarea>
                    </div>
                    <div>
                        <label>Topic</label>
                        <select value = {this.state.topic}
                        onChange={this.handlerTopicChange}>
                            <option value="a">a</option>
                            <option value="b">b</option>
                            <option value="c">c</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
