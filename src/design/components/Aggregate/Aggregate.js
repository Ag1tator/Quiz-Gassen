import React, { Component } from 'react'

import './../style.scss'

class Aggregate extends Component {
    render() {
        return (
            <div className="fullScreen loadBackground">
                <div className="loaderRapper">
                    <h1>集計中</h1>
                    <div className="loader">Loading...</div>
                </div>
            </div>
        )
    }
}

export default Aggregate