import React, { Component } from 'react'

import './../style.scss'

class Answer extends Component {
  state = {
    changeScreen: false,
    checkbutton0: false,
    checkbutton1: false,
    checkbutton2: false,
    checkbutton3: false,
  }

  changeButton0State = () => {
    this.setState({
      changeScreen: true,
      checkbutton1: true,
      checkbutton2: true,
      checkbutton3: true,
    })
  }

  changeButton1State = () => {
    this.setState({
      changeScreen: true,
      checkbutton0: true,
      checkbutton2: true,
      checkbutton3: true,
    })
  }

  changeButton2State = () => {
    this.setState({
      changeScreen: true,
      checkbutton0: true,
      checkbutton1: true,
      checkbutton3: true,
    })
  }

  changeButton3State = () => {
    this.setState({
      changeScreen: true,
      checkbutton0: true,
      checkbutton1: true,
      checkbutton2: true,
    })
  }

    render() {
        return (
            <div className={this.state.changeScreen ? "fullScreen backGroundGray": "fullScreen"}>
                <div className="quizForm">
                    <div className="quizTopRapper">
                        <div className="quizTop">
                            <h1 className={this.state.changeScreen ? "none": ""}>自分の答えを<br />選択！</h1>
                            <div className={this.state.changeScreen ? "loaderRapper": "loaderRapper none"}>
                                <h1>正解発表待ち</h1>
                                <div className="loader">Loading...</div>
                            </div>
                        </div>
                    </div>
                    <ul className="quizList">
                        <li className={this.state.checkbutton0 ? "hidden": ""}><button onClick={this.changeButton0State}>ソーダ</button></li>
                        <li className={this.state.checkbutton1 ? "hidden": ""}><button onClick={this.changeButton1State}>カルピス</button></li>
                        <li className={this.state.checkbutton2 ? "hidden": ""}><button onClick={this.changeButton2State}>R1</button></li>
                        <li className={this.state.checkbutton3 ? "hidden": ""}><button onClick={this.changeButton3State}>オレンジジュース</button></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Answer
