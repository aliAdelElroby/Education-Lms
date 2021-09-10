import React, { Component } from "react";
import "./Sass/App.scss";
import $ from "jquery";

import Menu from "./Components/Global/Menu/Menu";
import Header from "./Components/Local/Header/Header";
import Section2 from "./Components/Local/Section2/Section2";
import Section3 from "./Components/Local/Section3/Section3";
import Section4 from "./Components/Local/Section4/Section4";
import Footer from "./Components/Local/Footer/Footer";

class App extends Component {
    constructor() {
        super();
        window.addEventListener("scroll", function () {
            let toTopButton = document.querySelector(".to-top");
            if (window.scrollY >= 700) {
                if (!toTopButton.className.includes("active")) {
                    toTopButton.classList.add("active");
                }
            } else {
                if (toTopButton.className.includes("active")) {
                    toTopButton.classList.remove("active");
                }
            }
        });
    }

    toTop() {
        $("html, body").animate({ scrollTop: "0" }, 100);
    }

    render() {
        return (
            <div className="App">
                <Menu />
                <Header />
                <Section2 />
                <Section3 />
                <Section4 />
                <Footer />
                <div className="overlay"></div>
                <div className="to-top" onClick={this.toTop}>
                    <i className="fas fa-arrow-up"></i>
                </div>
            </div>
        );
    }
}

export default App;
