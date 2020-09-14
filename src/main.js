import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./home";
import About from "./about";
import WhatWeDo from "./whatWeDo";
import Services from "./services";
import Team from "./team";
import Careers from "./careers";
import Contact from "./contact";
import Portfolio from "./portfolio";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
            <nav className="header light sticky-nav navigation m-1">
                <div className="container clearfix">			
                    {/* <div className="four columns">	
                        <div className="logo large">
                            <a href="#home"><img src="./images/logo.png" title="logo" alt="Logo" /></a>
                        </div>		
                    </div>   */}
                    <div className="">            		
                        <ul className="main-menu large nav" id="nav">
                            <li className="nav-item"><NavLink to="/">
                                    <img src="images/logo.png" alt="Logo"/>
                                </NavLink></li>
                            <li className="nav-item"><NavLink to="/">Home</NavLink></li>
                            <li className="nav-item"><NavLink to="/about">About</NavLink></li>
                            
                            <li className="nav-item"><NavLink to="/whatWeDo">What We Do?</NavLink></li>
                            <li className="nav-item"><NavLink to="/services">Services</NavLink></li>
                            <li className="nav-item"><NavLink to="/portfolio">Portfolio</NavLink></li>
                            <li className="nav-item"><NavLink to="/team">Team</NavLink></li>
                            {/* <li className="nav-item"><NavLink to="/codes">Short Codes</NavLink></li> */}
                            {/* <li className="nav-item"><NavLink to="/blog">Blog</NavLink></li> */}
                            <li className="nav-item"><NavLink to="/careers">Careers</NavLink></li>

                            <li className="nav-item"><NavLink to="/contact">Contact</NavLink></li>

                        </ul>				
                    </div>
                </div>
            </nav>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/whatWeDo" component={WhatWeDo}/>
                <Route path="/services" component={Services}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/team" component={Team}/>
                <Route path="/careers" component={Careers}/>
            </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;