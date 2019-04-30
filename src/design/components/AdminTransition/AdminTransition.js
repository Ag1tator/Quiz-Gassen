import React, { Component } from 'react'
import { firestore } from '../../../firebase'

import './../style.scss'

class AdminTransition extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            roomName: this.props.roomName,
            quizList: this.props.quizList,
            result: [],
        }
    }
    componentWillMount = () => {
        firestore.collection('room').doc(this.state.roomName).onSnapshot(snap => {
            const roomData = snap.data()
            this.setState({ roomData: roomData })
            this.props.quizCurrentNumChange(roomData.currentQuizNum)
            console.log(this.state.roomData)
        })

    }
    collectAnswer = () => {
        let answerList = [];
        console.log(this.state.result)
        for (let i = 0; i < this.state.quizList.length; i++) {
            firestore.collection('room').doc(this.state.roomName).collection('quiz' + i).get().then(snap => {
                snap.forEach(doc => {
                    console.log(doc.data())
                    const currentState = this.state.result
                    currentState.push(doc.data())
                    this.setState({ result: currentState })
                });
            })

        }
    }
    onClick = () => {
        this.collectAnswer()
        console.log("clicked!", this.state.roomData.currentQuizNum + 1, this.state.roomData.quiz.length)
        let currentData = this.state.roomData

        if (this.state.roomData.isCheckAnswer) {
            currentData.isCheckAnswer = false;
            currentData.isShowImage = false;
            currentData.isSelectResolution = false;
            currentData.currentQuizNum++;
            if (this.state.roomData.currentQuizNum === this.state.roomData.quiz.length) { // おわったとき
                alert("しゅ〜りょ〜")

                currentData.isResult = true;
            }
        } else if (this.state.roomData.isShowImage) {
            currentData.isCheckAnswer = true;
        } else if (this.state.roomData.isSelectResolution) {
            currentData.isShowImage = true;
        } else if (this.state.roomData.isWaiting) {
            currentData.isSelectResolution = true
        }

        firestore.collection('room').doc(this.state.roomName).set(currentData)

    }
    getCurrentButton = () => {
        //isSelectResolution => isShowImage => isCheckAnswer => isResult
        console.log(this.state.roomData)
        if (this.state.roomData.isCheckAnswer) {
            if (this.state.roomData.currentQuizNum + 1 === this.state.roomData.quiz.length) { // おわったとき
                return <div>最終結果を表示する</div>
            }
            return <div>次の問題に進む</div>
        } else if (this.state.roomData.isShowImage) {
            return <div>答えを表示する</div>
        } else if (this.state.roomData.isSelectResolution) {
            return <div>{this.state.roomData.currentQuizNum + 1}問目を出題する</div>
        } else if (this.state.roomData.isWaiting)
            return <div>{this.state.roomData.currentQuizNum + 1}問目の解像度選択を始める</div>
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
