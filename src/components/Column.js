import React from 'react'

function Column() {
    const items = ["sonu","nadeem","Irshad"]
    return (
        
        <React.Fragment>
            {
            items.map(x=><td>{x}</td>)
            }
        </React.Fragment>
    )
}

export default Column
