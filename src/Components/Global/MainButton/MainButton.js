import React, { Component } from "react";
import "./MainButton.scss";
class MainButton extends Component {
    render() {
        return <button className="main-button">{this.props.val}</button>;
    }
}
export default MainButton;
