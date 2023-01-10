import firebase from "firebase/compat/app";
import 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {

  apiKey: "AIzaSyBEyz7mohpiJlBrZJqp8Eo3nvymUaj33Dg",
  authDomain: "project-x-40fa9.firebaseapp.com",
  projectId: "project-x-40fa9",
  storageBucket: "project-x-40fa9.appspot.com",
  messagingSenderId: "525013040181",
  appId: "1:525013040181:web:03f932027eb87c55c9457c"

};

const fire = firebase.initializeApp(firebaseConfig);
export default fire