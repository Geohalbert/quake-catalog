import React, { Component } from "react";
import QuakeList from "../components/QuakeList";

import { connect } from "react-redux";
import quakeActions from "../actions/quakeActions";

class QuakeListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      quakes: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.props.getQuakes();
  }

  render() {
    const { quakes } = this.props;
    return (
      <div>
        {quakes.items && (
          <QuakeList quakes={quakes.items} isLoading={quakes.isLoading} />
        )}
      </div>
    );
  }
}

function mapState(state) {
  const { quakes } = state;
  return { quakes };
}

const actionCreators = {
  getQuakes: quakeActions.getAll
};

const connectedQuakeList = connect(mapState, actionCreators)(QuakeListContainer);
export { connectedQuakeList as QuakeListContainer };