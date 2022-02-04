import * as React from 'react';
import ReactRoundedImage from 'react-rounded-image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from './Button';
import './Form.css';
import LogoGran from  "../images/LogoGran.png";
import {Link, Route } from 'react-router-dom';



export default function BasicTextFields({ title, setPassword, setEmail, handleAction }) {
    return (
        <Container fluid>
            <ReactRoundedImage 
                
                image={LogoGran}
                
            />
                <h3>
                  {title} to Your Account
                </h3>
                <br></br>
                <h4>Welcome to Granbook the social platform for the grannies and grandpas of all other the world</h4>
        <Row className="row p-3 d-flex jutify-content-center text-center">        
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
             </Box>
        </Row> 

        <Row className=" p-5 row d-flex jutify-content-center text-center">
            <Col>
                <TextField
                id="email"
                className="text-field-email"
                label="Enter the Email" 
                variant="outlined" 
                onChange={(e) => setEmail(e.target.value)}
                />
            </Col>

            <Col>    
                <TextField 
                id="password" 
                className="text-field-password"
                label="Enter the Password" 
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
                />
            </Col> 
        </Row> 
  
    
        
        <Button title={title} handleAction={handleAction}/>
      

        <br></br>
        Not an account yet ?<Link to="/register"> Register here</Link>
        
      
      </Container>
    );
}