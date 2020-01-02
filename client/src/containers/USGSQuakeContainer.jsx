import React from "react";
import USGSService from "../services/USGSService";
import api from "../api";
import { Redirect } from "react-router-dom";
import QuakeMap from "../components/QuakeMap.jsx";
import USGSQuake from "../components/USGSQuake.jsx";

class USGSQuakeContainer extends React.Component {
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

    await api.addQuake(payload).then(res => {
      window.alert(`Quake saved successfully`);
      this.setState({
        saved: true
      });
    });
  };

  render() {
    const { quakeId, properties, coordinates, saved } = this.state;
    const convertTime = new Date(properties.time).toLocaleString();
    const newCoor = [coordinates[1],coordinates[0],coordinates[2]]
    const coors = newCoor.join(", ");
    if (saved) {
      return <Redirect to="/USGS" />;
    }
    return (
      <div>
        <USGSQuake
          saveToDatabase={this.saveToDatabase}
          quakeId={quakeId}
          place={properties.place}
          coors={coors}
          mag={properties.mag}
          time={convertTime}
        />
        {coordinates && <QuakeMap lat={coordinates[1]} lng={coordinates[0]} />}
      </div>
    );
  }
}

export default USGSQuakeContainer;
