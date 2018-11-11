import React, { Component } from "react";
import { Container, Button } from "./styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Link to="/forms">
            <Button />
          </Link>
          <Link to="/tree">
            <Button />
          </Link>
          <Link to="/create">
            <Button />
          </Link>
        </Container>
      </Router>
    );
  }
}

export default LandingPage;
