import React, { Component } from 'react'
import { firebase } from './firebase'

import { BrowserRouter, Route } from 'react-router-dom'

import Login from './login'
import FormApp from './form'
import QuestionList from './questionList'
import Transition from './transition'
import CreateRoom from './createRoom'
import Quiz from './quiz'
import SelectRoom from './selectRoom'
import Admin from './admin'


import './App.scss'

class App extends Component {
  state = {
    user: null,
    roomName: null,
    questions: null,
  }

  changeUserState = (value) => {
    this.setState({
      user: value
    })
  }

  changeQuizNum = () => {
    this.setState({
      currentQuizNum: 1
    })
  }

  changeRoomNameState = value => {
    this.setState({
      roomName: value
    })
    console.log(this.state)
  }
  changeQuestionState = value => {
    this.setState({
      questions: value
    })
    console.log(this.state)
  }

  showState = () => {
    console.log(this.state.user)
  }

  logout = () => {
    firebase.auth().signOut()
    this.setState({
      user: null
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' render={() => <Login changeUserState={this.changeUserState} />} />
          <Route path='/selectRoom' render={() => <SelectRoom changeSelectedRoomNameState={this.changeRoomNameState} changeQuestionState={this.changeQuestionState} />} />
          <Route path='/quiz' render={() => <Quiz quiz={this.state.questions} roomName={this.state.roomName} userData={this.state.user} />} />
          <Route path='/admin' render={() => <Admin user={this.state.user} roomName={this.state.roomName} />} />


          <Route path='/quizlist' component={QuestionList} />
          <Route path='/transition' render={() => <Transition />} />
          {this.state.user ? <Route path='/form' render={props => <FormApp changeUserState={this.changeUserState} uid={this.state.user.l} />} /> : <div></div>}
          <Route path='/createRoom' render={() => <CreateRoom user={this.state.user} />} />

        </div>
      </BrowserRouter>
    )
  }
}

export default App
