import React, { Component } from "react";
 
class Team extends Component {
  render() {
    return (
      <div>
        <div id="ourteam" class="page">
		<div class="container">	
           <div class="row">	
			<div class="sixteen columns">            
	            { /* START TITLE */ }	            
				<div class="title">
				  <h1 onmouseover="this.style.backgroundColor='#30302e'" onmouseout="this.style.backgroundColor=''">Our Team</h1>
                   { /*<center><img src="images/sections/OurTeam.png" style="width:150px; height:150px; margin: -50px 0px 0px 0px;" alt="" /></center>*/ }
                  <div class="subtitle">
                      <p>Our team is a mix of <span class="highlight">left</span> brainers and <span class="highlight">right</span> brainers combining experts from both worlds, the <span class="highlight">creative</span> and the <span class="highlight">strategic</span>. </p>
                  </div>{ /* END SUBTITLE */ }
                </div>{ /* END TITLE */ }  	                           
			</div>{ /* END SIXTEEN COLUMNS */ }  
           </div>{ /* END ROW */ }         
          </div>{ /* END CONTAINER */ }            
            

       <div class="fullwidth grey">  
       
        <div class="fancy-header2">       
           <h4>Who are we anyway?</h4>
           <h2 class="highlight">Meet the team who built the dream</h2>
        </div>     
                    { /* START PARALLAX SECTION */ }	
	<div id="parallax1" class="parallax">
		<div class="bg5 parallax-bg"></div>{ /* END PARALLAX BACKGROUND */ }
	</div>
	{ /* END PARALLAX SECTION */ }
           
       </div>


{ /*<div class="container clearfix">
		    
			<div class="sixteen columns">
            
            <h3>Here's few Famous clients we've worked with so far</h3>
            
                <div class="client-logos">
                  <a href="#" title="Featured Clients" class="clients"><img src="images/clients/client1.png" alt="Clients"></a>
                  <a href="#" title="Featured Clients" class="clients"><img src="images/clients/client6.png" alt="Clients"></a>
                  <a href="#" title="Featured Clients" class="clients"><img src="images/clients/client3.png" alt="Clients"></a>
                  <a href="#" title="Featured Clients" class="clients"><img src="images/clients/client7.png" alt="Clients"></a>
                  <a href="#" title="Featured Clients" class="clients"><img src="images/clients/client5.png" alt="Clients"></a>
                  <a href="#" title="Featured Clients" class="clients"><img src="images/clients/client2.png" alt="Clients"></a>
                  <a href="#" title="Featured Clients" class="clients"><img src="images/clients/client9.png" alt="Clients"></a>
                  <a href="#" title="Featured Clients" class="clients"><img src="images/clients/client8.png" alt="Clients"></a>
                  <a href="#" title="Featured Clients" class="clients"><img src="images/clients/client4.png" alt="Clients"></a>
                  <a href="#" title="Featured Clients" class="clients"><img src="images/clients/client10.png" alt="Clients"></a>
                  <a href="#" title="Featured Clients" class="clients"><img src="images/clients/client11.png" alt="Clients"></a>
                </div>{ /* END CLIENTS LIST */ } 
                
            { /*<p>Great work can only come from great partnerships. Here are just a few of the amazing clients that allow us to come to work every day and push our boundaries and theirs.</p>                
			{ /* </div>{ /* END SIXTEEN COLUMNS */ } 
	       { /*</div>*/ }        
    </div>
    
      </div>
    );
  }
}
 
export default Team;