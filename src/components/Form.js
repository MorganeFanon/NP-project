import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from './Button';
import './Form.css'


export default function BasicTextFields({ title, setPassword, setEmail, handleAction }) {
    return (
        <div>
            <div className="heading-container">
                <h3>
                  {title} to Your Account
                </h3>
                <h4>Welcome to Granbook</h4>
        </div>
<Container>
    <Row className="jutify-content-center">
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <Col md={{ span: 6, offset: 3 }}>
                <TextField
                id="email"
                className="text-field-email"
                label="Enter the Email" 
                variant="outlined" 
                onChange={(e) => setEmail(e.target.value)}
                />
                <TextField 
                style={{  
                    borderColor: 'white',
                    color: 'white',
                    }}
                id="password" 
                label="Enter the Password" 
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
                />
            </Col> 
        </Box>
     </Row> 
</Container>

        <Button title={title} handleAction={handleAction}/>
<div>
    <h4>Not a member yet ? Register Now</h4>
</div>

      </div>  
      
    );
}