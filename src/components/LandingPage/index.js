import React, { Component } from "react";
import { Container, Button } from "./styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <Container>
        <Link to="/forms">
          <Button>I know what forms to fill</Button>
        </Link>
        <Link to="/tree">
          <Button>Help me find which forms to fill</Button>
        </Link>
        <Link to="/create">
          <Button>Create a new form. Trust me, I'm a lawyer.</Button>
        </Link>
      </Container>
    );
  }
}

export default LandingPage;
