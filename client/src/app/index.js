import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavBar } from "../components";
import { QuakesList, QuakesInsert, QuakesUpdate } from "../views";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/quakes/list" exact component={QuakesList} />
        <Route path="/quakes/create" exact component={QuakesInsert} />
        <Route path="/quakes/update/:id" exact component={QuakesUpdate} />
      </Switch>
    </Router>
  );
}

export default App;
