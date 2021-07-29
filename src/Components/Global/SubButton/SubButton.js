import React, { Component } from "react";
import "./SubButton.scss";

class SubButton extends Component {
    render() {
        return <button className="sub-button">{this.props.val}</button>;
    }
}

export default SubButton;
