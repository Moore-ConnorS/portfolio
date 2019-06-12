import React from "react";
import "./Header.scss";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="hero">
          <div className="image" />
          <div>
            <div>Hello, </div>
            <div>I am Connor Moore and I turn ideas into reality</div>
          </div>
        </div>
      </div>
    );
  }
}
