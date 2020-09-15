import { render } from "@testing-library/react";
import React, {Component} from "react"
import {Link, animateScroll as scroll} from "react-scroll"
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll"
import logo from "../images/logo.png"

export default class Navbar extends Component{
    scrollToTop = ()=> {
        scroll.scrollToTop();
    };

    render(){
        return(
            <nav className="nav header light sticky-nav navigation" id="navbar">
                <div className="nav-content">
                    <img
                        src={logo}
                        className="nav-logo"
                        alt="Logo"
                        onClick={this.scrollToTop}
                        width="40" height="40"
                    />
                    <ul className="nav-items nav">
                        <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Home
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            About
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="whatWeDo"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            What We Do
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Services
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Portfolio
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="team"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Team
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="careers"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Careers
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Contact
                        </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}