import React, { Component } from 'react'


import './../style.scss'

class selectResolution extends Component {
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
        console.log("push button 0")
        this.props.selectResolution(0)
    }

    changeButton1State = () => {
        this.setState({
            changeScreen: true,
            checkbutton0: true,
            checkbutton2: true,
            checkbutton3: true,
        })
        console.log("push button 1")
        this.props.selectResolution(1)

    }

    changeButton2State = () => {
        this.setState({
            changeScreen: true,
            checkbutton0: true,
            checkbutton1: true,
            checkbutton3: true,
        })
        console.log("push button 2")
        this.props.selectResolution(2)


    }

    changeButton3State = () => {
        this.setState({
            changeScreen: true,
            checkbutton0: true,
            checkbutton1: true,
            checkbutton2: true,
        })
        console.log("push button 3")
        this.props.selectResolution(3)

    }
    render() {
        return (
            <div className={this.state.changeScreen ? "fullScreen backGroundGray" : "fullScreen"}>
                <div className="quizForm">
                    <div className="quizTopRapper">
                        <div className="quizTop">
                            <h1 className={this.state.changeScreen ? "none" : ""}>解像度を選択してね！</h1>
                            <div className={this.state.changeScreen ? "loaderRapper" : "loaderRapper none"}>
                                <h1>クイズの開始を待っています</h1>
                                <div className="loader">Loading...</div>
                            </div>
                        </div>
                    </div>
                    <ul className="quizList">
                        <li className={this.state.checkbutton0 ? "hidden" : ""}>
                            <button onClick={this.changeButton0State}>１G</button>
                        </li>
                        <li className={this.state.checkbutton1 ? "hidden" : ""}>
                            <button onClick={this.changeButton1State}>2G</button>
                        </li>
                        <li className={this.state.checkbutton2 ? "hidden" : ""}>
                            <button onClick={this.changeButton2State}>3G</button>
                        </li>
                        <li className={this.state.checkbutton3 ? "hidden" : ""}>
                            <button onClick={this.changeButton3State}>4G</button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default selectResolution
