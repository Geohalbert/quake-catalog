import React, { Component } from "react";
import DeleteQuake from "../components/DeleteQuake";

import { connect } from "react-redux";
import quakeActions from "../actions/quakeActions";

class DeleteQuakeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  deleteQuake = event => {
    event.preventDefault();

    if (
      window.confirm(
        `Do tou want to delete the quake ${this.props.id} permanently?`
      )
    ) {
      this.props.removeQuake(this.props.id);
    }
  };

  render() {
    const { quake, message } = this.props;
    if (message === "Deletion successful") {
      window.location.reload();
    }
    return <DeleteQuake onClick={this.deleteQuake} />;
  }
}

function mapState(state) {
  const { quake, alert } = state;
  const { message } = alert;
  return { quake, message };
}

const actionCreators = {
  removeQuake: quakeActions.deleteQuake
};
const connectedDeleteQuake = connect(
  mapState,
  actionCreators
)(DeleteQuakeContainer);
export { connectedDeleteQuake as DeleteQuakeContainer };
