import React, { Component } from 'react'

import './../style.scss'
import Loading from '../Loading/Loading';

class Answer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onLoading: false
        }
    }
    loadingSwitchHandler = () => {
        this.setState({
            onLoading: !this.state.onLoading
        })
    }
    render() {
        let answer = null;
        if (this.props.isCollect) {
            answer = <div className="right">正解</div>
        } else {
            answer = <div className="wrong">不正解</div>
        }
        if (this.state.onLoading) {
            return (
                <Loading />
            )
        } else {
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
                        <button className="primaryButton" onClick={this.loadingSwitchHandler}>次へ</button>
                    </div>
                </div>
            )
        }
    }

}

export default Answer