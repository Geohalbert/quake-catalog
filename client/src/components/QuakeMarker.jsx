import React from "react";
import PropTypes from "prop-types";
import "../style/marker.css"

const QuakeMarker = props => {
    return (
        <Marker lat={props.lat} lng={props.lng} />
    );
  };
  
  const Marker = props => {
    return <>
      <div className="pin"></div>
      <div className="pulse"></div>
    </>
  }
  QuakeMarker.propTypes = {
    lat: PropTypes.number,
    lng: PropTypes.number
  };

  export default QuakeMarker;