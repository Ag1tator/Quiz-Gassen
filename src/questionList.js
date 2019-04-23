import React from 'react';
import { getQuestions } from './firebase'
class QuestionList extends React.Component {


  getQuestionsFromFirestore() {
    const questions = getQuestions()
    console.log(questions)
  }
  render() {
    this.getQuestionsFromFirestore()
    return (
      <div>question List</div>
    )
  }
}

export default QuestionList