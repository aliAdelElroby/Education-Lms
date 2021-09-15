import React, { Component } from "react";
import "./Input.scss";
import $ from "jquery";
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Id: this.props.data.label.toLowerCase().split(" ").join("-"),
            type: this.props.data.type,
            active: false,
        };
        this.Input = React.createRef();
    }
    focus() {
        this.setState({
            active: true,
        });
    }
    blur() {
        if (this.Input.current.value === "") {
            this.setState({
                active: false,
            });
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
        const Type = this.state.type ? this.state.type : "text",
            Id = this.state.Id,
            isActive = this.state.active ? "active" : false,
            Name = this.props.data.name;
        return (
            <div className="input">
                <div className="input-container">
                    <label htmlFor={this.state.Id} className={isActive}>
                        {this.props.data.label}
                    </label>
                    <div className={`input-field ${isActive}`}>
                        <input
                            ref={this.Input}
                            onFocus={this.focus.bind(this)}
                            onBlur={this.blur.bind(this)}
                            type={Type}
                            id={Id}
                            name={Name}
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
