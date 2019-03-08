import React, { Component } from "react";
import "./App.css";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
