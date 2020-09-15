import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem' 
import CardDeck from 'react-bootstrap/CardDeck' 
class Services extends Component {
  render() {
    return (
      <div>
         <div id="services" className="servicespage">
            <div className="container">	
               <div className="row">	
                  <div className="sixteen columns">	            
                     <div className="title">
                        <div className="subtitle">
                           <p>Our services are delivered by our team with <span className="highlight">years of experience</span> who are <span className="highlight">passionate</span> about developing new businesses.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="container">    
               <CardDeck className="p-5">   
                  <Card>
                     <Card.Body>
                        <Card.Title className="font-weight-bold">Branding</Card.Title>
                        <Card.Title className="service-box">
                           <i className="service-icon fa fa-magic"></i>
                        </Card.Title>
                        <Card.Text>
                        Branding is one of the most important aspects of any business, large or small, retail or B2B. An effective brand strategy gives you a major edge in increasingly competitive markets.
                        </Card.Text>
                     </Card.Body>
                        <Card.Title><p className="h6"> Key Factors:</p></Card.Title>
                     <ListGroup className="list-group-flush">
                        <ListGroupItem>Consistent Positioning</ListGroupItem>
                        <ListGroupItem>Sense of Dynamism</ListGroupItem>
                        <ListGroupItem>Sense of Authenticity</ListGroupItem>
                        <ListGroupItem>Strong Corporate Culture</ListGroupItem>
                     </ListGroup>
                  </Card>     
                  <Card>
                     <Card.Body>
                        <Card.Title className="font-weight-bold">Branding</Card.Title>
                        <Card.Title className="service-box">
                           <i className="service-icon fa fa-magic"></i>
                        </Card.Title>
                        <Card.Text>
                        Branding is one of the most important aspects of any business, large or small, retail or B2B. An effective brand strategy gives you a major edge in increasingly competitive markets.
                        </Card.Text>
                     </Card.Body>
                        <Card.Title><p className="h6"> Key Factors:</p></Card.Title>
                     <ListGroup className="list-group-flush">
                        <ListGroupItem>Consistent Positioning</ListGroupItem>
                        <ListGroupItem>Sense of Dynamism</ListGroupItem>
                        <ListGroupItem>Sense of Authenticity</ListGroupItem>
                        <ListGroupItem>Strong Corporate Culture</ListGroupItem>
                     </ListGroup>
                  </Card>     
                  <Card>
                     <Card.Body>
                        <Card.Title className="font-weight-bold">Branding</Card.Title>
                        <Card.Title className="service-box">
                           <i className="service-icon fa fa-magic"></i>
                        </Card.Title>
                        <Card.Text>
                        Branding is one of the most important aspects of any business, large or small, retail or B2B. An effective brand strategy gives you a major edge in increasingly competitive markets.
                        </Card.Text>
                     </Card.Body>
                        <Card.Title><p className="h6"> Key Factors:</p></Card.Title>
                     <ListGroup className="list-group-flush">
                        <ListGroupItem>Consistent Positioning</ListGroupItem>
                        <ListGroupItem>Sense of Dynamism</ListGroupItem>
                        <ListGroupItem>Sense of Authenticity</ListGroupItem>
                        <ListGroupItem>Strong Corporate Culture</ListGroupItem>
                     </ListGroup>
                  </Card>     
                  <Card>
                     <Card.Body>
                        <Card.Title className="font-weight-bold">Branding</Card.Title>
                        <Card.Title className="service-box">
                           <i className="service-icon fa fa-magic"></i>
                        </Card.Title>
                        <Card.Text>
                        Branding is one of the most important aspects of any business, large or small, retail or B2B. An effective brand strategy gives you a major edge in increasingly competitive markets.
                        </Card.Text>
                     </Card.Body>
                        <Card.Title><p className="h6"> Key Factors:</p></Card.Title>
                     <ListGroup className="list-group-flush">
                        <ListGroupItem>Consistent Positioning</ListGroupItem>
                        <ListGroupItem>Sense of Dynamism</ListGroupItem>
                        <ListGroupItem>Sense of Authenticity</ListGroupItem>
                        <ListGroupItem>Strong Corporate Culture</ListGroupItem>
                     </ListGroup>
                  </Card>     
                  <Card>
                     <Card.Body>
                        <Card.Title className="font-weight-bold">Branding</Card.Title>
                        <Card.Title className="service-box">
                           <i className="service-icon fa fa-magic"></i>
                        </Card.Title>
                        <Card.Text>
                        Branding is one of the most important aspects of any business, large or small, retail or B2B. An effective brand strategy gives you a major edge in increasingly competitive markets.
                        </Card.Text>
                     </Card.Body>
                        <Card.Title><p className="h6"> Key Factors:</p></Card.Title>
                     <ListGroup className="list-group-flush">
                        <ListGroupItem>Consistent Positioning</ListGroupItem>
                        <ListGroupItem>Sense of Dynamism</ListGroupItem>
                        <ListGroupItem>Sense of Authenticity</ListGroupItem>
                        <ListGroupItem>Strong Corporate Culture</ListGroupItem>
                     </ListGroup>
                  </Card>     
                  <Card>
                     <Card.Body>
                        <Card.Title className="font-weight-bold">Branding</Card.Title>
                        <Card.Title className="service-box">
                           <i className="service-icon fa fa-magic"></i>
                        </Card.Title>
                        <Card.Text>
                        Branding is one of the most important aspects of any business, large or small, retail or B2B. An effective brand strategy gives you a major edge in increasingly competitive markets.
                        </Card.Text>
                     </Card.Body>
                        <Card.Title><p className="h6"> Key Factors:</p></Card.Title>
                     <ListGroup className="list-group-flush">
                        <ListGroupItem>Consistent Positioning</ListGroupItem>
                        <ListGroupItem>Sense of Dynamism</ListGroupItem>
                        <ListGroupItem>Sense of Authenticity</ListGroupItem>
                        <ListGroupItem>Strong Corporate Culture</ListGroupItem>
                     </ListGroup>
                  </Card>
               </CardDeck>
            </div>	
            <div id="parallax1" className="parallax">
               <div className="bg1 parallax-bg"></div>
               <div className="overlay"></div>
               <div className="container clearfix">
                  <div className="parallax-content">
                     <p className="quote"><i className="icon-quote-left"></i>Creativity is seeing what everyone else has seen and thinking what no one else has thought.<i className="icon-quote-right"></i></p>
                     <div className="quote-author">-- Albert Einstein --</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    );
  }
}
 
export default Services;