import React from "react";
import { Link } from "react-router-dom";

class USGSList extends React.Component {
  renderQuakes = () => {
    return this.props.quakes.map((quake, key) => {
      return (
        <div key={key} className="quakeLink">
          <Link to={`/USGS/${quake.id}`}>Quake: {quake.id} | Mag: {quake.properties.mag} | Coordinates: {quake.geometry.coordinates[1]}, {quake.geometry.coordinates[0]}, {quake.geometry.coordinates[2]} </Link>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div id="quakeList">{this.renderQuakes()}</div>
        <div id="quakeCount">Total earthquakes: {this.props.quakes.length}</div>
      </div>
    );
  }
}

export default USGSList;
