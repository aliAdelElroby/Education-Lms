import React, { Component } from "react";
import "./Counter.scss";
import CountUp from "react-countup";
import $ from "jquery";
class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollTop: false,
        };
        // For Check Offset Top
        $(window).on("scroll", () => {
            let counter = this._reactInternals.child.stateNode;
            if (window.scrollY + 500 >= $(counter).offset().top) {
                this.setState({
                    scrollTop: true,
                });
            }
        });
    }

    render() {
        // Start Functionality
        const { color, num, text } = this.props.data;
        return (
            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                <div className="counter" style={{ color: color }}>
                    <span>
                        <CountUp
                            end={this.state.scrollTop ? num : ""}
                            duration={2.75}
                        />
                    </span>
                    {text}
                </div>
            </div>
        );
    }
}

export default Counter;
