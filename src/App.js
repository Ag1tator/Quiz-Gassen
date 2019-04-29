import React, { Component } from 'react'
import { firebase } from './firebase'

import { BrowserRouter, Route, Link } from 'react-router-dom'

import Login from './login'
import FormApp from './form'
import QuestionList from './questionList'
import Transition from './transition'
import NewHome from './design/components/Home/Home'
import CreateRoom from './createRoom'
import SelectResolution from './design/components/SelectResolution/SelectResolution'
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
            <li><Link to='/selectRoom'>SelectRoom</Link></li>
            <li><Link to='/design/components/SelectResolution/SelectResolution'>SelectResolution</Link></li>
            <li><Link to='/design/components/Loading/Loading'>Loading</Link></li>
            <li><Link to='/design/components/Image/Image'>Image</Link></li>
            <li><Link to='/design/components/SelectAnswer/SelectAnswer'>SelectAnswers</Link></li>
            <li><Link to='/quiz'>Quiz</Link></li>
            <li><Link to='/admin'>Admin</Link></li>

          </ul>
          <hr />

          <Route exact path='/' component={Home} />
          <Route path='/login' render={() => <Login changeUserState={this.changeUserState} />} />
          <Route path='/quizlist' component={QuestionList} />
          <Route path='/transition' render={() => <Transition />} />
          {this.state.user ? <Route path='/form' render={props => <FormApp changeUserState={this.changeUserState} uid={this.state.user.l} />} /> : <div></div>}
          <Route path='/design/components/Home/Home' component={NewHome} />
          <Route path='/createRoom' render={() => <CreateRoom user={this.state.user} />} />
          <Route path='/quiz' render={() => <Quiz quiz={this.state.questions} roomName={this.state.roomName} userData={this.state.user} />} />


          <Route path='/selectRoom' render={() => <SelectRoom changeSelectedRoomNameState={this.changeRoomNameState} changeQuestionState={this.changeQuestionState} />} />
          <Route path='/design/components/SelectResolution/SelectResolution' component={SelectResolution} />
          <Route path='/design/components/Image/Image' component={Image} />
          <Route path='/selectRoom' render={() => <SelectRoom changeSelectedRoomNameState={this.changeRoomNameState} changeQuestionState={this.changeQuestionState} />} />
          <Route path='/design/components/SelectResolution/SelectResolution' component={SelectResolution} />
          <Route path='/admin' render={() =>
            <Admin user={this.state.user} roomName={this.state.roomName} />
          } />
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
