import React from 'react';
import { getQuestions } from './firebase'
import TableElement from './List'

/*
age: "10"
answer1: "1997"
answer2: "1998"
answer3: "1999"
answer4: "200"
answerNum: "1"
body: "平成10年って、西暦何年？"
description: "1998"
imageSrc: "https://firebasestorage.googleapis.com/v0/b/ca-hackathon-f0cb4.appspot.com/o/quiz%2F20190423235153?alt=media&token=51dbda1e-002a-41fd-9daf-02f674c8dc73"
writer: "AIzaSyCtEkeyRrSIElte8qoZZ_tZNIK9MhFB3jE"
*/
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
  makeQuestionList = (questions) => {
    let div = <div></div>
    questions.forEach(doc => {
      const data = doc.data()
      console.log(data)

    })
    return div
  }


  render() {
    let list = [];
    if (this.state.questions !== null) {
      this.state.questions.forEach(doc => {
        console.log(doc.data())
        list.push(<TableElement body={doc.data().body} answer={doc.data().answer[doc.data().answerNum]} description={doc.data().description} />)
      })
    }
    return (
      <div>
        {
          this.state.questions ?
            <div className="container">
              <table>
                <tbody>
                  <tr>
                    <th>質問</th><th>答え</th><th>解説</th>
                  </tr>
                  {list}
                </tbody>
              </table>
            </div>
            :
            <div></div>
        }
      </div>
    );
  }
}

export default QuestionList