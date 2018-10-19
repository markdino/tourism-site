import React, { Component } from "react";
import "./App.css";
import NavbarMain from "./components/Navbar";
import Hero from "./components/Hero";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarMain />
        <Hero />
      </div>
    );
  }
}

export default App;
