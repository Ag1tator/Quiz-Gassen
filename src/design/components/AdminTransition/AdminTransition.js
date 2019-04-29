import React, { Component } from 'react'
import { firestore } from '../../../firebase'

import './../style.scss'

class AdminTransition extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            roomName: this.props.roomName,
            roomData: { currentQuizNum: 0 },
        }
    }
    componentWillMount = () => {
        firestore.collection('room').doc(this.state.roomName).onSnapshot(snap => {
            const roomData = snap.data()
            this.setState({ roomData: roomData })
        })

    }
    render() {
        console.log(this.props.image)

        return (
            <div className="container">
                <h1>{this.state.roomName}</h1>
                <div className="buttonRapper">
                    <button className="primaryButton">{this.state.roomData.currentQuizNum}問目を出題する</button>
                </div>
            </div>
        )
    }
}

export default AdminTransition
