import React, { Component } from "react";
import { Container, Button } from "./styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class FormsPage extends Component {
  render() {
    return (
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
  }
}

export default FormsPage;
