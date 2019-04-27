import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import './../style.scss'

class Quiz extends Component {
    render() {
        return (
            <div className="fullScreen">
                <div className="quizForm">
                    <div className="quizTopRapper">
                        <div className="quizTop">
                            <h1>問題</h1>
                            <h2>{this.props.quiz}</h2>
                        </div>
                    </div>
                    <ul className="quizList">
                        <li><Link to='/design/components/Loading/Loading'>めっちゃ小さい</Link></li>
                        <li><Link to='/design/components/Loading/Loading'>小さい</Link></li>
                        <li><Link to='/design/components/Loading/Loading'>ちょっと小さい</Link></li>
                        <li><Link to='/design/components/Loading/Loading'>ふつう</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Quiz
