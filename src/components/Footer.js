import React from "react";
import Link from '@mui/material/Link';
import './Form.css';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';
import './Footer.css';

const Footer = () => {
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>    
         <BottomNavigation sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',  color: 'darkslategray', backgroundColor: 'lightblue' }}>
               

                 <Link href="#" 
                       underline="hover"> {'Confidentiality'}</Link>
       
                 <Link href="#" 
                       underline="hover"> {'General Conditions'}</Link>
        
                 <Link href="#" 
                       underline="hover"> {'Cookies'}</Link>
               
         </BottomNavigation> 
    </Paper>     
  );
}

export default Footer;