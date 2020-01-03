import React, { Component } from "react";
import CreateQuake from "../components/CreateQuake";
import { Redirect } from "react-router-dom";
import QuakeServices from "../services/QuakeServices";;

export class CreateQuakeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      mag: "",
      updated: false
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
    const payload = { name, mag };

    await QuakeServices.addQuake(payload).then(res => {
      window.alert(`Quake inserted successfully`);
      this.setState({
        name: "",
        mag: "",
        updated: true
      });
    });
  };

  render() {
    const { name, mag, updated } = this.state;
    if (updated) {
      return <Redirect to="/quakes" />;
    }
    return (
      <CreateQuake
        handleChangeInputName={this.handleChangeInputName}
        handleChangeInputMag={this.handleChangeInputMag}
        onClick={this.handleIncludeQuake}
        name={name}
        mag={mag}
        updated={updated}
      />
    );
  }
}

export default CreateQuakeContainer;
