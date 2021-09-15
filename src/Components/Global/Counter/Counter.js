import React, { PureComponent } from "react";
import "./Counter.scss";
import CountUp from "react-countup";
import $ from "jquery";
class Counter extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            scrollTop: false,
        };
        this.Counter = React.createRef();
    }

    componentDidMount() {
        // For Check Offset Top
        $(window).on("scroll", () => {
            let counter = this.Counter.current;
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
                <div
                    className="counter"
                    style={{ color: color }}
                    ref={this.Counter}
                >
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
