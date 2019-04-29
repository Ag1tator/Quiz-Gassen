import React, { Component } from 'react'
import { firestore } from '../../../firebase'

import './../style.scss'

class AdminTransition extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            roomName: this.props.roomName,
            roomData: null,
        }
    }
    componentWillMount = () => {
        firestore.collection('room').doc(this.state.roomName).onSnapshot(snap => {
            const roomData = snap.data()
            this.setState({ roomData: roomData })
            console.log(this.state.roomData)
        })

    }
    onClick = () => {
        console.log("clicked!", this.state.roomData.currentQuizNum + 1, this.state.roomData.quiz.length)
        let currentData = this.state.roomData
        if (this.state.roomData.currentQuizNum + 1 === this.state.roomData.quiz.length) { // おわったとき
            alert("しゅ〜りょ〜")
            currentData.isResult = true;
        } else {
            if (this.state.roomData.isCheckAnswer) {
                currentData.isCheckAnswer = false;
                currentData.isShowImage = false;
                currentData.currentQuizNum++;
            } else if (this.state.roomData.isShowImage) {
                currentData.isCheckAnswer = true;
            } else if (this.state.roomData.isSelectResolution) {
                currentData.isShowImage = true;
            }
        }
        firestore.collection('room').doc(this.state.roomName).set(currentData)

    }
    getCurrentButton = () => {
        //isSelectResolution => isShowImage => isCheckAnswer => isResult
        console.log(this.state.roomData)
        if (this.state.roomData.isResult) {
            return <div>結果を表示する</div>
        } else if (this.state.roomData.isCheckAnswer) {
            return <div>答えを表示する</div>
        } else if (this.state.roomData.isShowImage) {
            return <div>{this.state.roomData.currentQuizNum}問目を出題する</div>
        } else {//(this.roomData.isSelectResolution)
            return <div>{this.state.roomData.currentQuizNum}問目の解像度選択を始める</div>
        }
    }
    render() {
        if (this.state.roomData) {
            return (
                <div className="container">
                    <h1>{this.state.roomName}</h1>
                    <div className="buttonRapper">
                        <button className="primaryButton"
                            onClick={this.onClick}>
                            {this.getCurrentButton()}
                        </button>
                    </div>
                </div>
            )
        } else {
            return (<div></div>)
        }
    }
}

export default AdminTransition
