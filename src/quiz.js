import React from 'react'
import { firestore } from './firebase';
import SelectResolution from './design/components/SelectResolution/SelectResolution'
import Loading from './design/components/Loading/Loading'
import Image from './design/components/Image/Image'
import SelectAnswer from './design/components/SelectAnswer/SelectAnswer'
import Result from './design/components/Result/Result.js'
import Answer from './design/components/Answer/Answer'

class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      roomName: null,
      quiz: null,
      totalQuizCount: null,
      currentQuizNum: null,
      userData: null,
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
    let isCollect = false;
    if (this.state.quiz[this.state.currentQuizNum].answerNum === number) {
      isCollect = true
    }
    firestore.collection('room').doc(this.state.roomName).collection(this.state.userData.displayName).doc('quiz' + this.state.currentQuizNum).set({
      answer: number,
      isCollect: isCollect,
      submitAt: Date.now()
    })
    this.setState({ isCollect: isCollect })
    console.log(this.state)
  }
  selectResolution = (number) => {
    this.setState({
      resolutionNum: number
    })
  }

  changeSelectAnswer = () => {
    this.setState({ render: <SelectAnswer answer={this.state.quiz[this.state.currentQuizNum].answer} roomName={this.state.roomName} userData={this.state.userData} submitAnswer={this.submitAnswer} /> })
  }


  componentDidMount = () => {
    firestore.collection('room').doc(this.state.roomName).onSnapshot(snap => {
      console.log(snap.data())
      const data = snap.data()
      const currentQuiz = this.state.quiz[this.state.currentQuizNum]
      this.setState({ currentQuizNum: data.currentQuizNum })

      if (data.isResult) {   //順位出す
        this.setState({
          render: <Result result={data.result} userData={this.state.userData} />
        })
      } else if (data.isCheckAnswer) {    //正解不正解
        this.setState({
          render: <Answer
            isCollect={this.state.isCollect}
            image={currentQuiz.imageSrc}
            description={currentQuiz.description}
            answer={currentQuiz.answer[this.state.quiz[this.state.currentQuizNum.answerNum]]} />
        })
      } else if (data.isShowImage) {    //画像表示
        this.setState({ render: <Image image={this.state.quiz[this.state.currentQuizNum].imageSrc} resolutionNum={this.state.resolutionNum} changeSelectAnswer={this.changeSelectAnswer} /> })
      } else if (data.isSelectResolution) {     //解像度選択
        this.setState({ render: <SelectResolution selectResolution={this.selectResolution} /> }) //解像度を選択したら<Loading />にとばす
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
