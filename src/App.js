import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "reactstrap";

import Home from "./views/Home";
import Results from "./views/Results";
import Forms from "./views/Forms";
class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <Switch>
            <Route path="/forms/:formId">
              <Forms />
            </Route>
            <Route path="/results">
              <Results />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;
