import React from "react";
import { Link } from "react-router-dom";

function HomeView() {
  return (
    <div className="Home">
      <div>
        <h3>
          Growing up, I've always been fascinated by the behavior of
          earthquakes. Utilizing an API provided by the USGS to gather
          earthquake data from around the world, this app will feature various
          visualizations of this data.
        </h3>
        <br />
        <h3>
          To access your saved quakes, click{" "}
          <Link to={`/quakes`}>here</Link>
        </h3>
        <br />
        <h3>
          To learn more about the USGS API, click{" "}
          <a href="https://earthquake.usgs.gov/fdsnws/event/1/" >here</a>
        </h3>
      </div>
    </div>
  );
}

export default HomeView;
