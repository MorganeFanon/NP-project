import * as React from 'react';
import ReactRoundedImage from 'react-rounded-image';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Logout from './Logout';
import './Form.css';
import LogoGran from  "../images/LogoGran.png";
import {Link, Route } from 'react-router-dom';
import Footer from './Footer';




export default function BasicTextFields({ title, setPassword, setEmail, handleAction }) {
    return (
        <Grid Container 
            justifyContent="center">
            
           
             <ReactRoundedImage 
                image={LogoGran}
            />
            
                <h3>
                  {title} to Your Account
                </h3>
                <br></br>
                <h4>Welcome to Granbook the social platform for the grannies and grandpas of all other the world</h4>
               
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            ></Box>
             
         <Stack direction="row" spacing={2} p={6}>

                <Grid item xs={10} md={5} lg={5} >
                <TextField
                id="email"
                className="text-field-email"
                label="Enter the Email" 
                variant="outlined" 
                onChange={(e) => setEmail(e.target.value)}
                />
                </Grid>

                <Grid item xs={10} md={5} lg={5}>
                <TextField 
                id="password" 
                className="text-field-password"
                label="Enter the Password" 
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
                />
                </Grid> 
        </Stack>
            

        <Stack direction="column" spacing={3} p={6}>
                <Grid item > 
                 <Logout title={title} handleAction={handleAction} p={6}/>
                </Grid>
           
                <Grid item>
              
                    Not an account yet ?<Link to="/register"> Register here</Link>
                </Grid>        
        </Stack>

        <Footer />
        </Grid>
    );
}