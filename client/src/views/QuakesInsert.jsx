import React, { Component } from "react";
import api from "../api";

import styled from "styled-components";

const Title = styled.h1.attrs({
  className: "h1"
})``;

const Wrapper = styled.div.attrs({
  className: "form-group"
})`
  margin: 0 30px;
`;

const Label = styled.label`
  margin: 5px;
`;

const InputText = styled.input.attrs({
  className: "form-control"
})`
  margin: 5px;
`;

const Button = styled.button.attrs({
  className: `btn btn-primary`
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
  className: `btn btn-danger`
})`
  margin: 15px 15px 15px 5px;
`;

class QuakesInsert extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  handleIncludeQuake = async () => {
    const { name, mag } = this.state;
    const payload = { name, mag };

    await api.insertQuake(payload).then(res => {
      window.alert(`Quake inserted successfully`);
      this.setState({
        name: "",
        mag: ""
      });
    });
  };

  render() {
    const { name, mag } = this.state;
    return (
      <Wrapper>
        <Title>Create Quake</Title>

        <Label>Name: </Label>
        <InputText
          type="text"
          value={name}
          onChange={this.handleChangeInputName}
        />

        <Label>Mag: </Label>
        <InputText
          type="number"
          step="0.1"
          lang="en-US"
          min="0"
          max="10"
          pattern="[0-9]+([,\.][0-9]+)?"
          value={mag}
          onChange={this.handleChangeInputMag}
        />
        <Button onClick={this.handleIncludeQuake}>Add Quake</Button>
                <CancelButton href={'/quakes/list'}>Cancel</CancelButton>
      </Wrapper>
    );
  }
}

export default QuakesInsert;
