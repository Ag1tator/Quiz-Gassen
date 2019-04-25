import React, { Component } from 'react'

import './../style.scss'

class Quiz extends Component {
    render() {
        return (
            <div className="fullScreen">
                <div className="quizForm">
                    <div className="quizTopRapper">
                        <div className="quizTop">
                            <h1>問題</h1>
                            <h2>平成3年</h2>
                        </div>
                    </div>
                    <ul className="quizList">
                        <li><a>めっちゃ小さい</a></li>
                        <li><a>小さい</a></li>
                        <li><a>ちょっと小さい</a></li>
                        <li><a>ふつう</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Quiz