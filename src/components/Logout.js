import * as React from 'react';
import Button from '@mui/material/Button';

function Logout({title, handleAction}) {
    return (
        <Button variant="contained" 
        onClick={handleAction}
        style={{  
            background: "linear-gradient(#ff9900,#ff66cc)" 
            }}
            >{title}
        </Button>
    );
}
export default Logout