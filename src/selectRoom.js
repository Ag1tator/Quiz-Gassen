import React, { Component } from 'react'
import { firestore } from './firebase'
import Room from './design/components/Room/Room'

class selectRoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      snap: null,
      selectedRoom: null,


    }
  }
  changeSelectedRoomState = (value) => {
    this.setState({ selectedRoom: value })
  }

  componentDidMount = () => {
    firestore.collection('room').get().then(snap => {
      this.setState({ snap: snap })
    }).catch(err => {
      console.log("Error", err)
    })
  }

  render() {
    console.log(this.state.snap)
    return (
      <div>
        {this.state.snap ? < Room snap={this.state.snap} quizHandlerChange={this.props.changeQuestionState} selectedRoomHandlerChange={this.props.changeSelectedRoomNameState} /> : <div></div>}
      </div>
    )
  }
}
export default selectRoom