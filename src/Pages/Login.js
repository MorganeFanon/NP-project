// import React from 'react';
// import './Login.css';
// import { Button } from '@material-ui/core';
// import LogoGran from '../Assets/LogoGran.png';
// import { auth, provider } from '../firebase.js';
// import { actionTypes } from '../components/reducer';
// import { useStateValue } from '../components/StateProvider';



// function Login() {
//     const [state, dispatch] = useStateValue();
   
//     const signIn = () => {

//         auth
//             .signInWithPopup(auth, provider)
//             .then((result) => {
//                 dispatch({
//                     type: actionTypes.SET_USER,
//                     user: result.user,
//                 })
//             }) 
//             .catch((error) => alert(error.message));
//     };
//     return ( 
//     <div className="login">
//         <div className="login__logo">
//             <img
//                 src={LogoGran}
//                 alt="logo"
//             />

//             <h1>Granbook</h1>

//         </div>
//         <Button type="submit" onClick={signIn}>

//             Sign In
//         </Button>
//     </div>
//     );
// }

// export default Login

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import "./Login.css";
import { useAuthState } from "react-firebase-hooks/auth";
// import { sendPasswordResetEmail } from "../firebase";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/feed");
  }, [user, loading]);
  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Login;