import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase.js';
import { actionTypes } from '../components/reducer';
import { useStateValue } from '../components/StateProvider';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselComponent from '../components/CarouselComponent';
import { register } from './Register';
import { useNavigate } from "react-router-dom";





function Login() {
    const [state, dispatch] = useStateValue();
   

    const register = () => { let path = `newPath`; 
    navigate(path);}
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
        {/* <div className="carousel__wrapper"> */}
            <div className="carousel__container">
                <CarouselComponent />
            </div>
            {/* </div> */}
        <h1>Granbook</h1>   
        
        <Button size="large"type="submit" onClick={signIn}>
            Sign In
        </Button>

        <button className="register__btn" onClick={register}>
          Register
        </button>
    </div>
    );
}

export default Login