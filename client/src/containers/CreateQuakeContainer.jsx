import React, { Component } from "react";
import CreateQuake from "../components/CreateQuake";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import quakeActions from "../actions/quakeActions";

 class CreateQuakeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      mag: "",
      saved: false
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

  handleIncludeQuake = async () => {
    const { name, mag } = this.state;
    const quake = { name, mag };

    this.props.saveQuake(quake)
  };

  render() {
    const { name, mag, saved } = this.state;
    const { saving } = this.props;
    if (saving===false) {
      return <Redirect to="/quakes" />;
    }
    return (
      <CreateQuake
        handleChangeInputName={this.handleChangeInputName}
        handleChangeInputMag={this.handleChangeInputMag}
        onClick={this.handleIncludeQuake}
        name={name}
        mag={mag}
        saved={saved}
      />
    );
  }
}

function mapState(state) {
  const { saving } = state.creation;
  return { saving };
}

const actionCreators = {
  saveQuake: quakeActions.createQuake
};
const connectedCreateQuake = connect(mapState, actionCreators)(CreateQuakeContainer);
export { connectedCreateQuake as CreateQuakeContainer };
