import React, { Component } from "react";
import {Link} from "react-router-dom";
// import Form from 'react-bootstrap/Form'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Button from 'react-bootstrap/Button'

class notFound extends Component {
  render() {
    return (
      <div>
        <img src={require("./images/logo.png")}  />
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
      </div>
    );
  }
}
 
export default notFound;