import React, { Component } from "react";
import "./Post.scss";
import $ from "jquery";

// Import Aos Library ([A]nimation [O]n [S]croll)
import AOS from "aos";
import "aos/dist/aos.css";

class Post extends Component {
    constructor(props) {
        super(props);
        AOS.init();
        this.state = {
            hearts: this.props.data.hearts,
            heart: this.props.data.heart,
        };
    }

    addHeart(e) {
        let iconParent = $(e.currentTarget).parent();
        if (!this.state.heart) {
            this.setState({
                hearts: this.props.data.hearts + 1,
                heart: true,
            });
            iconParent.addClass("active");
        } else {
            this.setState({
                hearts: this.props.data.hearts,
                heart: false,
            });
            iconParent.removeClass("active");
        }
    }

    render() {
        const { headline, desc, comments, date } = this.props.data;
        return (
            <div className="post" data-aos="fade-right" data-aos-offset="200">
                <div className="headline">{headline}</div>
                <div className="desc">
                    <p>{desc}</p>
                </div>
                <div className="more">
                    <div className="tools">
                        <div
                            className={
                                this.state.heart ? "hearts active" : "hearts"
                            }
                        >
                            <i
                                className="fas fa-heart"
                                onClick={this.addHeart.bind(this)}
                            ></i>
                            {this.state.heart
                                ? this.props.data.hearts + 1
                                : this.state.hearts}
                        </div>
                        <div className="comments">
                            <i className="fas fa-comment"></i>
                            {comments}
                        </div>
                    </div>
                    <div className="date">{date}</div>
                </div>
            </div>
        );
    }
}

export default Post;
