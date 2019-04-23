import React, { Component } from 'react'
import { firebase, firestore } from './firebase'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  createNewUser = (uid, userData) => {
    const docRef = firestore.collection('users').doc(uid);
    docRef.set(userData);
  }
  getUserData = (uid) => {
    const docRef = firestore.collection('users').doc(uid);
    docRef.get().then(doc => {
      if (doc.exists) {
        return doc.data()
      } else {
        return false
      }
    });
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.changeUserState(user)
      if (user) {
        this.setState({ user: user })
        const data = this.getUserData(user.l)
        if (data) { //データがない時
          const userData = {
            displayName: user.displayName,
            photoURL: user.photoURL,
            createdAt: Date.now()
          }
          this.createNewUser(user.l, userData)
        }
      }
    })
  }

  login() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }


  render() {
    return (
      <div className="Login">
        <button onClick={this.login}>Google Login</button>
      </div>
    )
  }
}

export default Login
