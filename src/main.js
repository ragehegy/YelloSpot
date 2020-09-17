import React, { Component } from "react";
import {
//   Route,
//   NavLink,
  HashRouter
} from "react-router-dom";
import YelloNav from "./Components/navbar"
import Footer from "./Components/footer"
import Section from "./Components/section"
import Home from "./home";
import About from "./about";
import WhatWeDo from "./whatWeDo";
import Services from "./services";
import Portfolio from "./portfolio";
import Team from "./team";
import Careers from "./careers";
import Contact from "./contact";
// import Portfolio from "./portfolio";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div className="App">
                <Section
                    className="home-parallax"
                    title="WELCOME TO YELLOSPOT!"
                    titleClass="home-logo-text"
                    subtitle={<Home />}
                    dark={true}
                    id="home"
                />
                <YelloNav />
                <Section
                    className="title my-4"
                    title="About Us"
                    subtitle={<About />}
                    id="about"
                />
                <Section
                    title="What We Do"
                    titleClass="title"
                    subtitle={<WhatWeDo />}
                    dark={true}
                    id="whatWeDo">
                </Section>
                <Section
                    title="Our Services"
                    titleClass="title"
                    subtitle={<Services />}
                    id="services">
                </Section>
                <Section
                    title="Our Featured Portfolio"
                    titleClass="title"
                    subtitle={<Portfolio />}
                    id="portfolio">
                </Section>
                <Section
                    title="Our Team"
                    titleClass="title"
                    subtitle={<Team />}
                    dark={true}
                    id="team">
                </Section>
                <Section
                    title="Careers"
                    titleClass="title"
                    subtitle={<Careers />}
                    id="careers">
                </Section>
                <Section
                    title="Contact Us"
                    titleClass="title"
                    subtitle={<Contact />}
                    dark={true}
                    id="contact">
                </Section>
                <Footer />
                {/* <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/whatWeDo" component={WhatWeDo}/>
                    <Route path="/services" component={Services}/>
                    <Route path="/portfolio" component={Portfolio}/>
                    <Route path="/team" component={Team}/>
                    <Route path="/careers" component={Careers}/>
                </div> */}
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;