import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const Button = styled.button.attrs({
  className: `btn btn-primary`
})`
  margin: 15px 15px 15px 5px;
`;

const USGSQuake = props => {
  return (
    <div id="quake">
      <div className="quake-details">
        <div className="quake-property">Quake Id: {props.quakeId}</div>
        <div className="quake-property">Place: {props.place}</div>
        <div className="quake-property">Coordinates: {props.coors}</div>
        <div className="quake-property">Magnitude: {props.mag}</div>
        <div className="quake-property">Time: {props.time}</div>
      </div>
      <Button onClick={props.saveToDatabase}>Save Quake</Button>
    </div>
  );
};

USGSQuake.propTypes = {
  quakeId: PropTypes.string.isRequired,
  place: PropTypes.string,
  coors: PropTypes.string.isRequired,
  mag: PropTypes.number,
  time: PropTypes.string.isRequired,
  saveToDatabase: PropTypes.func.isRequired
};

export default USGSQuake;
