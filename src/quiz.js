import React from 'react'
import { firestore } from './firebase';
import SelectResolution from './design/components/SelectResolution/SelectResolution'
import Loading from './design/components/Loading/Loading'
import Image from './design/components/Image/Image'
import SelectAnswer from './design/components/SelectAnswer/SelectAnswer'
import Result from './design/components/Result/Result.js'
class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      roomName: null,
      quiz: null,
      totalQuizCount: null,
      currentQuizNum: null,
      userData: null
    }
  }
  componentWillMount = () => {
    console.log(this.props)
    const totalQuizCount = this.props.quiz.length
    this.setState({
      userData: this.props.userData,
      roomName: this.props.roomName,
      quiz: this.props.quiz,
      totalQuizCount: totalQuizCount,
      currentQuizNum: 0,
    })
  }

  submitAnswer = (number) => {
    console.log(number, this.state.userData)
    firestore.collection('room').doc(this.state.roomName).collection(this.state.userData.displayName).doc('quiz' + this.state.currentQuizNum).set({
      answer: number
    })
  }
  selectResolution = (number) => {
    this.setState({
      selectedResolution: number
    })
  }

  changeSelectAnswer = () => {
    this.setState({ render: <SelectAnswer answer={this.state.quiz[this.state.currentQuizNum].answer} roomName={this.state.roomName} userData={this.state.userData} submitAnswer={this.submitAnswer} /> })
  }


  componentDidMount = () => {
    firestore.collection('room').doc(this.state.roomName).onSnapshot(snap => {
      console.log(snap.data())
      const data = snap.data()
      this.setState({ currentQuizNum: data.currentQuizNum })
      if (data.isQuizFinish) {
        this.setState({ render: <div>Finish</div> })
      } else if (data.isResult) {
        this.setState({
          render: <Result result={data.result} />
        })
      }
      else if (data.isSelectResolution) {
        this.setState({ render: <SelectResolution selectResolution={this.selectResolution} /> }) //解像度を選択したら<Loading />にとばす
      } else if (data.isWaiting) {
        this.setState({ render: <Loading /> })
      } else if (data.isShowImage) {
        this.setState({ render: <Image image={this.state.quiz[this.state.currentQuizNum].imageSrc} changeSelectAnswer={this.changeSelectAnswer} /> })
      } else if (data.isQuizStart) {
        this.setState({ render: <SelectAnswer answer={this.state.quiz[this.state.currentQuizNum].answer} roomName={this.state.roomName} userData={this.state.userData} submitAnswer={this.submitAnswer} /> })
      } else if (data.isFinish) {
        this.setState({ render: <Loading /> })
      }
      console.log(this.state)
    })
  }
  render = () => {
    console.log(this.state);
    return (
      <div>{this.state.render}</div>
    )
  }
}

export default Quiz
