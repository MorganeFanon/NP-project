import * as React from 'react';
import Button from 'react-bootstrap/Button';

export default function BasicButtons({title, handleAction}) {
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