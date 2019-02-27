import React from "react";
import "./Header.scss";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="hero">
          <div>Hello, Im Connor Moore and I am a full-stack web developer.</div>
        </div>
        <header>
          <div className="menu">
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </div>
        </header>
      </div>
    );
  }
}
