import React, { Component } from 'react'

import './../style.scss'

class Home extends Component {
    render() {
        return (
            <div className="fullScreen">
                <div className="loginForm">
                    <h1>Title</h1>
                    <a className="primaryButton">ログイン</a>
                </div>
            </div>
        )
    }
}

export default Home