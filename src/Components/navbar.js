import React, {Component} from "react"
// import {Link, animateScroll as scroll} from "react-scroll"
import {Navbar, Nav} from 'react-bootstrap'
import logo from "../images/logo.png"

class YelloNav extends Component{
    // scrollToTop = ()=> {
    //     scroll.scrollToTop();
    // };

    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
                <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">
                            Home
                        </Nav.Link>
                        <Nav.Link href="#about">
                            About
                        </Nav.Link>
                        <Nav.Link href="#whatWeDo">
                            What We Do
                        </Nav.Link>
                        <Nav.Link href="#services">
                            Services
                        </Nav.Link>
                        <Nav.Link href="#portfolio">
                            Portfolio
                        </Nav.Link>
                        <Nav.Link href="#team">
                            Team
                        </Nav.Link>
                        <Nav.Link href="#careers">
                            Careers
                        </Nav.Link>
                        <Nav.Link href="#contact">
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default YelloNav;