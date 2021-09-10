import React, { Component } from "react";
import "./VideoFrame.scss";
import $ from "jquery";
import img from "./assets/img.png";

class VideoFrame extends Component {
    play(e) {
        let button = $(e.currentTarget),
            video = button.siblings();
        video.trigger("play");
        button.fadeOut();
        video.on("ended", () => {
            button.fadeIn();
        });
    }
    render() {
        return (
            <div className="video-parent">
                <img src={img} alt="img" />
                <div className="video-frame">
                    <div className="video-container">
                        <div
                            className="play-button"
                            onClick={this.play.bind(this)}
                        >
                            <i className="fas fa-play"></i>
                        </div>
                        <video
                            className="videoSrc"
                            src={this.props.video}
                        ></video>
                    </div>
                </div>
            </div>
        );
    }
}
export default VideoFrame;
