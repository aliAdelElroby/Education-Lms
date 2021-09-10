import React, { Component } from "react";
import "./Item.scss";

class Item extends Component {
    render() {
        return (
            <div
                className="item"
                style={{ backgroundColor: this.props.data.color }}
            >
                <img src={this.props.data.img} alt="" />
                <div className="text">{this.props.data.text}</div>
            </div>
        );
    }
}
export default Item;
