import React, { Component } from "react";
 
class WhatWeDo extends Component {
  render() {
    return (
      <div>
        <div id="whatwedo" className="AboutPage">
          <div className="fullwidth grey">
            <div className="container">  
              <div className="fancy-header2 my-5">   
                <h3>We simply make your life easier.</h3>
              </div>
              <div className="row px-5">
              <div className="one-third column">
                  <div className="service-features">
                    <div className="img-container">
                      <a href="WhatWeDo.php" target="_blank"><img src={require("./images/icons/icons/copyright.png")} title="" alt="Service Features" /></a>
                    </div>
                    <h3 className="font-weight-bold">Creative</h3>                    
                    <div className="toggle">
                      <div className="toggle-title ">
                        <h6>
                          <span className="">From conceptualization to execution ...</span>
                        </h6>
                      </div>
                      <div className="toggle-inner">
                        <p>From conceptualization to execution our team of expert designers and digital art will blend a state of art designs and a cutting edge technology with a pinch of mind blowing, exquisite interface creating a cross-channel user experiences.</p>
                          <p align="right"><a href="WhatWeDo.php"><strong>Read More...</strong></a></p>
                      </div>
                    </div>
                  </div>               
                </div>
                <div className="one-third column">
                  <div className="service-features">
                    <div className="img-container">
                      <a href="WhatWeDo.php" target="_blank"><img src={require("./images/icons/icons/copyright.png")} title="" alt="Service Features" /></a>
                    </div>
                    <h3 className="font-weight-bold">Organic</h3>                    
                    <div className="toggle">
                      <div className="toggle-title ">
                        <h6>
                          <span className="">OUR ORGANIC DIGITAL MARKETING TOOLS ...</span>
                        </h6>
                      </div>
                      <div className="toggle-inner">
                        <p>Our organic digital marketing tools and strategies will maximize content visibility, social interaction, organic rankings, and brand awareness to optimize natural audience’s engagement and retention.</p>
                          <p align="right"><a href="WhatWeDo.php"><strong>Read More...</strong></a></p>
                      </div>
                    </div>
                  </div>               
                </div>
                <div className="one-third column">
                  <div className="service-features">
                    <div className="img-container">
                      <a href="WhatWeDo.php" target="_blank"><img src={require("./images/icons/icons/copyright.png")} title="" alt="Service Features" /></a>
                    </div>
                    <h3 className="font-weight-bold">Paid</h3>                    
                    <div className="toggle">
                      <div className="toggle-title ">
                        <h6>
                          <span className="">CREATING SUCCESSFUL PAID SEARCH ...</span>
                        </h6>
                      </div>
                      <div className="toggle-inner">
                        <p>From conceptualization to execution our team of expert designers and digital art will blend a state of art designs and a cutting edge technology with a pinch of mind blowing, exquisite interface creating a cross-channel user experiences.</p>
                          <p align="right"><a href="WhatWeDo.php"><strong>Read More...</strong></a></p>
                      </div>
                    </div>
                  </div>               
                </div>
                
              <div>
            </div>    
          </div>
        </div>
        <div id="parallax3" className="parallax">
          <div className="bg3 parallax-bg"></div>
            <div className="overlay"></div>
              <div className="container clearfix">
                <div className="parallax-content">
                  <div>
                    <p className="twitter-feed-icon">
                    <i className="icon-twitter"></i>
                    </p>
                    <p className="twitter-author"><a href="http://twitter.com/'envato'" target="_blank">Envato</a></p></div>
                    <div className="twitter-slider">              
                      <div id="twitter-feed"></div>  
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
 
export default WhatWeDo;