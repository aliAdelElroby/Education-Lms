import React, { Component } from "react";
import "./Menu.scss";

//=========Start Import Components
import Links from "../Links/Links";
import SubButton from "../SubButton/SubButton";

class Menu extends Component {
    render() {
        return (
            <div className="menu-slide">
                <div className="content">
                    <Links />
                    <SubButton val="Apply Now" />
                </div>
            </div>
        );
    }
}
export default Menu;
