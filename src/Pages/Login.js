import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import LogoGran from '../Assets/LogoGran.png';
import { auth, provider } from '../firebase.js';
import { actionTypes } from '../components/reducer';
import { useStateValue } from '../components/StateProvider';


function Login() {
    const [state, dispatch] = useStateValue();
   
    const signIn = () => {

        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            }) 
            .catch((error) => alert(error.message));
    };
    return ( 
    <div className="login">
        <div className="login__logo">
            <img
                src={LogoGran}
                alt="logo"
            />

            <h1>Granbook</h1>

        </div>
        <Button type="submit" onClick={signIn}>

            Sign In
        </Button>
    </div>
    );
}

export default Login