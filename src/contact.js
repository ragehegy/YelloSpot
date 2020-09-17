import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class Contact extends Component {
  constructor(props) {
    super();
    this.state = { 
      name: '', 
      phone: '', 
      email: '', 
      subject: '', 
      message: ''};
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('contact.php', {
      method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state)
    }).then(function(response) {
      console.log(response)
      return response.json();
    });
  }

  render() {
    return (
      <div>
        <div id="contactus" className="multipage">
          <div className="container">	
            <div className="title">
              <center>
                <a href="ContactUs.php"><img src={require("./images/Pin.png")} alt=""  /></a>
              </center>
              <center>
                <span className="highlight">LOCATE US</span>
              </center>
              <div className="subtitle">
                <p>We'd really love to <span className="highlight">hear from you</span> so why not drop us an email and <span className="highlight">we'll get back</span> to you as soon as we finish our <span className="highlight">coffee</span>.</p>
              </div>
            </div>
          </div>        
          <div className="container clearfix">
            <div className="container">
              <div className="contact-box">
                <div id="contact-formm">		
                <Form className="row" onSubmit={this.handleSubmit}>
                  <div className="col-sm-6">
                    <Form.Group as={Row} controlId="formPlaintext">
                      <Form.Label column sm="2">
                        Name
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control  onChange={this.handleChange} name="name" placeholder="John Doe" />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                      <Form.Label column sm="2">
                        Email
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control  onChange={this.handleChange} name="email" placeholder="email@example.com" />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextPhone">
                      <Form.Label column sm="2">
                        Phone
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control  onChange={this.handleChange} name="phone" placeholder="+201111111111" />
                      </Col>
                    </Form.Group>
                  </div>
                  <div className="col-sm-6">
                    <Form.Group as={Row} controlId="formPlainSubject">
                      <Form.Label column sm="2">
                        Subject
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control  onChange={this.handleChange} name="subject" placeholder="Subject" />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlainTextarea">
                      <Form.Label column sm="2">
                        Message
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control  onChange={this.handleChange}  name="message" as="textarea" rows="3" placeholder="Lorem ipsum dolor sit amet, consectetuer adipiscing elit..." />
                      </Col>
                    </Form.Group>
                  </div>
                  <div className="col-sm-12 text-right">
                    <Button variant="primary" type="submit" className="btn btn-sm btn-warning">
                      Submit
                    </Button>
                  </div>
                </Form>
                <div className="clear"></div>
                </div>
                <div className="result"></div>  
              </div>
            </div>
	        </div>  
	      </div>
      </div>
    );
  }
}
 
export default Contact;