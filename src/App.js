import React from 'react';
import './App.css';
import Widgets from './components/Widgets';
import Header from './components/Header';
import Feed from './Pages/Feed';
import Sidebar from './components/Sidebar';
import Login from './Pages/Login';
import { useStateValue } from './components/StateProvider';


function App() {
const [{ user }, dispatch] = useStateValue();


  return (

    <div className="app">
      {!user ? (
        <Login />
      ) : ( 
      <>
       <Header />  

         <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div> 
        </>
      )}
     </div>
  );
}

export default App;