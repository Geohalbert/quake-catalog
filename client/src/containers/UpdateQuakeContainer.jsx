import React, { Component } from "react";
import UpdateQuake from "../components/UpdateQuake";
import QuakeServices from "../services/QuakeServices";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import quakeActions from "../actions/quakeActions";


class UpdateQuakeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      name: "",
      mag: ""
    };
  }

  handleChangeInputName = async event => {
    const name = event.target.value;
    this.setState({ name });
  };

  handleChangeInputMag = async event => {
    const mag = event.target.validity.valid
      ? event.target.value
      : this.state.mag;

    this.setState({ mag });
  };

  handleUpdateQuake = async () => {
    const { id, name, mag } = this.state;
    const payload = { name, mag };

    this.props.editQuake(id, payload);
  };

  componentDidMount = async () => {
    const { id } = this.state;
    const quake = await QuakeServices.getQuakeById(id);
    this.setState({
      name: quake.data.data.name,
      mag: quake.data.data.mag
    });
  };

  render() {
    const { quake, message } = this.props;
    if (message === "Update successful") {
      return <Redirect to="/quakes" />;
    }
    return (
      <UpdateQuake
        handleChangeInputName={this.handleChangeInputName}
        handleChangeInputMag={this.handleChangeInputMag}
        name={this.state.name}
        mag={this.state.mag}
        handleUpdateQuake={this.handleUpdateQuake}
        id={this.state.id}
      />
    );
  }
}

function mapState(state) {
  const { quakes, alert } = state;
  const { message } = alert;
  const { quake } = quakes;
  return { quake, message };
}

const actionCreators = {
  editQuake: quakeActions.updateQuake
};
const connectedUpdateQuake = connect(
  mapState,
  actionCreators
)(UpdateQuakeContainer);
export { connectedUpdateQuake as UpdateQuakeContainer };
