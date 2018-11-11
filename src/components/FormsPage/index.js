import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Forms = () => <h1> Form1</h1>;

class FormsPage extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/forms" component={Forms} />
      </Router>
    );
  }
}

export default FormsPage;
