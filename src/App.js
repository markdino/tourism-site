import React, { Component } from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
import NavbarMain from "./components/Navbar";
import Home from "./components/Home";
import Tour from "./components/Tour";
import Lalaguna from "./components/tours/Lalaguna";
import Tabok from "./components/tours/Tabok";
import Landmark from "./components/tours/Landmark";
import Marson from "./components/tours/Marson";
import Cagomaoas from "./components/tours/Cagomaoas";
import RisenChrit from "./components/tours/RisenChrist";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarMain />
        <Router>
          <Home path="/" />
          <Tour path="tour" />
          <Lalaguna path="lalaguna" />
          <Tabok path="tabok" />
          <Landmark path="landmark" />
          <Marson path="marson" />
          <Cagomaoas path="cagumao-as" />
          <RisenChrit path="risen-christ" />
        </Router>
      </div>
    );
  }
}

export default App;
