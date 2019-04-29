import React, { Component } from 'react'

import './../style.scss'

class Answer extends Component {

    render() {
        let answer = null;
        if (this.props.isCollect) {
            answer = <div className="right">正解</div>
        } else {
            answer = <div className="wrong">不正解</div>
        }
        return (
            <div className="fullScreen">
                <div className="answerRapper">
                    <div className="answer">
                        <img src={this.props.image} alt="hogehoge"></img>
                        {answer}
                    </div>
                </div>
                <div className="commentary">
                    <h1>{this.props.answer}</h1>
                    <div className="description">
                        {this.props.description}
                    </div>
                    <button className="primaryButton">次へ</button>
                </div>
            </div>
        )
    }
}

export default Answer