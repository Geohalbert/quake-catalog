import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { history } from "../history";
import { alertActions } from "../actions";

import { NavBar } from "../components";
import {
  HomeView
} from "../views";
import {
  QuakeListContainer,
  CreateQuakeContainer,
  UpdateQuakeContainer,
  USGSQuakeContainer,
  USGSQueryContainer
} from "../containers";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div className="container">
        <div className="col-sm-8 col-sm-offset-2">
          {alert.message && (
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          )}
          <Router>
            <NavBar />
            <Switch>
              <Route exact path="/" component={HomeView} />
              <Route exact path="/USGS" component={USGSQueryContainer} />
              <Route path="/USGS/:id" component={USGSQuakeContainer} />
              <Route path="/quakes" exact component={QuakeListContainer} />
              <Route
                path="/quakes/create"
                exact
                component={CreateQuakeContainer}
              />
              <Route path="/quakes/update/:id" exact component={UpdateQuakeContainer} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
