import React, { Component } from "react";
import "./Input.scss";
import $ from "jquery";
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Id: this.props.data.label.toLowerCase().split(" ").join("-"),
            type: this.props.data.type,
        };
    }
    focus(e) {
        let inputField = $(e.currentTarget).parent(),
            label = $(e.currentTarget).parent().siblings();
        inputField.addClass("active");
        label.addClass("active");
    }
    blur(e) {
        let input = $(e.currentTarget),
            inputField = $(e.currentTarget).parent(),
            label = $(e.currentTarget).parent().siblings();
        if (input.val() === "") {
            inputField.removeClass("active");
            label.removeClass("active");
        }
    }
    showPass(e) {
        let icon = $(e.currentTarget);
        if (this.state.type === "password") {
            this.setState({
                type: "text",
            });
            icon.addClass("active");
        } else {
            this.setState({
                type: this.props.data.type,
            });
            icon.removeClass("active");
        }
    }
    render() {
        return (
            <div className="input">
                <div className="input-container">
                    <label htmlFor={this.state.Id}>
                        {this.props.data.label}
                    </label>
                    <div className="input-field">
                        <input
                            onFocus={this.focus.bind(this)}
                            onBlur={this.blur.bind(this)}
                            type={this.state.type ? this.state.type : "text"}
                            id={this.state.Id}
                            name={this.props.data.name}
                        />
                        {this.props.data.type === "password" ? (
                            <div
                                className="password-only"
                                onClick={this.showPass.bind(this)}
                            >
                                <i className="far fa-eye"></i>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
export default Input;
