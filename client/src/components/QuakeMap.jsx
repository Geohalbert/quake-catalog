import React from "react";
import PropTypes from "prop-types";
import QuakeMarker from "./QuakeMarker"
import GoogleMapReact from "google-map-react";

const QuakeMap = props => {
  return (
    <div style={{ height: "50vh", width: "50%" }}>
      {props.lat && props.lng && (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_API_KEY.toString()
          }}
          defaultCenter={{ lat: props.lat, lng: props.lng }}
          defaultZoom={6}
        >
          <QuakeMarker lat={props.lat} lng={props.lng} />
        </GoogleMapReact>
      )}
    </div>
  );
};


QuakeMap.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number
};

export default QuakeMap;
