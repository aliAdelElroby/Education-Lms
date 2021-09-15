import React, { Component } from "react";
import "./CheckBox.scss";

class CheckBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false,
        };

        this.Checked = this.Checked.bind(this);
    }

    Checked() {
        this.setState((prev) => {
            return {
                checked: !prev.checked,
            };
        });
    }
    render() {
        const { id, name } = this.props.data;
        const isChecked = this.state.checked;
        return (
            <div className="check-box">
                <input
                    type="checkbox"
                    id={id}
                    name={name}
                    defaultChecked={isChecked}
                />
                <div
                    className={
                        this.state.checked
                            ? "checkbox-custom checked"
                            : "checkbox-custom"
                    }
                    onClick={this.Checked}
                >
                    <i className="fas fa-check"></i>
                </div>
                <label htmlFor={id} onClick={this.Checked}>
                    I agree with the terms and conditions
                </label>
            </div>
        );
    }
}

export default CheckBox;
