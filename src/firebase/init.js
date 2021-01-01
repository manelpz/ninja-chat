import firebase from 'firebase'
import firestore from 'firebase/firestore'

//initialize Firebase
var config = {
    apiKey: "AIzaSyBw6o6Fcoloqt2LRS59tJBxXPZQOBxnb9E",
    authDomain: "udemy-ninja-chat-7dbf8.firebaseapp.com",
    projectId: "udemy-ninja-chat-7dbf8",
    storageBucket: "udemy-ninja-chat-7dbf8.appspot.com",
    messagingSenderId: "1095288771888",
    appId: "1:1095288771888:web:e3b2a92b56f088d482a4f5"
  };
  //config of firebase
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({timestampsInSnapshots: true})
  //export firestone database
  export default firebaseApp.firestore()
