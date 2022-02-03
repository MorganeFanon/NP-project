import * as React from 'react';
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
                <h4>Welcome to Old Book</h4>
        </div>

        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
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
        </Box>
        <Button title={title} handleAction={handleAction}/>
<div>
    <h4>Not a member yet ? Register Now</h4>
</div>

      </div>  
      
    );
}