import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeView from "../views/HomeView.jsx";
import {USGSQuakeContainer,USGSQueryContainer} from "../containers";

function USGS() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/query" component={USGSQueryContainer} />
        <Route path="/query/:id" component={USGSQuakeContainer} />
      </Switch>
    </main>
  );
}

export default USGS;