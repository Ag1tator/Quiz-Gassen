import React from "react";

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
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }
  handleChange = (e) => {
    console.log(e.target.className)
    console.log(e.target.dataset.id)
    console.log("quiz".includes(e.target.className))
    if ("quiz" === e.target.className) {
      let quiz = [...this.state.quiz]
      console.log(quiz)
      quiz[e.target.dataset.id] = e.target.value

      this.setState({ quiz }, () => console.log(this.state.quiz))
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }
  render() {
    let { quiz } = this.state
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
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
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default CreateRoom;