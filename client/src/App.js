import React, { Component } from 'react'
import { firebase } from './firebase'
import Login from './login'
import UserData from './UserData'
import './App.css'

class App extends Component {
  state = {
    user: null
  }
  changeUserState = (value) => {
    this.setState({
      user: value
    })
  }
  showState = () => {
    console.log(this.state.user)
  }

  logout() {
    firebase.auth().signOut()
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? (
          <div>
            <UserData user={this.state.user}></UserData>
            <button onClick={this.logout}>Google Logout</button>
          </div>
        ) : (
            <div>
              <Login user={this.state.user} changeUserState={this.changeUserState}></Login>
            </div>
          )}
      </div>
    )
  }
}

export default App