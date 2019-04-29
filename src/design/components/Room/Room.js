import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { firestore } from '../../../firebase'
import './../style.scss'


class Room extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            list: null
        }
        let list = [];
        this.props.snap.forEach(doc => {
            list.push(doc.data())
        })
        this.setState({ roomList: list })
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

    onClick = (e) => {
        console.log(e.target.className)
        const className = e.target.className.split('-')
        const roomData = this.state.data[className[1]]
        this.getQuizList(roomData.quiz).then(quizList => {
            this.props.quizHandlerChange(quizList)
            this.props.selectedRoomHandlerChange(roomData.roomName)
            this.props.history.push('/quiz')
        })
    }
    componentDidMount = () => {
        let list = [];
        let index = 0;
        let data = [];
        if (this.props.snap !== null) {
            this.props.snap.forEach(doc => {
                const className = "room-" + index++;
                data.push(doc.data())
                list.push(<li><button className={className} onClick={this.onClick}>{doc.data().roomName}</button></li>)
            })
            this.setState({ data: data, list: list })
        }

    }
    render() {
        console.log(this.state)
        return (
            <div className="fullScreen">
                <header>
                    <div className="titleContainer">
                        クイズ部屋一覧
                    </div>
                </header>
                <ul className="roomList">
                    {this.state.list}
                </ul>
            </div>
        )
    }
}

export default withRouter(Room)
