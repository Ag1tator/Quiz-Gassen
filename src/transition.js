import React, { Component } from 'react'
import { firestore } from './firebase'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    firestore.collection('room').doc("TEST").onSnapshot(snap => {
      console.log(snap.data())
    })
    return (
      <div>Transition</div>
    )
  }
}

export default Login