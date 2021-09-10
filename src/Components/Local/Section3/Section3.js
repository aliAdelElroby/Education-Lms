import React, { Component } from "react";
import "./Section3.scss";

//=========Start Import Components
import SignUpForm from "../../Global/SignUpForm/SignUpForm";
class Section3 extends Component {
    render() {
        return (
            <div className="Section3">
                <div className="bg"></div>
                <div className="content">
                    <div className="text">
                        START YOUR COURSES! <a href="#1">TRY NOW FOR FREE</a>
                        <h3>Are you ready to work faster?</h3>
                    </div>
                </div>
                <SignUpForm />
            </div>
        );
    }
}
export default Section3;
