import React from "react";
import styled from "styled-components";

const Delete = styled.div`
  color: #ff0000;
  cursor: pointer;
`;

const DeleteQuake = props => {
  return <Delete onClick={props.onClick}>Delete</Delete>;
};

export default DeleteQuake;
