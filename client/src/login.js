import React, { Component } from 'react'
import { firebase, firestore } from './firebase'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  uploadUserData = (uid, userData) => {
    console.log("uploadUserData")
    const docRef = firestore.collection('users').doc(uid);
    const setData = docRef.set(userData);
    console.log(setData);
  }
  getUserData = (uid) => {
    const docRef = firestore.collection('users').doc(uid);
    docRef.get().then(doc => {
      console.log(doc)
      if (doc.exists) {
        return doc.data()
      } else {
        return false
      }
    });
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.changeUserState(user)
        this.setState({ user: user })
        console.log(user)
        const data = this.getUserData(user.l)
        if (data) { //データがない時
          const userData = {
            displayName: user.displayName,
            photoURL: user.photoURL,
            createdAt: Date.now()
          }
          console.log("New user!")
          this.uploadUserData(user.l, userData)
        }
      } else {
        this.props.changeUserState(user)
      }
    })
  }

  login() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }

  logout() {
    firebase.auth().signOut()
  }

  render() {
    return (
      <div className="Login">
        <p className="Login-intro">
          UID: {this.state.user && this.state.user.uid}
        </p>
        {this.state.user ? (
          <div>
            <button onClick={this.logout}>Google Logout</button>
          </div>
        ) : (
            <button onClick={this.login}>Google Login</button>
          )}
      </div>
    )
  }
}

export default Login