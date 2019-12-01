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

class QuakesUpdate extends Component {
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

    await api.updateQuakeById(id, payload).then(res => {
      window.alert(`Quake updated successfully`);
      this.setState({
        name: "",
        mag: ""
      });
    });
  };

  componentDidMount = async () => {
    const { id } = this.state;
    const quake = await api.getQuakeById(id);

    this.setState({
      name: quake.data.data.name,
      mag: quake.data.data.mag
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
        <Button onClick={this.handleUpdateQuake}>Update Quake</Button>
        <CancelButton href={"/quakes/list"}>Cancel</CancelButton>
      </Wrapper>
    );
  }
}

export default QuakesUpdate;
