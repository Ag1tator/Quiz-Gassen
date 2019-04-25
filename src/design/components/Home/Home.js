import React, { Component } from 'react'

import './../style.scss'

class Home extends Component {
    render() {
        return (
            <div className="fullScreen">
                <div className="loginForm">
                    <h1>Title</h1>
                    <button className="primaryButton">ログイン</button>
                </div>
            </div>
        )
    }
}

export default Home