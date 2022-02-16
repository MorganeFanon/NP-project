import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Reset from './Pages/Reset';
import Feed from './Pages/Feed';
// import { useStateValue } from './components/StateProvider';


function App() {
// const [{ user }, dispatch] = useStateValue();


  return (

    <div className="app">
     
         <Router>
             <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/reset" element={<Reset />} />
                <Route exact path="/feed" element={<Feed />} />
              </Routes>
        </Router>
          
      </div> 
      );
    }


export default App;