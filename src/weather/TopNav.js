import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TopNav extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <>
                <div className="topNav">
                    <h3>Ob - Havo  |  Weather</h3> 
                </div>
            </>
        )
    }
}
