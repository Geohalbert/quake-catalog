import React from "react";

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

const UpdateQuake = props => {
  return (
    <Wrapper>
      <Title>Update Quake</Title>

      <Label>Name: </Label>
      <InputText
        type="text"
        value={props.name}
        onChange={props.handleChangeInputName}
      />

      <Label>Mag: </Label>
      <InputText
        type="number"
        step="0.1"
        lang="en-US"
        min="0"
        max="10"
        pattern="[0-9]+([,\.][0-9]+)?"
        value={props.mag}
        onChange={props.handleChangeInputMag}
      />
      <Button onClick={props.handleUpdateQuake}>Update Quake</Button>
      <CancelButton href={"/quakes"}>Cancel</CancelButton>
    </Wrapper>
  );
};

export default UpdateQuake;
