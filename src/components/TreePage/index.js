import React, { Component } from "react";
import { Container, Button } from "./styles";
import { Link } from "react-router-dom";

class FormsPage extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div>
        <h1>   Please describe your issues</h1>
        <ul>
          <li>
            <Link to={{ pathname: "/form", search: "?name=domestic" }}>
              Domestic violence
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "/form", search: "?name=tax" }}>
              Federal Tax
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "/form", search: "?name=veteran" }}>
              Veteran rights
            </Link>
          </li>
        </ul>
      </div>
  );
=======
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
>>>>>>> 2e859143c616c44fcb75255dea48e41be517f5a2
  }
}

export default FormsPage;
