import React, { Component } from "react";
 
class Careers extends Component {
  render() {
    return (
      <div>
        <div id="careers" className="container px-5 mb-4">         
				  <div className="title">
            <div className="subtitle">
                <p>
                    Coming together is a <span className="highlight">beginning;</span><br />
                    Keeping together is <span className="highlight">progress;</span><br />
                    Working together is <span className="highlight">success.</span>
                </p>
                <div align="right">
                    <p><em>~ HENRY FORD</em></p>
                </div>
                <center><a href="Careers.php" className="button scroll-to" target="_blank">Join Our Team</a></center>
			      </div>
          </div>
        </div>
        <div id="parallax2" className="parallax">
          <div className="bg2 parallax-bg"></div>
          <div className="overlay"></div>
          <div className="container clearfix">
            <div className="parallax-content">
              <div className="twitter-slider">              
                <div id="twitter-feed"></div>  
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Careers;