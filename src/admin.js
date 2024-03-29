import React from 'react'

import { firestore } from './firebase'
import AdminRoom from './design/components/AdminRoom/AdminRoom.js'
import AdminTransition from './design/components/AdminTransition/AdminTransition'
import CreateRoom from './createRoom'
import FormApp from './form'
import AdminDisplay from './design/components/AdminDisplay/AdminDisplay'
class Admin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
      roomSnapShot: null,
      roomName: null,
      quiz: null,
      currentQuizNum: 0
    }
  }
  roomNameHandler = (roomName) => {
    this.setState({ roomName: roomName })
  }
  quizHandlerChange = (quizList) => {
    this.setState({ quizList: quizList })
  }
  quizCurrentNumChange = (number) => {
    this.setState({ currentQuizNum: number })
  }
  quizState
  componentWillMount = () => {
    firestore.collection("room")
      .where("createUser", "==", this.props.user.displayName).get().then(snap => {
        this.setState({ roomSnapShot: snap })

        if (this.props.roomName) {
          this.setState({ body: <AdminTransition /> })
        } else if (this.state.roomSnapShot) {
          this.showRoomList()
        } else {
          this.setState({ body: <div></div> })
        }
      })
  }
  moveAdminTransition = () => {
    console.log(this.state)
    this.setState({
      body: <AdminTransition roomName={this.state.roomName} quizCurrentNumChange={this.quizCurrentNumChange} />
    })
  }
  showRoomList = () => {
    this.setState({
      body:
        <div className="container">
          <h1>作成したRoom一覧</h1>
          <ul>
            <AdminRoom
              roomSnapShot={this.state.roomSnapShot}
              user={this.props.user}
              roomNameHandler={this.roomNameHandler}
              quizHandlerChange={this.quizHandlerChange}
              quizCurrentNumChange={this.quizCurrentNumChange} />

          </ul>
        </div>
    })
  }

  onClickCreateRoom = () => {
    this.setState({
      body: <CreateRoom user={this.state.user} />
    })
  }

  onClickCreateQuiz = () => {
    this.setState({
      body: <FormApp uid={this.state.user.l} />
    })
  }

  onClickResult = () => {
    this.setState({
      body: <AdminDisplay roomName={this.state.roomName} currentQuizNum={this.state.currentQuizNum} />
    })
  }

  render = () => {
    console.log(this.state)
    console.log(this.props)

    return (
      <div className="rapper" >
        <header className="adminHeader">
          <nav>
            <ul>
              <li>
                <button onClick={this.showRoomList}>Room一覧</button>
              </li>
              <li>
                <button onClick={this.onClickCreateRoom}>Room作成</button>
              </li>
              <li>
                <button onClick={this.onClickCreateQuiz}>Quiz作成</button>
              </li>
              <li>
                <button onClick={this.moveAdminTransition}>出題画面</button>
              </li>
              <li>
                <button onClick={this.onClickResult}>結果表示画面</button>
              </li>
            </ul>
          </nav>
        </header>
        {this.state.body}
      </div>
    )
  }
}

export default Admin
