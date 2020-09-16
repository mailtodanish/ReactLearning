import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={props.greetParent}>GreetParent</button>
        </div>
    )
}

export default ChildComponent
