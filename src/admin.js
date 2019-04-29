import React from 'react'

import { firestore } from './firebase'
import AdminRoom from './design/components/AdminRoom/AdminRoom.js'
import AdminTransition from './design/components/AdminTransition/AdminTransition'

class Admin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
      roomSnapShot: null,
      roomName: null,
      quiz: null,
    }
  }
  roomNameHandler = (roomName) => {
    this.setState({ roomName: roomName })
  }
  quizHandlerChange = (quizList) => {
    this.setState({ quizList: quizList })

  }
  componentWillMount = () => {
    firestore.collection("room")
      .where("createUser", "==", this.props.user.displayName).get().then(snap => {
        this.setState({ roomSnapShot: snap })

        if (this.props.roomName) {
          this.setState({ body: <AdminTransition /> })
        } else if (this.state.roomSnapShot) {
          this.setState({
            body:
              <div className="container">
                <h1>作成したRoom一覧</h1>
                <ul>
                  <AdminRoom roomSnapShot={this.state.roomSnapShot} user={this.props.user} roomNameHandler={this.roomNameHandler} quizHandlerChange={this.quizHandlerChange} />
                </ul>
              </div>
          })
        } else {
          this.setState({ body: <div></div> })
        }
      })
  }
  moveAdminTransition = () => {
    console.log(this.state)
    this.setState({
      body: <AdminTransition roomName={this.state.roomName} />
    })
  }

  render = () => {
    console.log(this.state)
    console.log(this.props)
    let body = null;

    return (
      <div className="rapper" >
        <header className="adminHeader">
          <nav>
            <ul>
              <li>
                <button >Room一覧</button>
              </li>
              <li>
                <button>Room作成</button>
              </li>
              <li>
                <button>Quiz作成</button>
              </li>
              <li>
                <button onClick={this.moveAdminTransition}>画面</button>
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