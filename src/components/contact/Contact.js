import React, { Component } from "react";
import "./Contact.scss";

import mail from "./icons8-secured-letter-filled-50.png";
import linkedIn from "./icons8-linkedin-52.png";
import github from "./icons8-github-52.png";

export default class Contact extends Component {
  render() {
    return (
      <div className="contactMe">
        <h1>Contact Me</h1>
        {/* <form>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Subject" />
          <textarea placeholder="Message" />
        </form> */}
        <div className="mail">
          <img src={mail} />
          <h3>: connorsmoore2018@gmail.com</h3>
        </div>
        <div className="icons">
          <a target="_blank" href="https://www.linkedin.com/in/moore-connor/">
            <img src={linkedIn} />
          </a>
          <a href="https://github.com/Moore-ConnorS">
            <img target="_blank" src={github} />
          </a>
        </div>
      </div>
    );
  }
}
