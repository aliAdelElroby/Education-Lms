import React, { Component } from "react";
import "./Section2.scss";

//=========Start Import Components
import Item from "../../Global/Item/Item";
import VideoFrame from "../../Global/VideoFrame/VideoFrame";

//=========Start Import Data
import dataSubjects from "./data/dataSubjects.js";
import Counter from "../../Global/Counter/Counter";

// Import Aos Library ([A]nimation [O]n [S]croll)
import AOS from "aos";
import "aos/dist/aos.css";

//=========Start Import Assets
import Shape from "./assets/bg-shape.svg";

class Section2 extends Component {
    constructor(props) {
        super(props);
        AOS.init();
        this.state = {
            data: dataSubjects,
        };
    }

    render() {
        const items = this.state.data.map((el) => {
            return (
                <div
                    key={el.id}
                    className="col-12 col-sm-12 col-md-6 col-lg-4"
                    data-aos="zoom-in"
                    data-aos-offset="200"
                >
                    <Item data={el} />
                </div>
            );
        });
        return (
            <section className="section2">
                <div className="container">
                    <div className="row">
                        <div className="items">
                            <div className="row">{items}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="content">
                            <div className="bg-shape">
                                <img src={Shape} alt="bg-shape" />
                            </div>
                            <div className="row">
                                <div
                                    className="col-12 col-sm-12 col-md-12 col-lg-6"
                                    data-aos="fade-right"
                                    data-aos-offset="400"
                                >
                                    <div className="video">
                                        <VideoFrame video="/Education-Lms/assets/video.mp4" />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                    <div className="content-text">
                                        <h2>
                                            Limitless learning, more
                                            possibilities
                                        </h2>
                                        <p>
                                            The University of Rochester is one
                                            of the country's top-tier research
                                            universities. Our campuses are home
                                            to 200 academic majors, more than
                                            2,000 faculty and instructional
                                            staff, and some 10,000
                                            students—approximately half of whom
                                            are women.
                                            <br />
                                            <br /> Learning at the University of
                                            Rochester is also on a very personal
                                            scale. Rochester remains one of the
                                            smallest and most collegiate among
                                            top research universities, with
                                            smaller classes, a low 10:1 student
                                            to teacher ratio, and increased
                                            interactions with faculty.
                                        </p>
                                        <div className="statistics">
                                            <div className="row">
                                                <Counter
                                                    data={{
                                                        color: "#ffba00",
                                                        num: "4000",
                                                        text: "Students",
                                                    }}
                                                />
                                                <Counter
                                                    data={{
                                                        color: "#ff5f72",
                                                        num: "260",
                                                        text: "Courses",
                                                    }}
                                                />
                                                <Counter
                                                    data={{
                                                        color: "#43cb83",
                                                        num: "5679",
                                                        text: "Hours video",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Section2;
