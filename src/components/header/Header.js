import React from "react";
import "./Header.scss";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="hero">
          <div className="image" />
          <div id="headerText">
            <div id="hello">Hello, </div>
            <div id="name">I am Connor Moore</div>
            <div id="idea">I turn ideas into reality</div>
          </div>
        </div>
      </div>
    );
  }
}
