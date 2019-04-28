import React from "react";
import { createNewRoom } from './firebase'
class CreateRoom extends React.Component {
  /*参考: https://itnext.io/building-a-dynamic-controlled-form-in-react-together-794a44ee552c */
  state = {
    quiz: [""],
    roomName: "",
    description: ""
  }
  addQuiz = (e) => {
    let quiz = this.state.quiz;
    quiz.push("")
    this.setState(prevState => ({
      quiz: quiz
    }));
  }
  preventDefault = (e) => {
    e.preventDefault();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const newRoom = {
      roomName: this.state.roomName,
      description: this.state.description,
      quiz: this.state.quiz,
      currentQuizNum: 0,
      isQuizFinish: false,
      isSelectResolution: false,
      isWaiting: false,
      isQuizStart: false,
      isFinish: false
    }
    createNewRoom(newRoom).then(
      () => alert("新しい部屋を作りました！")
    ).catch(err => {
      alert("部屋の作成に失敗しました。", err)
    });
    console.log(this.state)
  }

  handleChange = (e) => {
    if ("quiz" === e.target.className) {
      let quiz = [...this.state.quiz]
      quiz[e.target.dataset.id] = e.target.value

      this.setState({ quiz })
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  render() {
    let { quiz } = this.state
    return (
      <form onSubmit={this.preventDefault} onChange={this.handleChange}>
        <label htmlFor="roomName">Room Name</label>
        <input type="text" name="roomName" id="roomName" value={this.state.owner} className="roomName" />
        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="description" value={this.state.description} className="description" />
        <button onClick={this.addQuiz}>Add new quiz</button>
        {
          quiz.map((val, idx) => {
            let quizId = `quiz-${idx}`
            return (
              <div key={idx}>
                <label htmlFor={quizId}>{`Quiz #${idx + 1}`}</label>
                <input
                  type="text"
                  name={quizId}
                  data-id={idx}
                  id={quizId}
                  className="quiz"
                  value={this.state.quiz[idx]}
                />

              </div>
            )
          })
        }
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
      </form>
    )
  }
}

export default CreateRoom;