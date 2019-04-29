import React, { Component } from 'react'
import { firestore } from '../../../firebase'

import './../style.scss'

class AdminRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            roomData: null,
            list: [],
            roomName: null
        }
    }

    getQuizList = async (list) => {
        let data = []
        await Promise.all(list.map(async (name, i) => {
            firestore.collection('quiz').doc(name).get().then(snap => {
                data.push(snap.data())
            })
        }
        ))
        return data
    }

    getRoomInfo = (e) => {
        console.log(e.target.className)
        const className = e.target.className.split('-')
        const roomData = this.state.roomData[className[1]]
        this.props.quizHandlerChange(roomData.quiz)
        this.props.roomNameHandler(roomData.roomName)
    }
    getQuizList = async (list) => {
        let data = []
        await Promise.all(list.map(async (name, i) => {
            firestore.collection('quiz').doc(name).get().then(snap => {
                data.push(snap.data())
            })
        }
        ))
        return data
    }

    componentDidMount = () => {
        console.log("componentDidMount", this.props)
        let list = []
        let roomList = [];
        let index = 0;

        if (this.props.roomSnapShot !== null) {
            this.props.roomSnapShot.forEach(doc => {
                const data = doc.data()
                const className = "question-" + index++;
                roomList.push(data)
                list.push(
                    <li>
                        <button
                            className={className}
                            onClick={this.getRoomInfo}>
                            {data.roomName}
                        </button>
                    </li>
                )
            })
            this.setState({ roomData: roomList, list: list })
        }
    }
    render() {
        console.log(this.state)
        return this.state.list
    }
}

export default AdminRoom
