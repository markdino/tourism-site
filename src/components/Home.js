import React, { Component } from "react";
import "../App.css";
import Hero from "./Hero";
import About from "./About";
import Package from "./Package";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Hero />
        <About />
        <Package />
        <Services />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
