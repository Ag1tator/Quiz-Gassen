import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

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
const storage = firebase.storage()

/*
const uploadImage = (filename, image) => {
  const storageRef = storage.ref('quiz/' + filename)
  storageRef.put(image).then(snapshot => {
    console.log('uploaded')
    snapshot.ref.getDownloadURL().then(downloadURL => {
      return downloadURL;
    })
  }).catch(err => {
    console.error("Error at: ", err)
  })

}
*/

const uploadImage = (filename, image) => {
  return new Promise((resolve, reject) => {
    const storageRef = storage.ref('quiz/' + filename)
    storageRef.put(image).then(snapshot => {
      console.log('uploaded')
      snapshot.ref.getDownloadURL().then(downloadURL => {
        resolve(downloadURL)
      })
    }).catch(err => {
      console.error("Error at: ", err)
      reject(err); return
    })
  })
}

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
  uploadImage(now, quiz.image).then(imageURL => {
    console.log("quiz", quiz)
    firestore.collection('quiz').doc(now).set({
      age: quiz.age,
      answer1: quiz.answer1,
      answer2: quiz.answer2,
      answer3: quiz.answer3,
      answer4: quiz.answer4,
      answerNum: quiz.answerNum,
      body: quiz.body,
      description: quiz.description,
      imageSrc: imageURL,
      writer: quiz.writer
    })
      .then(() => {
        console.log("Document successfully written!");
      }).catch(error => {
        console.error("Error writing document: ", error);
      });
  }).catch(err => {
    console.error("error uploading image: ", err)
  })
}
export {
  firebase,
  firestore,
  uploadQuiz,
  uploadImage
}

const getCurrentTime = () => {
  const now = new Date();  //現在時刻（yyyymmddhhmmss)
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



