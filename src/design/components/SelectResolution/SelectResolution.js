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
                        <li><button>めっちゃ小さい</button></li>
                        <li><button>小さい</button></li>
                        <li><button>ちょっと小さい</button></li>
                        <li><button>ふつう</button></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Quiz