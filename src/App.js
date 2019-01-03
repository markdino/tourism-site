import React, { Component } from "react";
import "./App.css";
import NavbarMain from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Package from "./components/Package";
import Tour from "./components/Tour";
import Services from "./components/Services";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarMain />
        <Hero />
        <div id="mainCarousel">
          <About />
        </div>
        <div className="package">
          <Package />
        </div>
        <div className="services">
          <Services />
        </div>
        <Tour />
      </div>
    );
  }
}

export default App;
