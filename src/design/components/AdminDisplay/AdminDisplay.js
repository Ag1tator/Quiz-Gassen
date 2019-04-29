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
            currentQuizNum: 0
        }
    }
    componentwillMount = () => {
        firestore.collection('room').doc(this.state.roomName).onSnapshot(snap => {
            console.log("room", snap.data())

        })
        firestore.collection('room').doc(this.state.roomName).collection('quiz' + this.state.currentQuizNum).onSnapshot(snap => {
            console.log("quiz" + this.state.currentQuizNum, snap.data())
        })
    }
    render() {
        const data = {
            labels: [
                '正解',
                '不正解',
                '未回答'
            ],
            datasets: [{
                data: [300, 50, 100],
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
                            <li>
                                <img className="borderGold" src="asasigure.jpg" alt="1st"></img>
                                <div>asasigure_ice</div>
                                <div><span className="number">1</span>st</div>
                            </li>
                            <li>
                                <img className="borderSilver" src="asasigure.jpg" alt="1st"></img>
                                <div>asasigure_ice</div>
                                <div><span className="number">2</span>st</div>
                            </li>
                            <li>
                                <img className="borderBronze" src="asasigure.jpg" alt="1st"></img>
                                <div>asasigure_ice</div>
                                <div><span className="number">3</span>st</div>
                            </li>
                        </ul>
                    </div>
                </main>
            </div>
        )
    }
}

export default AdminDisplay
