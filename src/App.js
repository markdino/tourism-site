import React, { Component } from "react";
import { Alert } from "reactstrap";
import "./App.css";
import NavbarMain from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarMain />
      </div>
    );
  }
}

export default App;
