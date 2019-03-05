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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque at velit viverra, vehicula sem sed, tempor velit.
                Nulla feugiat libero quis mollis eleifend. Curabitur non dolor
                risus. In pellentesque euismod tellus, ut vulputate sem ornare
                eget. Sed sagittis id odio laoreet iaculis. Duis vestibulum,
                urna at consequat accumsan, est ante posuere nisi, cursus
                vestibulum sem odio nec diam. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
                Mauris pellentesque scelerisque laoreet. In auctor quam a
                dapibus facilisis. Phasellus ante ante, euismod sit amet
                faucibus suscipit, dictum maximus nulla.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
