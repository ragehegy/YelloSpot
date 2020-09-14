import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <div id="home" class="home-parallax">
      <div class="home-text-wrapper">
      
          <div class="home-logo-text">
            <a href="#about">Welcome to YelloSpot</a>
          </div>                
           <div id="home-slider" class="flexslider">			
                <ul class="slides styled-list">
                
                <li class="home-slide"><p class="home-slide-content">We are a bunch of <span class="highlight">Digital</span> Fanatics</p></li>
                
                <li class="home-slide"><p class="home-slide-content">We are <span class="highlight">crazy</span> Marketers</p></li>
                
                <li class="home-slide"><p class="home-slide-content">We <span class="highlight">love</span> Rock N' Roll</p></li>
                
                </ul>
           </div>
        </div>
     </div>
      </div>
    );
  }
}
 
export default Home;