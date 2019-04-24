import React from 'react';
import { getQuestions } from './firebase'
import Accordion from './Accordion'
import AccordionList from './AccordionList'


class QuestionList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: null,
    }
    this.getQuestionsFromFirebase()
  }
  getQuestionsFromFirebase = () => {
    getQuestions().then(snap => {
      this.setState({ questions: snap })
      console.log(this.state)
    }).catch(err => {
      console.log("Failed get Questions")
    })
  }
  render() {
    let a = [];
    if (this.state.questions !== null) {
      this.state.questions.forEach(doc => {
        if (doc.exists) {
          console.log("document data", doc.data());
          a.push(<div>{doc.data().body}</div>)
        } else {
          console.log("no document found");
        }
      })
    }
    return (
      <div className="container">
        {this.state.questions ? a[0] : <div></div>}
      </div>
    );
  }
}
export default QuestionList