import React, { Component } from 'react'

import './../style.scss'

class Home extends Component {
    render() {
        return (
            <div className="fullScreen">
                <div className="loginForm">
                    <img src="logo.png"></img>
                    {this.props.user
                      ? <button onClick={this.props.logout} className="primaryButton">Twitter Logout</button>
                      : <button onClick={this.props.login} className="primaryButton">Twitter Login</button>
                    }
                </div>
            </div>
        )
    }
}

export default Home
