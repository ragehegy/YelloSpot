import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contactus" className="multipage">
		<div className="container">	
				<div className="title">
                    <center><a href="ContactUs.php" target="_blank"><img src={require("./images/Pin.png")} alt=""  /></a></center>
                    <center>
                          <span className="highlight">LOCATE US</span>
                    </center>
				  <div className="subtitle">
                      <p>We'd really love to <span className="highlight">hear from you</span> so why not drop us an email and <span className="highlight">we'll get back</span> to you as soon as we finish our <span className="highlight">coffee</span>.</p>
                      { /*<img src="images/Sections/ContactUs.jpg" title="" alt="" style="border:5px solid #fed404" />*/ }
                  </div>{ /* END SUBTITLE */ }
                </div>{ /* END TITLE */ }  	                             
          </div>{ /* END CONTAINER */ }         
		<div className="container clearfix">
			<div className="sixteen columns">
				
	   { /* START CONTACT BOX */ }
      <div className="contact-box">
        { /* START CONTACT FORM */ }
         <div id="contact-form">			
            <form action="contact.php" method="post">
                <div id="contact-input">
                 { /*[if IE]>
                    <label for="name">Name</label>
                <![endif]*/ }
                  <input type="text" name="name" id="name" placeholder="Name (required)" />
                   { /*[if IE]>
                   		<label for="email">Email</label>
                    <![endif]*/ }
                  <input type="text" name="email" id="email" placeholder="Email (required)" />
                   { /*[if IE]>
                   		<label for="subject">Subject</label>
                    <![endif]*/ }
                  <input type="text" name="subject" id="subject" placeholder="Subject (required)" />
                    <input type="text" name="phone" id="phone" placeholder="Phone (required)" />
                </div>
                <div id="contact-textarea">
                  <textarea name="message" id="message" cols="39" rows="4" placeholder="Your Message"></textarea>
                </div>
                <div id="contact-submit">
                  <div>
                    <input name="submit" type="submit" id="submit" tabindex="5" value="Post Comment" className="comment-submit small button" />
                  </div>
                </div>
              </form> 
         <div className="clear"></div>
          </div>
           <div className="result"></div>  
		</div>
		</div>
	</div>    
        <div className="copyright">
     <div className="container clearfix">
        <div className="container text-center">
            <div className="social-icons">
              <div className="social-icon"><a href="mailto:info@yellospot.com"><i className="fa fa-lg fa-envelope"></i></a></div>
              <div className="social-icon"><a href="https://www.facebook.com/pages/YelloSpot/645947028872274?ref=hl" target="_blank" data-original-title="Facebook"><i className="fa fa-lg fa-facebook"></i></a></div>
              <div className="social-icon"><a href="https://twitter.com/YelloSpot" target="_blank" data-original-title="Twitter"><i className="fa fa-lg fa-twitter"></i></a></div>
              <div className="social-icon"><a href="https://instagram.com/yellospot/" target="_blank" data-original-title="Instagram"><i className="fa fa-lg fa-instagram"></i></a></div>
              <div className="social-icon"><a href="https://www.linkedin.com/company/yellospot?trk=biz-companies-cym" target="_blank" data-original-title="LinkedIn"><i className="fa fa-lg fa-linkedin"></i></a></div>
              <div className="social-icon"><a href="https://plus.google.com/u/0/b/107067166167165746556/107067166167165746556/" rel="publisher" target="_blank" data-original-title="Google+"><i className="fa fa-lg fa-google-plus"></i></a></div>
           </div>
        </div>
         
         
         { /* ADDRESSES SECTION */ }	
<div className="row">
                <div className="one-third column">
                  <div className="service-features">
                 <p><strong>LEBANON</strong><br />
             <strong>Tel / Fax:</strong> + 961 9 911 467, + 961 9 911 468<br />
              <strong>Email Address:</strong> info@YelloSpot.com<br />
            <strong>Address:</strong> Office 31, 4th Floor, City Center Bldg.,<br />
                     New Str., Ghadir, Jounieh, <strong>Lebanon</strong></p>     
            { /* END OF TOGGLE */ }
                  </div>               
                </div>{ /* END ONE THIRD COLUMN */ }
                
                <div className="one-third column">
                  <div className="service-features">
                  <p><strong>EGYPT</strong><br />
                 <strong>Tel / Fax:</strong> + 20 1027333125<br />
              <strong>Email Address:</strong> egypt@YelloSpot.com<br />
            <strong>Address:</strong> 140B, Hadayek El Ahram, Kafr Nassar,<br />
            Al Ahram, Giza, <strong>Egypt</strong></p>
             
            { /* END OF TOGGLE */ }
                  </div>               
               
                </div>{ /* END ONE THIRD COLUMNS */ }   
                
                <div className="one-third column">
                  <div className="service-features">
                  <p><strong>GREECE</strong><br />
             <strong>Tel / Fax:</strong> + 30 6945352152<br />
              <strong>Email Address:</strong> greece@YelloSpot.com<br />
            <strong>Address:</strong> 5th Floor, Aki Miaouli 71, Piraeus, <strong>Greece</strong></p>
           </div>
            { /* END OF TOGGLE */ }
                  </div>  
                  <hr className="border-dark" />             
                </div>{ /* END ONE THIRD COLUMNS */ }
    </div>
	  { /* End Addresses Section */ }
       <br />
         <div className="sixteen columns" align="center">
             <p align="center"><strong><a href="TermsConditions.php" target="_blank">Terms & Conditions</a>&nbsp; l &nbsp; <a href="PrivacyPolicy.php" target="_blank">Privacy Policy l &nbsp;</a> <a href="sitemap.php" target="_self">Sitemap</a></strong><br />
            2016 All Rights Reserved. YelloSpot s.a.r.l    
            </p>
             </div>

         
         </div> { /* END SIXTEEN COLUMNS */ }        
	  </div>{ /* END CONTAINER */ }
    
      </div>
    );
  }
}
 
export default Contact;