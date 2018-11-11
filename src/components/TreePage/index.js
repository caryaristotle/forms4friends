import React, { Component } from "react";

class FormsPage extends Component {
  render() {
    return (
      <Container>
        <h1>Please select the form </h1>
        
        <Link to="/forms">
          <Button> I know what forms to fill</Button>
        </Link>
        <Link to="/tree">
          <Button> Help me find what forms to fill </Button>
        </Link>
        <Link to="/create">
        <Button> Create a new form. Trust me, I'm a lawyer. </Button>
        </Link>
      </Container>
  );
  }
}

export default FormsPage;
