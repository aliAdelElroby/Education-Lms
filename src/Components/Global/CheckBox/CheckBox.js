import React, { Component } from "react";
import "./CheckBox.scss";
import $ from "jquery";
class CheckBox extends Component {
    Checked(e) {
        let CustomCheck = $(e.currentTarget),
            input = $(e.currentTarget).siblings("input");
        if (input.attr("checked")) {
            input.attr("checked", false);
            CustomCheck.removeClass("checked");
        } else {
            input.attr("checked", true);
            CustomCheck.addClass("checked");
        }
    }
    CheckedLabel(e) {
        let CustomCheck = $(e.currentTarget).siblings(".checkbox-custom"),
            input = $(e.currentTarget).siblings("input");

        if (input.attr("checked")) {
            input.attr("checked", false);
            CustomCheck.removeClass("checked");
        } else {
            input.attr("checked", true);
            CustomCheck.addClass("checked");
        }
    }
    render() {
        const { id, name } = this.props.data;
        return (
            <div className="check-box">
                <input type="checkbox" id={id} name={name} />
                <div
                    className="checkbox-custom"
                    onClick={this.Checked.bind(this)}
                >
                    <i className="fas fa-check"></i>
                </div>
                <label htmlFor={id} onClick={this.CheckedLabel.bind(this)}>
                    I agree with the terms and conditions
                </label>
            </div>
        );
    }
}

export default CheckBox;
