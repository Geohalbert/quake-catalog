import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  QuakesList,
  QuakesInsert,
  QuakesUpdate,
  USGSList,
  USGSQuery,
  HomeView,
  USGSQuakeView
} from "../views"

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/USGS" component={USGSQuery} />
        <Route path="/USGS/:id" component={USGSQuakeView} />
        <Route path="/USGS/list" exact component={USGSList} />
        <Route path="/quakes" exact component={QuakesList} />
        <Route path="/quakes/create" exact component={QuakesInsert} />
        <Route path="/quakes/update/:id" exact component={QuakesUpdate} />
      </Switch>
    </main>
  );
}

export default Main;
