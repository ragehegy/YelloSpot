import React, { Component } from "react";
 
class Team extends Component {
  render() {
    return (
      <div>
        <div id="portfolio" className="page">
	
		<div className="container">	
           <div className="row">	
			<div className="sixteen columns">          
				<div className="title">
                  <div className="subtitle">
                      <p>Hire us if you like what we do because we helps Agencies to link <span className="highlight">Business</span> processes and <span className="highlight">People.</span></p>
                  </div>
                </div>
			</div>
           </div>
          </div>
   <div className="container clearfix">
   <div  id="filters" className="sixteen columns">

      <ul className="clearfix">
        <li><a href="#" data-filter="*" className="active"><h3>All</h3></a></li>	
        <li><a href="#" data-filter=".web"><h3>Web Development</h3></a></li>
        <li><a href="#" data-filter=".socialmedia"><h3>Social Media</h3></a></li>
        <li><a href="#" data-filter=".media"><h3>Digital Media</h3></a></li>
        <li><a href="#" data-filter=".branding"><h3>Branding</h3></a></li>
      </ul>
    </div>
   </div>
   <div id="portfolio-wrap" className="row">                  
    <div className="portfolio-item one-third column web">
           <div className="portfolio">
              <a href="#" className="portfolio-image">
                <img src={require("./images/clients/web/aul.png")} alt="AUL University"/>
                
                <div className="portfolio-overlay">                
                    <div className="thumb-info">                
                      <h3>AUL UNIVERSITY</h3>
                      <p className="portfolio-tags">UNIVERSITY</p>
                    </div>                
                </div>
              
              </a>
           </div>
    </div>
    <div className="portfolio-item one-third web">
           <div className="portfolio">
              <a href="http://www.adonisrentacar.com" className="portfolio-image" >
                <img src={require("./images/clients/web/adonis.png")} alt="Adonis Rent a Car"/>
                <div className="portfolio-overlay">                
                    <div className="thumb-info">                
                      <h3>Adonis Rent a Car</h3>
                      <p className="portfolio-tags">Car Rental</p>
                    </div>                
                </div>
              </a>
           </div>
    </div>              
    <div className="portfolio-item one-third column web">
           <div className="portfolio">
              <a href="http://www.ammourifoods.com" className="portfolio-image" >
                <img src={require("./images/clients/web/ammouri.png")} alt="Ammouri Foods"/>
                <div className="portfolio-overlay">                
                    <div className="thumb-info">                
                      <h3>Ammouri Foods</h3>
                      <p className="portfolio-tags">Snacks Manufacturer</p>
                    </div>                
                </div>
              </a>
           </div>
    </div>
    <div className="portfolio-item one-third column web">
           <div className="portfolio">
              <a href="http://www.skycarecatering.com" className="portfolio-image" >
                <img src={require("./images/clients/web/skycare.png")} alt="Sky Care Catering"/>{ /* END PORTFOLIO IMAGE */ }   
                
                <div className="portfolio-overlay">                
                    <div className="thumb-info">                
                      <h3>Sky Care Catering</h3>
                      <p className="portfolio-tags">Flight Services Catering</p>
                    </div>                
                </div>
              </a>
           </div>
    </div>
    <div className="portfolio-item one-third column web">
           <div className="portfolio">
              <a href="http://www.fitnfresh.co" className="portfolio-image" >
                <img src={require("./images/clients/web/fitnfresh.png")} alt="Fit N Fresh"/>
                <div className="portfolio-overlay">                
                    <div className="thumb-info">                
                      <h3>Fit N Fresh</h3>
                      <p className="portfolio-tags">Food Delivery Service</p>
                    </div>                
                </div>
              </a>
           </div>
    </div>              
    <div className="portfolio-item one-third column web">
           <div className="portfolio">
              <a href="http://www.adoprojects.com" className="portfolio-image" >
                <img src={require("./images/clients/web/ado.png")} alt="Ado Projects"/>{ /* END PORTFOLIO IMAGE */ }   
                
                <div className="portfolio-overlay">                
                    <div className="thumb-info">                
                      <h3>Ado Projects</h3>
                      <p className="portfolio-tags">Architectural & Design Offices</p>
                    </div>                
                </div>
              </a>
           </div>
    </div>                
    <div className="portfolio-item one-third column web">
           <div className="portfolio">
              <a href="http://www.jstelb.com" className="portfolio-image" >
                <img src={require("./images/clients/web/jste.png")} alt="JSTE"/>
                <div className="portfolio-overlay">                
                    <div className="thumb-info">                
                      <h3>JSTE</h3>
                      <p className="portfolio-tags">Tyres Leading Agent</p>
                    </div>                
                </div>
              </a>
           </div>
    </div>             
    <div className="portfolio-item one-third column web">
           <div className="portfolio">
              <a href="http://www.adcosal.com" className="portfolio-image" >
                <img src={require("./images/clients/web/adco.png")} alt="Adco"/>
                
                <div className="portfolio-overlay">                
                    <div className="thumb-info">                
                      <h3>Adco SAL</h3>
                      <p className="portfolio-tags">Solutions & Services</p>
                    </div>                
                </div>
              </a>
           </div>
    </div>
    <div className="portfolio-item one-third column web">
           <div className="portfolio">
              <a href="#" className="portfolio-image" >
                <img src={require("./images/clients/web/lestudio.png")} alt="Le Studio"/>
                <div className="portfolio-overlay">                
                    <div className="thumb-info">                
                      <h3>Le Studio</h3>
                      <p className="portfolio-tags">Music House</p>
                    </div>                
                </div>
              </a>
           </div>
    </div>
    <div className="portfolio-item one-third column media">
           <div className="portfolio">
              <a href="#" className="portfolio-image" >
                <img src={require("./images/clients/web/lestudio.png")} alt="Le Studio"/>
                <div className="portfolio-overlay">                
                    <div className="thumb-info">                
                      <h3>Le Studio</h3>
                      <p className="portfolio-tags">Music House</p>
                    </div>                
                </div>
              </a>
           </div>
    </div>
   </div>
	</div>
	
      </div>
    );
  }
}
 
export default Team;