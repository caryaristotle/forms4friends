import React, { Component } from "react";
import { Div } from "./styles";
import { Link } from "react-router-dom";

class FormsPage extends Component {
  render() {
    return (
      <Div>
        <h1> Please describe your issues</h1>
        <ul>
          <li>
            <p>I'm a victim of domestic violence.</p>
            <ul>
              <li>
                <Link to={{ pathname: "/form", search: "?name=domestic" }}>
                  <p>
                    I'd like to prevent my abuser from being within my physical
                    space.
                  </p>
                </Link>
              </li>
              <li>
                <Link to={{ pathname: "/form", search: "?name=domestic" }}>
                  <p>I'd like to protect my kids.</p>
                </Link>
              </li>
              <li>
                <Link to={{ pathname: "/form", search: "?name=domestic" }}>
                  <p>I'd like to protect my pets.</p>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <p>I'd like help filing federal taxes.</p>
            <ul>
              <li>
                <Link to={{ pathname: "/form", search: "?name=domestic" }}>
                  <p>I'd like to remove canceled debt from gross income. </p>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <p>I'm a veteran.</p>
            <ul>
              <li>
                <Link to={{ pathname: "/form", search: "?name=domestic" }}>
                  <p>I'd like to file for a discharge upgrade.</p>
                </Link>
              </li>
              <li>
                <Link to={{ pathname: "/form", search: "?name=domestic" }}>
                  <p>I'd like to appeal a vets benefits denial.</p>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </Div>
    );
  }
}

export default FormsPage;
