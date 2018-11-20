import React, { Component } from "react";
import { Container } from "reactstrap";
import "../App.css";

class Package extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <header className="headerTitle text-center">
            <h1>Tour Packages</h1>
            <p>A Great Collection of Our Tour Packages</p>
          </header>
        </Container>
      </div>
    );
  }
}

export default Package;
