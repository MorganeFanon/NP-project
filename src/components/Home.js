import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
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
        
         
            
        </div>
    );
}

export default Home