import React, { Component } from "react";
import { Alert } from "reactstrap";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Alert color="success">Reactstrap added!</Alert>
      </div>
    );
  }
}

export default App;
