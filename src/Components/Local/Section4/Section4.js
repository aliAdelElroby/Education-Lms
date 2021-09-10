import React, { Component } from "react";
import "./Section4.scss";

//=========Start Import Components
import MainButton from "../../Global/MainButton/MainButton";
import Post from "../../Global/Post/Post";

//=========Start Import Data
import posts from "./data/posts.js";

class Section4 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: posts,
        };
    }

    render() {
        const posts = this.state.data.map((el) => {
            return (
                <div
                    className="col-12 col-sm-12 col-md-12 col-lg-6"
                    key={el.id}
                >
                    <Post data={el} />
                </div>
            );
        });
        return (
            <div className="Section4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                            <div className="heading">
                                <h3>Our University News</h3>
                                <p>
                                    A hundred thousand grateful loves to your
                                    dear papa and mamma. Is your poor brother
                                    recovered of his rack-punch? Oh, dear! Oh,
                                    dear! How men should beware of wicked punch!
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                            <div className="button">
                                <MainButton val="All News Post" />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">{posts}</div>
                </div>
            </div>
        );
    }
}

export default Section4;
