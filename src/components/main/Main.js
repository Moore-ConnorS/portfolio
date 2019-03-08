import React, { Component } from "react";
import Slider from "react-slick";
import "./Main.scss";

import homepage from "./projects/eventbriteHome.png";
import kensonHome from "./projects/kensonphoto.png";
import MLN from "./projects/MLN.png";

export default class Main extends Component {
  render() {
    return (
      <div className="projects">
        <h1>Projects</h1>
        <div className="projectFlex">
          <div>
            <a
              href="https://github.com/SammRosenthal/eventbrite-clone"
              target="_blank"
            >
              <img className="projectDisplay" src={homepage} />
            </a>
            <div className="projectInfo">
              <h4>Eventdark</h4>
              <p>
                A clone of the popular event coordination site, Eventbrite.
                Built in a group setting and having hard deadlines, this sites
                mimics the attendee experience of Eventbrite. Build in ReactJS,
                NodeJS, MySQL, Express, RESTful APIs, React Slick, Auth0.
                <br />
                <a
                  href="https://github.com/SammRosenthal/eventbrite-clone"
                  target="_blank"
                >
                  Github Repo
                </a>
              </p>
            </div>
          </div>
          <div>
            <div className="projectInfo">
              <h4>Kenson Photography</h4>
              <p>
                Simple commerce website that mimics the sale and purchase of
                nature photography. Includes Auth0 and an authorization
                middleware that prohibits the user from adding photos unless
                authorized. Built in ReactJS, NodeJS, MySQL, Express, Auth0,
                Stripe.
                <br />
                <a href="https://kensonphotography.fun/#/" target="_blank">
                  Kenson Photography
                </a>
              </p>
            </div>
            <a href="https://kensonphotography.fun/#/" target="_blank">
              <img className="projectDisplay" src={kensonHome} />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/Moore-ConnorS/personal-project"
              target="_blank"
            >
              <img className="projectDisplay" src={MLN} />
            </a>
            <div className="projectInfo">
              <h4>Moore Live News</h4>
              <p>
                News aggregator that takes a collection of articles from the BBC
                and also includes a weather API. The user is also able to log in
                and create articles on the site itself that appear as articles
                on the front page. Built using ReactJS, NodeJS, MySQL, RESTful
                APIs.
                <br />
                <a
                  href="https://github.com/Moore-ConnorS/personal-project"
                  target="_blank"
                >
                  Github Repo
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
