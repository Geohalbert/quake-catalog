import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeView from "../views/HomeView.jsx";
import USGSQuakeContainer from "../containers/USGSQuakeContainer.jsx";
import USGSQueryContainer from "../containers/USGSQueryContainer.jsx";

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