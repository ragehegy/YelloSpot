import React, { Component } from "react";
 
class About extends Component {
  render() {
    return (
        <div>
            <div id="aboutus" className="AboutPage">
                <div className="container">	
                    <div className="row">	
                        <div className="sixteen columns">            
                            <div className="title">
                            {/* <a href="AboutUs.php" target="_blank"><h1>About Us</h1></a> */}
                                <div className="About">
                                    <p>
                                        <span className="highlight">
                                            <strong>YelloSpot</strong>
                                        </span> 
                                        is a digital online marketing agency, crafting innovative e-consultancy and integrated online solutions to organizations willing to lead the shifting trends toward a digital online society and economy.
                    In the midst of this transformation, we seek to partner with you to expand your brand identity awareness and to optimize your online presence by converging targeted leads into engaged loyal users. We acknowledge that the main goals of every business are to maximize its profits and growth. We sculpt your brands online experience to a "Chef D'oeuvre" level reflecting your organization set of competitive advantages and matching the ever changing consumer behavior trends. While we have set the standards high by continuously aiming to mastery in everything we do, we yell our values to be the lighthouse of our vision and mission road map.
                                    </p>     
                                    <span className="highlight"><strong>YelloSpot</strong></span> values:
                                    <ul>                              
                                            <li><strong>Clients as Partners:</strong> We believe that treating every client as a partner is essential to help us better and truly understand your business.</li>
                                            <li><strong>Users first:</strong> In the heart of online experience, the user comes first.</li>
                                            <li><strong>Small teams’ big ideas:</strong> Dedicated and motivated interdisciplinary teams with high expertise in delivering tailored online strategy and action plans.</li>
                                            <li><strong>Content is the king:</strong> We focus on content strategy development, as content is the king of digital media when it comes to reflecting your brand image and transform users to fans.</li>
                                            <li><strong>Media is queen:</strong> Presenting content in a lively, synchronized, e-polite, and inspirational matter will make a difference between an eye catcher and a dull display.</li>
                                            <li><strong>Content marketing is the kingdom:</strong> This is why we had gone far in building strategies by mixing, art of war with a pinch of boldness and a twist of muse.</li>
                                            <li><strong>We enjoy the journey!!! Our promise is to provide you with all the needed expertise to make your business thrive.</strong></li>
                                    </ul>
                                    <p align="right"><a href="AboutUs.php"><strong>Read More...</strong></a></p>
                            
                                
                                    <div className="container my-5" align="center">  
                                        <div className="row">
                                            <div className="container">
                                                <h3 className="font-weight-bold">How about Some Fun Facts about our agency?</h3>
                                            </div>
                                            <div className="container p-5">
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <div className="milestone-counter" data-perc="3">
                                                        <span className="milestone-count highlight">3</span>
                                                        <h6 className="milestone-details">Years Presence</h6>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-3">
                                                        <div className="milestone-counter" data-perc="41">
                                                        <span className="milestone-count highlight">41</span>
                                                        <h6 className="milestone-details">Clients we've worked with</h6>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-sm-3">
                                                        <div className="milestone-counter" data-perc="62">
                                                        <span className="milestone-count highlight">62</span>
                                                        <h6 className="milestone-details">Digital Campaigns</h6>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-sm-3">
                                                        <div className="milestone-counter" data-perc="22">
                                                        <span className="milestone-count highlight">22</span>
                                                        <h6 className="milestone-details">Websites developed</h6>
                                                        </div>
                                                    </div>   
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="border-dark" />
                                    <div className="container my-5" align="center">  
                                        <div className="row">
                                            <div className="col-sm-6 my-auto">
                                                <a href="https://www.microsoft.com/en-us/education/products/office">
                                                    <img src={require("./images/o365.png")} width="60%" alt="MS AEP" />
                                                </a>
                                            </div>
                                            <div className="col-sm-6">
                                                <h4 className="font-weight-bold">Microsoft Office 365 Education</h4>
                                                <p>
                                                    <span className="highlight">
                                                        <strong>YelloSpot </strong>
                                                    </span> 
                                                    offers a complete, intelligent solution, including Office 365, Windows 10, and Enterprise Mobility + Security, that empowers everyone to be creative and work together, securely.    
                                                </p> 
                                                <p>
                                                <strong>Microsoft Office 365</strong> is a cloud-hosted application accessed as a service. This is known as a Software as a Service application (SaaS). The cloud is a large concept in the IT industry that encompasses numerous advantages and considerations when compared to standard deployment models.
                                                </p>   
                                                <p>
                                                All <strong>Microsoft Office 365</strong> customers access the Office 365 application through their standard internet connection. Microsoft, therefore, is rendering the application as a service instead of a product.
                                                </p>
                                                <p>
                                                In short, you do not own <strong>Microsoft Office 365</strong>. You subscribe to it, and that has some distinct advantages.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>	                           
                        </div>
                    </div>      
                </div>
            </div>
        </div>
    );
  }
}
 
export default About;