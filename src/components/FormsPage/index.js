import React, { Component } from "react";
import { Div } from "./styles";
import { Link } from "react-router-dom";

class FormsPage extends Component {
  render() {
    return (
      <Div>
        <h1>Select your form</h1>
        <ul>
          <li>
            <p>Domestic Violence</p>
            <ul>
              <li>
                <p>Protective Order</p>
                <ul>
                  <li>
                    <Link
                      to={{
                        pathname: "/form",
                        search: "?name=domestic.protective.eligibility"
                      }}
                    >
                      <p>Eligibility</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/form",
                        search: "?name=domestic.protective.plaintiffinfo"
                      }}
                    >
                      <p>Plaintiff Confidential Information Form</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/form",
                        search: "?name=domestic.protective.defendantinfo"
                      }}
                    >
                      <p>Defendant Confidential Information Form</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/form",
                        search: "?name=domestic.protective.209a"
                      }}
                    >
                      <p>209A</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/form",
                        search: "?name=domestic.protective.affadavit"
                      }}
                    >
                      <p>Affadavit</p>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to={{ pathname: "/form", search: "?name=tax" }}>
              <p>Federal Tax</p>
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "/form", search: "?name=veteran" }}>
              <p>Veteran rights</p>
            </Link>
          </li>
        </ul>
      </Div>
    );
  }
}

export default FormsPage;
