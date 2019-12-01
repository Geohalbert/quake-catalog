import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeView from "../views/HomeView.jsx";
import QuakeView from "../views/QuakeView.jsx";
import QueryForm from "../views/QueryForm.jsx";

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/query" component={QueryForm} />
        <Route path="/query/:id" component={QuakeView} />
      </Switch>
    </main>
  );
}

export default Main;
