
import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Header from './Header.js';
import Post from './Post.js';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Welcome from './Welcome';




export default function Home() {
const handleLogout = () => {
    sessionStorage.removeItem('Auth Token');
    navigate('/login')
}

    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')
        console.log(authToken)

        if(authToken) {
            navigate('/Home')
        }

        if(!authToken) {
            navigate('/login')
        }
    }, [])    

    return (
        <div>
        <Header />
        
           
         <Welcome />  
            
           
         <Grid item><Post /></Grid>  
            
               
            
            <Button 
            style={{  
            background: "linear-gradient(#ff9900,#ff66cc)" 
                }}
            onClick={handleLogout}>Log out</Button>


        </div>
    );
}