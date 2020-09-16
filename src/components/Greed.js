import React from 'react'

const Greed = (props) => {
    return (
        <div>
            <h4>Greed.js</h4>
            <h1>{props.name}</h1>
            {props.children}
        </div>
    )
}

export default Greed
