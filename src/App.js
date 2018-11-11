import React, { Component } from "react";
import LandingPage from "./components/LandingPage";
import FormsPage from "./components/FormsPage";
import CreateFormsPage from "./components/CreateFormsPage";
import TreePage from "./components/TreePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/forms" component={FormsPage} />
          <Route exact path="/tree" component={TreePage} />
          <Route exact path="/create" component={CreateFormsPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
