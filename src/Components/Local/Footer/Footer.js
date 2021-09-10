import React, { Component } from "react";
import "./Footer.scss";

//=========Start Import Assets
import logo from "./assets/Logo.svg";

class Footer extends Component {
    render() {
        return (
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                            <div className="one">
                                <div className="logo">
                                    <img src={logo} alt="logo-white" />
                                </div>
                                <div className="desc">
                                    Edumodo focuses on creating magnificent
                                    education websites with ease. Take the lead
                                    in the race with Learned.
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="two">
                                <div className="headline">
                                    FEATURED PROGRAMS
                                </div>
                                <ul>
                                    <li>Fixed responsive issue - Just Now</li>
                                    <li>New portfolio grid layout - Today</li>
                                    <li>
                                        Tested & approved WP 3.6 - 5 Hours Ago
                                    </li>
                                    <li>Fixed google map issue - Yesterday</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3">
                            <div className="three">
                                <div className="headline">LEARNING</div>
                                <ul>
                                    <li>Our Plans</li>
                                    <li>Free Trial</li>
                                    <li>Academic Solutions</li>
                                    <li>Business Solutions</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                            <div className="four">
                                <div className="headline">SUPPORT FORUM</div>
                                <div className="desc">
                                    Write your email into below field and join
                                    our quick support forum.
                                </div>
                                <div className="gethelp">
                                    <form action="/">
                                        <input
                                            type="text"
                                            placeholder="Email address"
                                        />
                                        <button>GET HELP</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <div className="content">
                            <div className="name">Copyright © 2021 learned</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
