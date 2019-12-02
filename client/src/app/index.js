import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavBar, Main } from "../components";
import { QuakesList, QuakesInsert, QuakesUpdate } from "../views";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Main />
    </Router>
  );
}

export default App;
