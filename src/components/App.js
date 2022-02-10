import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import Home from './Home';
import Profile from './Profile';
import Widgets from './Widgets';
import Header from './Header';
import Feed from './Feed';
import Sidebar from './Sidebar';

import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { app } from '../firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







function App() {
  /*
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();
  const handleAction = (id) => {
    const authentication = getAuth();
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/home')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          console.log(error.code)
          if (error.code === 'auth/wrong-password') {
            toast.error('Please check the Password');
          }
          if (error.code === 'auth/user-not-found') {
            toast.error('Please check the Email');
          }
        })
    }
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/home')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            toast.error('Email Already in Use');
          }
        })
    }
  }

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/home')
    }
  }, [])
  */


const user = null;


  return (

    <div className="app">
      {!user ? (
        <h1>Login</h1>
      ) : ( 
      <>
       <Header />  


         <div className="app__body">
            <Sidebar />
            <Feed />
            
            <Widgets />
            </div> 
            </>
      )}
     </div>
      
      /*       
      <ToastContainer />
        <Routes>
          <Route
            path='/login'
            element={
              <Form
                title="Login  to your Account"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(1)}
              />}
              
          />
          <Route
            path='/register'
            element={
              <Form
                title="Register"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(2)}
              />}
          />

          <Route
            path='/home'
            element={
              <Home />
               }
          />

          <Route
            path='/profile'
            element={
              <Profile />}
          />
        </Routes>
        */ 
     
  );
}

export default App;