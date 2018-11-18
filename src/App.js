import React, { Component } from "react";
import "./resources/styles.css";
import Header from "./components/header_footer/Header";
import Featured from "./components/Featured";
import VunueNfo from "./components/VenueNFO";
import HighLight from "./components/HighLights";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ height: "1500px", background: "white" }}
      >
        <Header />
        <Featured />
        <VunueNfo />
        <HighLight />
      </div>
    );
  }
}

export default App;
