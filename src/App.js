import React, { Component } from "react";
import "./resources/styles.css";
import Header from "./components/header_footer/Header";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        Welcome to venue!
      </div>
    );
  }
}

export default App;
