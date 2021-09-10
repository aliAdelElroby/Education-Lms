import React, { Component } from "react";
import "./Navbar.scss";
import $ from "jquery";

//=========Start Import Assets
import logo from "./assets/Logo.svg";

//=========Start Import Components
import SubButton from "../SubButton/SubButton";
import Links from "../Links/Links";

class Navbar extends Component {
    menuToggle() {
        let menuIcon = $(".main-navbar .menu .menu-icn"),
            menuSlide = $(".menu-slide"),
            overlay = $(".overlay");
        if (menuIcon.hasClass("active")) {
            menuIcon.removeClass("active");
            menuSlide.removeClass("active");
            overlay.fadeOut(200);
            $("body").removeClass("no-scroll");
        } else {
            menuIcon.addClass("active");
            menuSlide.addClass("active");
            overlay.fadeIn(200);
            $("body").addClass("no-scroll");
        }
    }

    render() {
        return (
            <nav className="main-navbar">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <Links />
                <div className="apply">
                    <SubButton val="Apply Now" />
                </div>
                <div className="menu" onClick={this.menuToggle}>
                    <div className="menu-icn ">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Navbar;
