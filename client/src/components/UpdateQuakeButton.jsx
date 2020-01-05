import React, { Component } from "react";
import styled from "styled-components";

const Update = styled.div`
  color: #ef9b0f;
  cursor: pointer;
`;

class UpdateQuakeButton extends Component {
  updateQuake = event => {
    event.preventDefault();

    if (
      window.confirm(
        `Do you want to update the quake ${this.props.id}?`
      )
    ) {
      window.location.href = `/quakes/update/${this.props.id}`;
    }
  };
  render() {
    return <Update onClick={this.updateQuake}>Update</Update>;
  }
}

export default UpdateQuakeButton;
