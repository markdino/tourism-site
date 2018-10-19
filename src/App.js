import React, { Component } from "react";
import "./App.css";
import NavbarMain from "./components/Navbar";
import Hero from "./components/Hero";
import MainCarousel from "./components/Carousel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarMain />
        <Hero />
        <MainCarousel />
      </div>
    );
  }
}

export default App;
