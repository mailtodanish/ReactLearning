import React from 'react'

function StyleSheet(props) {
    let className = props.primary?'primary':''
    return (
        <div>
            <h1 class={className}>stye</h1>
        </div>
    )
}

export default StyleSheet
