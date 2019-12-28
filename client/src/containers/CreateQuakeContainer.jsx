import React, { Component } from "react";
import CreateQuake from "../components/CreateQuake";
import api from "../api";

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

    await api.addQuake(payload).then(res => {
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
    console.log("create qquake container")
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
