
import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
import Header from './Header.js';
import Post from './Post.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Welcome from './Welcome'




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
        <Container fluid>
        <Header />
            <Row>
                 <div>Welcome to Granbook </div>
                 <Welcome />
                     <Post />   
                     
            </Row>
            <Button 
            style={{  
            background: "linear-gradient(#ff9900,#ff66cc)" 
                }}
            onClick={handleLogout}>Log out</Button>


            
        </Container>
    );
}