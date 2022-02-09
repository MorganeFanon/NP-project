import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Logout from './Logout';



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
            <Header />  
                <div className="app__body">
               <Sidebar />
               <Feed />
                <Logout />
              </div> 
            
        </div>
    );
}

export default Home