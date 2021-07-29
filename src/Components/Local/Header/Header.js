import React, { Component } from "react";
import "./Header.scss";

//=========Start Import Components
import Navbar from "../../Global/Navbar/Navbar";

class Header extends Component {
    render() {
        return (
            <header className="main-header">
                <div className="container">
                    <Navbar />
                </div>
            </header>
        );
    }
}
export default Header;
