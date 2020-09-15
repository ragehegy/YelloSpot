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
                        <Card.Title className="font-weight-bold">Online Marketing</Card.Title>
                        <Card.Title className="service-box">
                           <i className="service-icon fa fa-bullhorn"></i>
                        </Card.Title>
                        <Card.Text>
                        With our unique strategies we lend you a helping hand to build up your company’s reputation and exposure online by using a variety of internet tools and solutions.
                        </Card.Text>
                     </Card.Body>
                        <Card.Title><p className="h6"> Key Factors:</p></Card.Title>
                     <ListGroup className="list-group-flush">
                        <ListGroupItem>Growth in Potential</ListGroupItem>
                        <ListGroupItem>Elegant Communications</ListGroupItem>
                        <ListGroupItem>Better Control</ListGroupItem>
                        <ListGroupItem>Competitive Advantage</ListGroupItem>
                     </ListGroup>
                  </Card>     
                  <Card>
                     <Card.Body>
                        <Card.Title className="font-weight-bold">Community Management</Card.Title>
                        <Card.Title className="service-box">
                           <i className="service-icon fa fa-comments"></i>
                        </Card.Title>
                        <Card.Text>
                        With a fanatical focus on high quality monitoring and moderation techniques, we maintain exceptionally high level of management through all your social channels.
                        </Card.Text>
                     </Card.Body>
                        <Card.Title><p className="h6"> Key Factors:</p></Card.Title>
                     <ListGroup className="list-group-flush">
                        <ListGroupItem>Making It Easy to Use</ListGroupItem>
                        <ListGroupItem>Assessing Operational Requirements</ListGroupItem>
                        <ListGroupItem>Measuring Social Engagement</ListGroupItem>
                        <ListGroupItem>Implementing The Right Platform</ListGroupItem>
                     </ListGroup>
                  </Card>     
                  <Card>
                     <Card.Body>
                        <Card.Title className="font-weight-bold">SEO</Card.Title>
                        <Card.Title className="service-box">
                           <i className="service-icon fa fa-search"></i>
                        </Card.Title>
                        <Card.Text>
                        This is a long-term strategy to success. These include site architecture, on-site content, internal and external links, keyword research and competition analysis.
                        </Card.Text>
                     </Card.Body>
                        <Card.Title><p className="h6"> Key Factors:</p></Card.Title>
                     <ListGroup className="list-group-flush">
                        <ListGroupItem>Well Structured Websites</ListGroupItem>
                        <ListGroupItem>Unique & Quality Content</ListGroupItem>
                        <ListGroupItem>Internal & External Links</ListGroupItem>
                     </ListGroup>
                  </Card>     
                  <Card>
                     <Card.Body>
                        <Card.Title className="font-weight-bold">Applications</Card.Title>
                        <Card.Title className="service-box">
                           <i className="service-icon fa fa-tablet"></i>
                        </Card.Title>
                        <Card.Text>
                        From competitions to games and applications tabs we promote your services and motivate visitors to become fans and enforce brand awareness.
                        </Card.Text>
                     </Card.Body>
                        <Card.Title><p className="h6"> Key Factors:</p></Card.Title>
                     <ListGroup className="list-group-flush">
                        <ListGroupItem>Interest</ListGroupItem>
                        <ListGroupItem>Engagement</ListGroupItem>
                        <ListGroupItem>Retention</ListGroupItem>
                     </ListGroup>
                  </Card>     
                  <Card>
                     <Card.Body>
                        <Card.Title className="font-weight-bold">Web Consultancy</Card.Title>
                        <Card.Title className="service-box">
                           <i className="service-icon fa fa-globe"></i>
                        </Card.Title>
                        <Card.Text>
                        We use the best approaches exposed by our team for designing maintainable websites, and then artistically implement with care and passion.
                        </Card.Text>
                     </Card.Body>
                        <Card.Title><p className="h6"> Key Factors:</p></Card.Title>
                     <ListGroup className="list-group-flush">
                        <ListGroupItem>Accessibility</ListGroupItem>
                        <ListGroupItem>Content</ListGroupItem>
                        <ListGroupItem>Layout</ListGroupItem>
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