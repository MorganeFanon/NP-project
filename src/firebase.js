import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAfF9wd_UtHWDa3lChKcj1Kj0LIvB8EMZE",
  authDomain: "login-signup-fbe05.firebaseapp.com",
  projectId: "login-signup-fbe05",
  storageBucket: "login-signup-fbe05.appspot.com",
  messagingSenderId: "67704765687",
  appId: "1:67704765687:web:112925857a3720d72c67f2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
