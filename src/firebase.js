import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";



const firebaseConfig = {
  apiKey: "AIzaSyAfF9wd_UtHWDa3lChKcj1Kj0LIvB8EMZE",
  authDomain: "login-signup-fbe05.firebaseapp.com",
  projectId: "login-signup-fbe05",
  storageBucket: "login-signup-fbe05.appspot.com",
  messagingSenderId: "67704765687",
  appId: "1:67704765687:web:112925857a3720d7;2c67f2"
  };


 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 const auth = getAuth();

 const provider = new GoogleAuthProvider();

 export { db, auth, provider };

