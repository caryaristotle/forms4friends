import React, { Component } from "react";
import { Container, Button, Div, Span } from "./styles";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <Container>
        <Div>
          <ul>
            <h1>Welcome to Legal Form Search!</h1>
            <Link to="/forms">
              <Button> <Span/> I know what forms to fill</Button>
            </Link>
            <Link to="/tree">
              <Button> Help me find what forms to fill </Button>
            </Link>
            <Link to="/create">
              <Button> Create a new form. Trust me, I'm a lawyer. </Button>
            </Link>
          </ul>
        </Div>
      </Container>
    );
  }
}

export default LandingPage;
