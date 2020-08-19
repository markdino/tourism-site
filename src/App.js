import React, { Component } from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
import NavbarMain from "./components/Navbar";
import Home from "./pages/Home";
import Tour from "./pages/Tour";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarMain />
        <Router>
          <Home path="/" />
          <Tour path="tour" />
        </Router>
      </div>
    );
  }
}

export default App;
