import React, { Component } from 'react'

import './../style.scss'

class Answer extends Component {
    render() {
        return (
            <div className="fullScreen">
                <div className="answerRapper">
                    <div className="answer">
                        <img src=""></img>
                        <div className="rightOrWrong">正解</div>
                    </div>
                </div>
                <div className="commentary">
                    <h1>カルピス</h1>
                    <div className="description">
                        カルピスは平成３年に初めて発売されています。味は当時から全く変わっていないそうです。カルピスは平成３年に初めて発売されています。味は当時から全く変わっていないそうです。
                    </div>
                    <button className="primaryButton">次へ</button>
                </div>
            </div>
        )
    }
}

export default Answer