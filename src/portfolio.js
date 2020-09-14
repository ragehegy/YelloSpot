import React, { Component } from "react";
 
class Team extends Component {
  render() {
    return (
      <div>
        <div id="portfolio" class="page">
	
		<div class="container">	
           <div class="row">	
			<div class="sixteen columns">            
	            { /* START TITLE */ }	            
				<div class="title">
				  <h1>Our Featured Portfolio</h1>
                  <div class="subtitle">
                      <p>Hire us if you like what we do because we helps Agencies to link <span class="highlight">Business</span> processes and <span class="highlight">People.</span></p>
                  </div>{ /* END SUBTITLE */ }                  
                </div>{ /* END TITLE */ }  	                           
			</div>{ /* END SIXTEEN COLUMNS */ }  
           </div>{ /* END ROW */ }         
          </div>{ /* END CONTAINER */ }     
   			
           { /* START AJAX SECTION */ }  
            <div id="ajax-section">     
             <div class="container clearfix"> 

                
              { /* START PROJECT NAVIGATION */ } 
              <div id="project-navigation">
                  <ul>
                      <li id="nextProject"><a href="#"></a></li>
                      <li id="prevProject"><a href="#"></a></li>
                   </ul>  
               </div>
               { /* END PROJECT NAVIGATION */ } 
                
               { /* START PROJECT CLOSE BUTTON */ }
               <div id="closeProject">
                    <a href="#loader"><i class="icon-remove"></i></a>               

               </div>  
               { /* START PROJECT CLOSE BUTTON */ }
                 
               { /* START PROJECT LOADER SECTION */ }
               <div id="loader"></div>
               { /* END PROJECT CLOSE BUTTON */ }
                     
               { /* START AJAX CONTENT */ }
               <div id="ajax-content-outer">
                    <div id="ajax-content-inner"></div>
               </div>
               { /* END AJAX CONTENT */ }
                      
        </div>{ /* END CONTAINER */ }
        
    </div>
           { /* END AJAX SECTION */ }          
              
         <div class="clear"></div>  
      
             
   	
   <div class="container clearfix">  
   
   { /* START PORTFOLIO FILTERING */ }   
   <div  id="filters" class="sixteen columns">

      <ul class="clearfix">
        <li><a href="#" data-filter="*" class="active"><h3>All</h3></a></li>	
        <li><a href="#" data-filter=".web"><h3>Web Development</h3></a></li>
        <li><a href="#" data-filter=".socialmedia"><h3>Social Media</h3></a></li>
        <li><a href="#" data-filter=".media"><h3>Digital Media</h3></a></li>
        <li><a href="#" data-filter=".branding"><h3>Branding</h3></a></li>
      </ul>
    </div>{ /* END PORTFOLIO FILTERING */ }    
   </div>{ /* END CONTAINER */ } 
   
         
   { /* START PORTFOLIO WRAP */ }  
   <div id="portfolio-wrap">
    
    { /* START PORTFOLIO ITEM */ }                   
    <div class="portfolio-item one-third column web">
           <div class="portfolio">
              <a href="#" class="portfolio-image">
                <img src="images/clients/web/aul.png" alt="AUL University"/>{ /* END PORTFOLIO IMAGE */ }   
                
                <div class="portfolio-overlay">                
                    <div class="thumb-info">                
                      <h3>AUL UNIVERSITY</h3>{ /* OVERLAY TITLE */ }  
                      <p class="portfolio-tags">UNIVERSITY</p>{ /* END PORTFOLIO TAGS */ }
                    </div>                
                </div>{ /* END PORTFOLIO OVERLAY */ } 
              
              </a>
           </div>
    </div>
    { /* END PORTFOLIO ITEM */ }    
    
                   
    { /* START PORTFOLIO ITEM */ }                   
    <div class="portfolio-item one-third web">
           <div class="portfolio">
              <a href="http://www.adonisrentacar.com" class="portfolio-image" target="_blank">
                <img src="images/clients/web/adonis.png" alt="Adonis Rent a Car"/>{ /* END PORTFOLIO IMAGE */ }   
                
                <div class="portfolio-overlay">                
                    <div class="thumb-info">                
                      <h3>Adonis Rent a Car</h3>{ /* OVERLAY TITLE */ }  
                      <p class="portfolio-tags">Car Rental</p>{ /* END PORTFOLIO TAGS */ }
                    </div>                
                </div>{ /* END PORTFOLIO OVERLAY */ } 
              
              </a>
           </div>
    </div>
    { /* END PORTFOLIO ITEM */ } 
       
    { /* START PORTFOLIO ITEM */ }                   
    <div class="portfolio-item one-third column web">
           <div class="portfolio">
              <a href="http://www.ammourifoods.com" class="portfolio-image" target="_blank">
                <img src="images/clients/web/ammouri.png" alt="Ammouri Foods"/>{ /* END PORTFOLIO IMAGE */ }   
                
                <div class="portfolio-overlay">                
                    <div class="thumb-info">                
                      <h3>Ammouri Foods</h3>{ /* OVERLAY TITLE */ }  
                      <p class="portfolio-tags">Snacks Manufacturer</p>{ /* END PORTFOLIO TAGS */ }
                    </div>                
                </div>{ /* END PORTFOLIO OVERLAY */ } 
              
              </a>
           </div>
    </div>
    { /* END PORTFOLIO ITEM */ }
       
    { /* START PORTFOLIO ITEM */ }                   
    <div class="portfolio-item one-third column web">
           <div class="portfolio">
              <a href="http://www.skycarecatering.com" class="portfolio-image" target="_blank">
                <img src="images/clients/web/skycare.png" alt="Sky Care Catering"/>{ /* END PORTFOLIO IMAGE */ }   
                
                <div class="portfolio-overlay">                
                    <div class="thumb-info">                
                      <h3>Sky Care Catering</h3>{ /* OVERLAY TITLE */ }  
                      <p class="portfolio-tags">Flight Services Catering</p>{ /* END PORTFOLIO TAGS */ }
                    </div>                
                </div>{ /* END PORTFOLIO OVERLAY */ } 
              
              </a>
           </div>
    </div>
    { /* END PORTFOLIO ITEM */ }
       
    { /* START PORTFOLIO ITEM */ }                   
    <div class="portfolio-item one-third column web">
           <div class="portfolio">
              <a href="http://www.fitnfresh.co" class="portfolio-image" target="_blank">
                <img src="images/clients/web/fitnfresh.png" alt="Fit N Fresh"/>{ /* END PORTFOLIO IMAGE */ }   
                
                <div class="portfolio-overlay">                
                    <div class="thumb-info">                
                      <h3>Fit N Fresh</h3>{ /* OVERLAY TITLE */ }  
                      <p class="portfolio-tags">Food Delivery Service</p>{ /* END PORTFOLIO TAGS */ }
                    </div>                
                </div>{ /* END PORTFOLIO OVERLAY */ } 
              
              </a>
           </div>
    </div>
    { /* END PORTFOLIO ITEM */ }
       
    { /* START PORTFOLIO ITEM */ }                   
    <div class="portfolio-item one-third column web">
           <div class="portfolio">
              <a href="http://www.adoprojects.com" class="portfolio-image" target="_blank">
                <img src="images/clients/web/ado.png" alt="Ado Projects"/>{ /* END PORTFOLIO IMAGE */ }   
                
                <div class="portfolio-overlay">                
                    <div class="thumb-info">                
                      <h3>Ado Projects</h3>{ /* OVERLAY TITLE */ }  
                      <p class="portfolio-tags">Architectural & Design Offices</p>{ /* END PORTFOLIO TAGS */ }
                    </div>                
                </div>{ /* END PORTFOLIO OVERLAY */ } 
              
              </a>
           </div>
    </div>
    { /* END PORTFOLIO ITEM */ }
       
    { /* START PORTFOLIO ITEM */ }                   
    <div class="portfolio-item one-third column web">
           <div class="portfolio">
              <a href="http://www.jstelb.com" class="portfolio-image" target="_blank">
                <img src="images/clients/web/jste.png" alt="JSTE"/>{ /* END PORTFOLIO IMAGE */ }   
                
                <div class="portfolio-overlay">                
                    <div class="thumb-info">                
                      <h3>JSTE</h3>{ /* OVERLAY TITLE */ }  
                      <p class="portfolio-tags">Tyres Leading Agent</p>{ /* END PORTFOLIO TAGS */ }
                    </div>                
                </div>{ /* END PORTFOLIO OVERLAY */ } 
              
              </a>
           </div>
    </div>
    { /* END PORTFOLIO ITEM */ }
       
    { /* START PORTFOLIO ITEM */ }                   
    <div class="portfolio-item one-third column web">
           <div class="portfolio">
              <a href="http://www.adcosal.com" class="portfolio-image" target="_blank">
                <img src="images/clients/web/adco.png" alt="Adco"/>{ /* END PORTFOLIO IMAGE */ }   
                
                <div class="portfolio-overlay">                
                    <div class="thumb-info">                
                      <h3>Adco SAL</h3>{ /* OVERLAY TITLE */ }
                      <p class="portfolio-tags">Solutions & Services</p>{ /* END PORTFOLIO TAGS */ }
                    </div>                
                </div>{ /* END PORTFOLIO OVERLAY */ } 
              
              </a>
           </div>
    </div>
    { /* END PORTFOLIO ITEM */ }
       
    { /* START PORTFOLIO ITEM */ }                   
    <div class="portfolio-item one-third column web">
           <div class="portfolio">
              <a href="#" class="portfolio-image" target="_blank">
                <img src="images/clients/web/lestudio.png" alt="Le Studio"/>{ /* END PORTFOLIO IMAGE */ }   
                
                <div class="portfolio-overlay">                
                    <div class="thumb-info">                
                      <h3>Le Studio</h3>{ /* OVERLAY TITLE */ }
                      <p class="portfolio-tags">Music House</p>{ /* END PORTFOLIO TAGS */ }
                    </div>                
                </div>{ /* END PORTFOLIO OVERLAY */ } 
              
              </a>
           </div>
    </div>
    { /* END PORTFOLIO ITEM */ }
       
    { /* START PORTFOLIO ITEM */ }                   
    <div class="portfolio-item one-third column media">
           <div class="portfolio">
              <a href="#" class="portfolio-image" target="_blank">
                <img src="images/clients/web/lestudio.png" alt="Le Studio"/>{ /* END PORTFOLIO IMAGE */ }   
                
                <div class="portfolio-overlay">                
                    <div class="thumb-info">                
                      <h3>Le Studio</h3>{ /* OVERLAY TITLE */ }
                      <p class="portfolio-tags">Music House</p>{ /* END PORTFOLIO TAGS */ }
                    </div>                
                </div>{ /* END PORTFOLIO OVERLAY */ } 
              
              </a>
           </div>
    </div>
    { /* END PORTFOLIO ITEM */ }   
             
   </div>
   { /* END PORTFOLIO WRAPPER */ }
		
	</div>
	
      </div>
    );
  }
}
 
export default Team;