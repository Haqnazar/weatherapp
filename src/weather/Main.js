import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TopNav from './TopNav'
import './style.css';
import Application from './Aplication';

export default class Main extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="displayAll">
                <TopNav />
                <Application />
                
            </div>
        )
    }
}
