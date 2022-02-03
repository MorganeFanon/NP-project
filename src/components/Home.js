
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header.js';
import Post from './Post.js'





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
        <div>
             <Header />
             <div class="row">
                <div className="col-md-3 center">
                 <div>Welcome to Granbook </div>
                     <Post />   
                     <button onClick={handleLogout}>Log out</button>
            </div>

            </div>


            
        </div>
    )
}