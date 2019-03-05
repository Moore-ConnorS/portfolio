import React, { Component } from "react";
import Slider from "react-slick";
import "./Main.scss";

import homepage from "./projects/eventbriteHome.png";
import kensonHome from "./projects/kensonphoto.png";
import MLN from "./projects/MLN.png";

export default class Main extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className="projects">
        <h1>Projects</h1>
        <div className="projectFlex">
          <div>
            <img className="projectDisplay" src={homepage} />
            <p>This is where the project description will go.</p>
          </div>
          <div>
            <p>This is where the project description will go.</p>
            <img className="projectDisplay" src={kensonHome} />
          </div>
          <div>
            <img className="projectDisplay" src={MLN} />
            <p>This is where the project description will go.</p>
          </div>
        </div>
      </div>
    );
  }
}
