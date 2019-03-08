import React, { Component } from "react";
import portrait from "./IMG_2159.jpg";
import "./About.scss";

export default class About extends Component {
  render() {
    return (
      <div id="about">
        <div className="aboutMe">
          <div className="aboutFlex">
            <div>
              <img src={portrait} />
            </div>
            <div>
              <p>
                {" "}
                I am a husband and father of one out of Phoenix, Arizona looking
                for work all across the south-west. I was raised with a constant
                curiousity of technology and a strong desire to work with
                computer. Discovering the work of software development has
                allowed me to follow my dream to work in the tech field. I am
                looking forward to the continued growth and development with a
                great company.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
