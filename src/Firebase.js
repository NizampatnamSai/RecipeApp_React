import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD6gs7Nuau7iwy9N82EklGgCSih9QnXxvY",
  authDomain: "recipe-app-react-af984.firebaseapp.com",
  projectId: "recipe-app-react-af984",
  storageBucket: "recipe-app-react-af984.appspot.com",
  messagingSenderId: "917133164535",
  appId: "1:917133164535:web:57cc6cf076b74bc095f8f2",
  measurementId: "G-H34MPH9MRB"
};

const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth=firebase.auth()
const provider= new firebase.auth.GoogleAuthProvider();

export  {db,auth,provider};