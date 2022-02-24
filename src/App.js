import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from './Pages/Login';
import Feed from './Pages/Feed';
// import Widgets from './components/Widgets';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useStateValue } from "./components/StateProvider";


function App() {
 const[{ user }, dispatch ] = useStateValue();
  return (
    <div className="container">
      {!user ? (
        
        <Login />
       ) : ( 
         <> 
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* <Widgets /> */}
      </div>
      </>
       )}
       </div>
       )
  };
   

export default App;
