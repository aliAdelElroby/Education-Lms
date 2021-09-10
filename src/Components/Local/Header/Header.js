import React, { Component } from "react";
import "./Header.scss";

//=========Start Import Assets
import shape from "./assets/bg-shape.svg";
import shape2 from "./assets/bg-shape2.svg";

//=========Start Import Components
import Navbar from "../../Global/Navbar/Navbar";
import MainButton from "../../Global/MainButton/MainButton";

class Header extends Component {
    render() {
        return (
            <header className="main-header">
                <div className="container">
                    <Navbar />
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4 photo-parent">
                            <div className="photo">
                                <img src={shape2} alt="photoa-shape" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="content">
                                <h2>
                                    Innovation for education
                                    <br /> and society
                                </h2>
                                <p>
                                    Our interdisciplinary majors and minors mean
                                    you can
                                    <br /> chart your own course for academic
                                    success.
                                </p>
                                <MainButton val="Visit our Campus " />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg">
                    <div className="photoTwo">
                        <img src={shape} alt="bg-shapes" />
                    </div>
                </div>
            </header>
        );
    }
}
export default Header;
