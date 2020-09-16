import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NameList extends Component {
    static propTypes = {

    }
    render() {
        const name = ["Danish", "Sonu"]
        const nameList = name.map(x=><h1>{x}</h1>)
        return (
            <div>
               {nameList}
            </div>
        )
    }
}

export default NameList
