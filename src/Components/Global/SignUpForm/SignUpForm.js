import React, { Component } from "react";
import "./SignUpForm.scss";
import shape from "./assets/bg-shape.svg";
import Input from "../Input/Input";
import CheckBox from "../CheckBox/CheckBox";
import MainButton from "../MainButton/MainButton";

class SignUpForm extends Component {
    render() {
        return (
            <div className="sign-up-form">
                <div className="bg-shape">
                    <img src={shape} alt="shape-bg" />
                </div>
                <div className="headline">Apply Now</div>
                <div className="form">
                    <form action="/">
                        <Input
                            data={{ label: "First Name", name: "first-name" }}
                        />
                        <Input
                            data={{ label: "Last Name", name: "last-name" }}
                        />
                        <Input
                            data={{
                                label: "E-Maill Address",
                                name: "email",
                                type: "email",
                            }}
                        />
                        <Input
                            data={{
                                label: "Choose Password",
                                name: "password",
                                type: "password",
                            }}
                        />
                        <Input
                            data={{
                                label: "Confirm Password",
                                name: "password-confirm",
                                type: "password",
                            }}
                        />
                        <CheckBox
                            data={{
                                id: "agree",
                                name: "agree",
                            }}
                        />
                        <div className="submit">
                            <MainButton val="Apply Now" />
                            <div className="call">
                                or call us
                                <br /> +49 123 456 789
                            </div>
                        </div>
                        <div className="login">
                            <a href="/login">I already have an account</a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default SignUpForm;
