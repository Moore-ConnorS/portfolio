import React, { Component } from "react";
import "./App.css";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import About from "./components/about/About";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <About />
      </div>
    );
  }
}

export default App;
