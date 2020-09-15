import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'

class Home extends Component {
  render() {
    return (
      <div>
        <div id="home" className="">
          <div className="home-text-wrapper">   
          <Carousel>
              <Carousel.Item>
                <p className="home-slide-content">We are a bunch of <span className="highlight">Digital</span> Fanatics
                  </p>
              </Carousel.Item>
              <Carousel.Item>
                <p className="home-slide-content">We are <span className="highlight">crazy</span> Marketers
                  </p>
              </Carousel.Item>
              <Carousel.Item>
              <p className="home-slide-content">We <span className="highlight">love</span> Rock N' Roll
                  </p>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Home;