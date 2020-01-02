import React from "react";
import { Link } from "react-router-dom";

function HomeView() {
  return (
    <div className="Home">
      <div>
        <h3>
          Growing up, I've always been fascinated by the behavior of
          earthquakes. Utilizing an API provided by the USGS to gather
          earthquake data from around the world, this web-based app will serve
          as an ongoing project to showcase my skillset.
        </h3>
        <br />{" "}
        <h3>
          Quake data saved using MongoDB saved
          <Link to={`/quakes`}> here</Link>.
        </h3>
        <br />
        <h3>
          To learn more about the USGS API, click{" "}
          <a href="https://earthquake.usgs.gov/fdsnws/event/1/">here</a>.
        </h3>
        <br />
        <h4>
          Current Technologies in use:
          <li>ReactJS</li>
          <li>MongoDB</li>
          <li>ExpressJS</li>
          <li>NodeJS</li>
          <li>Axios</li>
          <li>Google Maps</li>
        </h4>
        <br />
        <h4>
          Technologies to be implemented:
          <li>Redux</li>
          <li>TypeScript</li>
          <li>GraphQL?</li>
        </h4>
      </div>
    </div>
  );
}

export default HomeView;
