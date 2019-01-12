import React, { Component } from "react";
import "../App.css";
import Hero from "./Hero";
import About from "./About";
import Package from "./Package";
import Services from "./Services";
import Contact from "./Contact";

class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <About />
        <Package />
        <Services />
        <Contact />
      </div>
    );
  }
}

export default Home;
