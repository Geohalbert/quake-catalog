import React, { Component } from "react";

import { Redirect } from "react-router-dom";
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

class CreateQuake extends Component {
  render() {

    console.log("create qquake component")
    const { name, mag, updated } = this.props;
    if (updated) {
      return <Redirect to="/quakes" />;
    }
    return (
      <Wrapper>
        <Title>Create Quake</Title>

        <Label>Name: </Label>
        <InputText
          type="text"
          value={name}
          onChange={this.props.handleChangeInputName}
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
          onChange={this.props.handleChangeInputMag}
        />
        <Button onClick={this.props.onClick}>Add Quake</Button>
        <CancelButton href={"/quakes/list"}>Cancel</CancelButton>
      </Wrapper>
    );
  }
}

export default CreateQuake;
