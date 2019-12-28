import React from "react";
import "../style/USGSQuery.css";
import styled from "styled-components";

const Button = styled.button.attrs({
  className: `btn btn-primary`
})`
  margin: 15px 15px 15px 5px;
`;

class USGSQuake extends React.Component {
  render() {
    const { quakeId, place, coors, mag, convertTime, saveToDatabase } = this.props;
    return (
      <div id="quake">
        <div className="quake-details">
          <div className="quake-property">Quake Id: {quakeId}</div>
          <div className="quake-property">Place: {place}</div>
          <div className="quake-property">Coordinates: {coors}</div>
          <div className="quake-property">Magnitude: {mag}</div>
          <div className="quake-property">Time: {convertTime}</div>
        </div>
        <Button onClick={saveToDatabase}>Save Quake</Button>
      </div>
    );
  }
}

export default USGSQuake;
