import React from 'react'
import { firestore } from './firebase';
import SelectResolution from './design/components/SelectResolution/SelectResolution'
import Loading from './design/components/Loading/Loading'
import Image from './design/components/Image/Image'
import SelectAnswer from './design/components/SelectAnswer/SelectAnswer'
class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      roomName: null,
      quiz: null,
      totalQuizCount: null,
      currentQuizNum: null
    }
  }
  componentWillMount = () => {
    const totalQuizCount = this.props.quiz.length
    this.setState({
      roomName: this.props.roomName,
      quiz: this.props.quiz,
      totalQuizCount: totalQuizCount,
      currentQuizNum: 0
    })

  }
  componentDidMount = () => {
    firestore.collection('room').doc(this.state.roomName).onSnapshot(snap => {
      console.log(snap.data())
      const data = snap.data()
      if (data.isSelectResolution) {
        this.setState({ render: <SelectResolution /> }) //解像度を選択したら<Loading />にとばす
      } else if (data.isWaiting) {
        this.setState({ render: <Loading /> })
      } else if (data.isQuizStart) {
        this.setState({ render: <SelectAnswer image={this.state.quiz[0].imageURL} answer={this.state.quiz[0].answer} roomName={this.state.roomName} /> })
      } else if (data.isFinish) {
        const nextQuizNum = this.state.currentQuizNum + 1;
        this.setState({
          currentQuizNum: nextQuizNum,
          render: <Loading />
        })
      }
      console.log(this.state)
    })
  }
  render = () => {
    console.log(this.state.quiz[0]);
    return (
      <div>{this.state.render}</div>
    )
  }
}

export default Quiz