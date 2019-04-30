import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2';

import { firestore } from '../../../firebase'

import './../style.scss'

class AdminDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            roomName: this.props.roomName,
            roomData: null,
            currentQuizNum: 0,
            collect: 0,
            inCollect: 0,
            list: [],
            top3: []

        }
    }

    componentWillMount = () => {

        console.log(this.state.currentQuizNum)
        const answerRef = firestore.collection('room').doc(this.props.roomName).collection('quiz' + this.state.currentQuizNum).orderBy("submitAt", "asc")
        answerRef.onSnapshot(snap => {
            snap.docChanges().forEach(change => {
                const answerDataChange = change.doc.data()
                if (change.type === "added") {
                    console.log(answerDataChange.isCollect)
                    if (answerDataChange.isCollect === true) {
                        const list = this.state.list
                        this.setState({ collect: this.state.collect + 1 })
                        list.push({
                            displayName: answerDataChange.displayName,
                            imageSrc: answerDataChange.imageSrc
                        })
                        if (this.state.list.length < 3) {
                            let top3 = this.state.top3
                            const i = this.state.list.length

                            const className = ['borderGold', 'borderSilver', 'borderBronze']
                            const alt = ['1st', '2nd', '3rd']
                            top3.push(
                                <li>
                                    <img className={className[this.state.list.length]} src={answerDataChange.imageSrc} alt={alt[i]}></img>
                                    <div>{answerDataChange.displayName}</div>
                                    <div><span className="number">{i}</span>{i === 1 ? "st" : "nd"}</div>
                                </li>
                            )
                            this.setState({ top3: top3 })
                        }

                    } else {
                        this.setState({ inCollect: this.state.inCollect + 1 })
                    }
                    //this.setState({ answerData: answerData })
                    console.log(answerDataChange)
                }
            })
        })
    }
    /*
        makeTop3 = (list) => {
    
            let top3 = [];
            let max = 3;
            if (list.length < 3) {
                max = list.length
            }
            for (let i = 0; i < max; i++) {
                console.log(list[i])
    
    
                top3.push(
                    <li>
                        <img className={className[i]} src={userData.imageSrc} alt={alt[i]}></img>
                        <div>{userData.displayName}</div>
                        <div><span className="number">{i + 1}</span>{i + 1 === 1 ? "st" : "nd"}</div>
                    </li>
                )
            }
            console.log(top3)
            this.setState({
                top3: top3
            })
        }
    */


    render() {
        console.log(this.state)
        const data = {
            labels: [
                '正解',
                '不正解',
            ],
            datasets: [{
                data: [this.state.collect, this.state.inCollect],
                backgroundColor: [
                    '#FF6C6C',
                    '#179DE9',
                    '#616161'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ]
            }]
        };

        return (
            <div className="adminFullScreen">
                <div className="titleRapper">
                    <h1>1問目</h1>
                </div>
                <main className="resolutionData">
                    <div className="rateRapper">
                        <h2>正答率</h2>
                        <Doughnut data={data}></Doughnut>
                    </div>
                    <div className="answerSpeedRapper">
                        <h2>正解したはやさ</h2>
                        <ul className="top3 adminTop3">
                            {this.state.top3}
                        </ul>
                    </div>
                </main>
            </div>
        )
    }
}



export default AdminDisplay
