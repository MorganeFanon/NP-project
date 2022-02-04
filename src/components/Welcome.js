import React, {Component} from 'react';

class Welcome extends Component {
    render() {
 
       const { auth } = this.props
 
       const pageTitle = `Hello, { auth.email }`
 
       return (
          <h1>{ pageTitle }</h1>
       )
   }
 }
 
 export default Welcome