import React, { Component } from "react";
import { Link } from "react-router-dom";

class FormsPage extends Component {
  render() {
    return (
      <div>
        <h1>Forms Page!</h1>
        <ul>
          <li>
            Domestic Violence
            <ul>
              <li>
                Protective Order
                <ul>
                  <li>
                    <Link
                      to={{
                        pathname: "/form",
                        search: "?name=domestic.protective.eligibility"
                      }}
                    >
                      Eligibility
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/form",
                        search: "?name=domestic.protective.plaintiffinfo"
                      }}
                    >
                      Plaintiff Confidential Information Form
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/form",
                        search: "?name=domestic.protective.defendantinfo"
                      }}
                    >
                      Defendant Confidential Information Form
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/form",
                        search: "?name=domestic.protective.209a"
                      }}
                    >
                      209A
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/form",
                        search: "?name=domestic.protective.affadavit"
                      }}
                    >
                      Affadavit
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
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
