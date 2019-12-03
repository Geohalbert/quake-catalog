import React from "react";
import USGSService from "../services/USGSService";
import api from "../api";
import { Redirect } from "react-router-dom";
import "../style/USGSQuery.css";
import SimpleMap from "../components/Map.jsx";
import styled from "styled-components";

const Button = styled.button.attrs({
  className: `btn btn-primary`
})`
  margin: 15px 15px 15px 5px;
`;

class USGSQuakeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quakeId: "",
      properties: {},
      coordinates: [],
      saved: false
    };

    this.usgsService = new USGSService();
  }

  componentDidMount() {
    const quakeId = this.props.match.params.id;
    this.usgsService.getQuake(quakeId).then(response => {
      this.setState({
        quakeId: response.id,
        properties: response.properties,
        coordinates: response.geometry.coordinates
      });
    });
  }

  coorObj(arr) {
    let obj = {
      lat: arr[0],
      lng: arr[1]
    };
    return obj;
  }

  saveToDatabase = async () => {
    const { quakeId, properties, coordinates } = this.state;
    const name = quakeId;
    const mag = properties.mag;
    const time = properties.time;
    const payload = { name, mag, coordinates, time };

    await api.insertQuake(payload).then(res => {
      window.alert(`Quake saved successfully`);
      this.setState({
        saved: true
      });
    });
  };

  render() {
    const { quakeId, properties, coordinates, saved } = this.state;
    const convertTime = new Date(properties.time).toLocaleString();
    const coors = coordinates.join(", ");
    if (saved) {
      return <Redirect to="/USGS" />;
    }
    return (
      <div id="quake">
        <div className="quake-details">
          <div className="quake-property">Quake Id: {quakeId}</div>
          <div className="quake-property">Place: {properties.place}</div>
          <div className="quake-property">Coordinates: {coors}</div>
          <div className="quake-property">Magnitude: {properties.mag}</div>
          <div className="quake-property">Time: {convertTime}</div>
        </div>
        <Button onClick={this.saveToDatabase}>Save Quake</Button>
        {/* for now Im just forcing SimpleMap to display */}
        {coordinates && <SimpleMap lat={coordinates[0]} lng={coordinates[1]} />}
      </div>
    );
  }
}

export default USGSQuakeView;
