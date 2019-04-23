/* eslint no-script-url: 0 */
import React from 'react';
import { uploadQuiz } from './firebase'
const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;
class FormApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quiz: {
        writer: this.props.uid,
        body: "",
        answerNum: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        imageSrc: null,
        image: null,
        age: "",
        description: "",
      }
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    let quiz = this.state.quiz;
    switch (event.target.name) {
      case 'body':
        quiz.body = event.target.value;
        break;
      case 'answer1':
        quiz.answer1 = event.target.value;
        break;
      case 'answer2':
        quiz.answer2 = event.target.value;
        break;
      case 'answer3':
        quiz.answer3 = event.target.value;
        break;
      case 'answer4':
        quiz.answer4 = event.target.value;
        break;
      case 'image':
        const files = event.target.files
        quiz.image = files.length === 0 ? null : files[0];
        quiz.imageSrc = files.length === 0 ? "" : createObjectURL(files[0]);
        break;
      case 'age':
        quiz.age = event.target.value;
        break;
      case 'desc':
        quiz.description = event.target.value;
        break;
      case 'answerNum':
        quiz.answerNum = event.target.value;
        break;
      default:
    }


    this.setState({ quiz: quiz })
    console.log(this.state.quiz)
  }
  onChange() {
    console.log(this.state.quiz);
  }
  onSubmit = () => {
    console.log("onSubmit")
    console.log(typeof (this.state.quiz.image))
    console.log(this.state.quiz)
    uploadQuiz(this.state.quiz)
  }

  render() {
    return (
      <form action="javascript:void(0)" onSubmit={this.onSubmit}>
        {this.state.quiz.imageSrc === null ? <div> <input type="file" name="image" onChange={this.handleChange}></input></div> : <img src={this.state.quiz.imageSrc} alt="user's" />}
        {/*body*/}
        <div>
          <label htmlFor="name">本文</label>
          <input type="text" name="body" value={this.state.quiz.body} onChange={this.handleChange} />
          <label htmlFor="age">年代</label>
          <input type="text" name="age" value={this.state.quiz.age} onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="desc">解説</label>
          <input type="text" name="desc" value={this.state.quiz.description} onChange={this.handleChange} />
        </div>
        {/* answer*/}
        <div>
          <label htmlFor="answer1">候補１</label>
          <input type="text" name="answer1" value={this.state.quiz.answer1} onChange={this.handleChange} />

          <label htmlFor="answer2">候補2</label>
          <input type="text" name="answer2" value={this.state.quiz.answer2} onChange={this.handleChange} />
          <label htmlFor="answer3">候補3</label>
          <input type="text" name="answer3" value={this.state.quiz.answer3} onChange={this.handleChange} />
          <label htmlFor="answer4">候補4</label>
          <input type="text" name="answer4" value={this.state.quiz.answer4} onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="answer1">答え</label>
          <input type="text" name="answerNum" value={this.state.quiz.answerNum} onChange={this.handleChange} />
        </div>
        {/* Submit Button */}
        <button type="submit" >送信</button>
      </form>
    );
  }
}

export default FormApp;
