import React, {Component} from 'react';
import {Link, Router } from 'react-router-dom';
import Form from './Form';
import setPassword from './Form';
import setEmail from './Form';
import handleAction from './Form'


class Register extends Component {
  render(){
    const {match} = this.props;
    console.log(match.url);
  
  return (
    
      <Router>
      <Link to ={`${match.url}/register`}>Register now</Link>
      <Form
         title="register"
         setEmail={setEmail}
         setPassword={setPassword}
         handleAction={() => handleAction(2)}
        />
      </Router>
  
  )
  }
}

export default Register