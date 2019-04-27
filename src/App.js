import React, { Component } from 'react'
import { firebase } from './firebase'

import { BrowserRouter, Route, Link } from 'react-router-dom'

import Login from './login'
import FormApp from './form'
import QuestionList from './questionList'
import Transition from './transition'
import NewHome from './design/components/Home/Home'
import CreateRoom from './createRoom'
import Room from './design/components/Room/Room'
import SelectResolution from './design/components/SelectResolution/SelectResolution'
import Loading from './design/components/Loading/Loading'
import Image from './design/components/Image/Image'
import SelectAnswer from './design/components/SelectAnswer/SelectAnswer'
import Quiz from './quiz'
import './App.scss'

class App extends Component {
  state = {
    quiz: [
      {
        answer: [
          "スイフト",
          "プリウス",
          "アクア",
          "スイフトスポーツ"],
        answerNum: 1,
        body: "この車は？",
        description: "スイフトスポーツです。",
        imageURL: "https://firebasestorage.googleapis.com/v0/b/ca-hackathon-f0cb4.appspot.com/o/quiz%2F20190425171731?alt=media&token=269d1cbb-3c42-451b-9ab7-f21019795541"
      },
      {
        answer: [
          "1998",
          "1999",
          "2000",
          "2001",
        ],
        answerNum: 1,
        body: "平成10年って、西暦何年？",
        description: "1998年です。",
        imageURL: "https://firebasestorage.googleapis.com/v0/b/ca-hackathon-f0cb4.appspot.com/o/quiz%2F20190426155650?alt=media&token=3a900160-ed50-456f-b1b1-11d98079829a"
      }
    ],
    roomName: "ささもと",
    currentQuizNum: 0
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

  showState = () => {
    console.log(this.state.user)
  }

  logout() {
    firebase.auth().signOut()
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>Login</Link></li>

            <li><Link to='/quizlist'>Quiz list</Link></li>
            <li><Link to='/transition'>transition</Link></li>
            <li><Link to='/design/components/Home/Home'>NewHome</Link></li>
            {this.state.user ? <div><li><Link to='/form'>New Quiz</Link></li>
              <li><Link to='/createRoom'>CreateRoom</Link></li></div> : <div></div>}
            <li><Link to='/design/components/Room/Room'>Room</Link></li>
            <li><Link to='/design/components/SelectResolution/SelectResolution'>SelectResolution</Link></li>
            <li><Link to='/design/components/Loading/Loading'>Loading</Link></li>
            <li><Link to='/design/components/Image/Image'>Image</Link></li>
            <li><Link to='/design/components/SelectAnswer/SelectAnswer'>SelectAnswers</Link></li>
            <li><Link to='/quiz'>Quiz</Link></li>

          </ul>
          <hr />

          <Route exact path='/' component={Home} />
          <Route path='/login' render={() => <Login changeUserState={this.changeUserState} />} />
          <Route path='/quizlist' component={QuestionList} />
          <Route path='/transition' render={() => <Transition />} />
          {this.state.user ? <Route path='/form' render={props => <FormApp changeUserState={this.changeUserState} uid={this.state.user.l} />} /> : <div></div>}
          <Route path='/design/components/Home/Home' component={NewHome} />
          <Route path='/createRoom' render={() => <CreateRoom user={this.state.user} />} />
          <Route path='/quiz' render={() => <Quiz quiz={this.state.quiz} roomName={this.state.roomName} />} />
          <Route path='/design/components/Room/Room' component={Room} />
          <Route path='/design/components/SelectResolution/SelectResolution' render={props => <SelectResolution quiz={this.state.quiz[0].body} />} />
          <Route path='/design/components/Loading/Loading' component={Loading} />
          <Route path='/design/components/Image/Image' render={props => <Image image={this.state.quiz[0].imageURL} />} />
          <Route path='/design/components/SelectAnswer/SelectAnswer' render={props => <SelectAnswer answer={this.state.quiz[0].answer} />} />
        </div>
      </BrowserRouter>
    )
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>俺の名はらっふぃ</p>
  </div>
)


export default App
