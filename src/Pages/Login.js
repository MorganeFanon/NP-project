import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import LogoGran from '../Assets/LogoGran.png';
import { auth, provider } from '../firebase.js';
import { actionTypes } from '../components/reducer';
import { useStateValue } from '../components/StateProvider';
import CarouselComponent from '../components/carousel.component';
import "react-responsive-carousel/lib/styles/carousel.min.css";



function Login() {
    const [state, dispatch] = useStateValue();
   
    const signIn = () => {

        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            }) 
            .catch((error) => alert(error.message));
    };
    return ( 
    <div className="login">
        <div className="carousel">
            <CarouselComponent />
        </div>
        
       <div className="login__logo">
            <img
                src={LogoGran}
                alt="logo"
            />
       </div>
            <h1>Granbook</h1>
        
        <Button size="large"type="submit" onClick={signIn}>
            Sign In
        </Button>
    </div>
    );
}

export default Login