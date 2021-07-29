import React, { Component } from "react";
import "./Navbar.scss";

//=========Start Import Assets
import logo from "./assets/Logo.svg";

//=========Start Import Components
import SubButton from "../SubButton/SubButton";

class Navbar extends Component {
    render() {
        return (
            <nav className="main-navbar">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="links">
                    <ul>
                        <li>
                            <a href="#" className="active">
                                Study
                            </a>
                        </li>
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">Admmission</a>
                        </li>
                        <li>
                            <a href="#">Pages</a>
                        </li>
                        <li>
                            <a href="#">News</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="apply">
                    <SubButton val="Apply Now" />
                </div>
            </nav>
        );
    }
}
export default Navbar;
