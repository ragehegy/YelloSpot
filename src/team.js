import React, { Component } from "react";
 
class Team extends Component {
  render() {
    return (
      <div>
        <div id="ourteam" className="">
          <div className="container p-5">	
            <div className="row">	
              <div className="sixteen columns">
                <div className="title">
                  <div className="subtitle">
                      <p>Our team is a mix of <span className="highlight">left</span> brainers and <span className="highlight">right</span> brainers combining experts from both worlds, the <span className="highlight">creative</span> and the <span className="highlight">strategic</span>. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-dark py-4">  
            <div className="fancy-header2">       
              <h4>Who are we anyway?</h4>
              <h2 className="highlight">Meet the team who built the dream</h2>
            </div>
            <div id="parallax1" className="parallax">
              <div className="bg5 parallax-bg"></div>
            </div>   
          </div>     
        </div>
      </div>
    );
  }
}
 
export default Team;