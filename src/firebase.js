import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyCtEkeyRrSIElte8qoZZ_tZNIK9MhFB3jE",
  authDomain: "ca-hackathon-f0cb4.firebaseapp.com",
  databaseURL: "https://ca-hackathon-f0cb4.firebaseio.com",
  projectId: "ca-hackathon-f0cb4",
  storageBucket: "ca-hackathon-f0cb4.appspot.com",
  messagingSenderId: "53872148783"
};
firebase.initializeApp(config);
const firestore = firebase.firestore()




const uploadQuiz = (quiz) => {
  /*
  quiz: {
        writer: props.uid,
        body: "",
        answerNum: -1,
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        imageSrc: "",
        age: ""
      }
  */
  console.log(quiz)
  const now = getCurrentTime();
  quiz.writer = "";
  firestore.collection('quiz').doc(now).set(quiz)
    .then(() => {
      console.log("Document successfully written!");
    }).catch(error => {
      console.error("Error writing document: ", error);
    })
}

const getQuestions = () => {
  return new Promise((resolve, reject) => {
    const collectionRef = firestore.collection('quiz')
    collectionRef.get().then(snap => {
      console.log(snap)
      let questions = [];
      snap.forEach(doc => {
        if (doc.exists) {
          console.log("document data", doc.data());
          questions.push(doc.data());
        } else {
          console.log("no document found");
        }
      })
      resolve(snap);
      return
    }).catch(err => {
      console.log("error getting document", err)
      reject(err)
    })
  })

}

export {
  firebase,
  firestore,
  uploadQuiz,
  getQuestions
}

const getCurrentTime = () => {
  //現在時刻取得（yyyymmddhhmmss)
  const now = new Date();
  const res = "" + now.getFullYear() + "" + padZero(now.getMonth() + 1) +
    "" + padZero(now.getDate()) + "" + padZero(now.getHours()) + "" +
    padZero(now.getMinutes()) + "" + padZero(now.getSeconds());
  return res;
}



const padZero = num => {
  let result;
  if (num < 10) {
    result = "0" + num;
  } else {
    result = "" + num;
  }
  return result;

}



