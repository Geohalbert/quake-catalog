import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeView from "../views/HomeView.jsx";
import USGSQuakeView from "../views/USGSQuakeView.jsx";
import USGSQuery from "../views/USGSQuery.jsx";

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/query" component={USGSQuery} />
        <Route path="/query/:id" component={USGSQuakeView} />
      </Switch>
    </main>
  );
}

export default Main;
