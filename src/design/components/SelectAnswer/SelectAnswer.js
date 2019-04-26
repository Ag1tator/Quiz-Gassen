import React, { Component } from 'react'

import './../style.scss'

class Answer extends Component {
  constructor(props){
    super(props)
    this.state = {
      fullScreen: false,
      checkbutton: false
    }
  }

  changeButtonState = () => {
    this.setState({
      checkbutton: true
    })
  }

    render() {
        return (
            <div className={this.state.fullScreen ? "fullScreen": "fullScreen backGroundGray"}>
                <div className="quizForm">
                    <div className="quizTopRapper">
                        <div className="quizTop">
                            <h1>自分の答えを<br />選択！</h1>
                            <div className="loaderRapper none">
                                <h1>正解発表待ち</h1>
                                <div className="loader">Loading...</div>
                            </div>
                        </div>
                    </div>
                    <ul className="quizList">
                        <li className={this.state.checkbutton ? "hidden": ""}><button onClick={this.changeButtonState}>ソーダ</button></li>
                        <li className={this.state.checkbutton ? "hidden": ""}><button onClick={this.changeButtonState}>カルピス</button></li>
                        <li className={this.state.checkbutton ? "hidden": ""}><button onClick={this.changeButtonState}>R1</button></li>
                        <li className={this.state.checkbutton ? "hidden": ""}><button onClick={this.changeButtonState}>オレンジジュース</button></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Answer
