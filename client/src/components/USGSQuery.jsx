import React from "react";
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import USGSList from "./USGSList";
import "react-datepicker/dist/react-datepicker.css";

const USGSQuery = props => {
  return (
    <div id="queryForm">
      <h1>Enter Parameters for earthquake data</h1>
      <form>
        <div className="queryRow">
          <label>Start Date:</label>
          <DatePicker selected={props.starttime} onChange={props.handleStart} />
          <label>End Date:</label>
          <DatePicker selected={props.endtime} onChange={props.handleEnd} />
          <label>Limit (100 max):</label>
          <input
            type="number"
            min={1}
            max={100}
            name="limit"
            onChange={props.handleChange}
            value={props.limit}
            placeholder="maximum: 100"
          />
        </div>
        <div className="queryRow">
          <label>Minimum Magnitude:</label>
          <input
            type="number"
            min={0}
            max={10}
            name="minmagnitude"
            value={props.minmagnitude}
            onChange={props.handleChange}
          />
          <label>Maximum Magnitude:</label>
          <input
            type="number"
            min={0}
            max={10}
            name="maxmagnitude"
            value={props.maxmagnitude}
            onChange={props.handleChange}
          />
          <label>Min Latitude:</label>
          <input
            type="number"
            min={-90}
            max={90}
            name="minlatitude"
            value={props.minlatitude}
            onChange={props.handleChange}
          />
          <label>Max Latitude:</label>
          <input
            type="number"
            min={-90}
            max={90}
            name="maxlatitude"
            value={props.maxlatitude}
            onChange={props.handleChange}
          />
          <label>Min Longitude:</label>
          <input
            type="number"
            min={-180}
            max={180}
            name="minlongitude"
            value={props.minlongitude}
            onChange={props.handleChange}
          />
          <label>Max Longitude:</label>
          <input
            type="number"
            min={-180}
            max={180}
            name="maxlongitude"
            value={props.maxlongitude}
            onChange={props.handleChange}
          />
        </div>
        <label>
          Sort by:
          <select
            value={props.orderby}
            name="orderby"
            onChange={props.handleChange}
          >
            <option value="time">Time - descending</option>
            <option value="time-asc">Time - ascending</option>
            <option value="magnitude">Magnitude - descending</option>
            <option value="magnitude-asc">Mangitude - ascending</option>
          </select>
        </label>
      </form>
      {props.quakes.length > 0 && !props.loading && (
        <USGSList quakes={props.quakes} />
      )}
      {props.loading && <div>LOADING DATA</div>}
      <button onClick={props.submitQuery} id="submitButton">
        Submit Query
      </button>
      <button onClick={props.resetParams} id="resetParams">
        Reset Params
      </button>
    </div>
  );
};

USGSQuery.propTypes = {
  loading: PropTypes.bool.isRequired,
  starttime: PropTypes.number.isRequired,
  endtime: PropTypes.objectOf(PropTypes.string).isRequired,
  minmagnitude: PropTypes.number,
  maxmagnitude: PropTypes.number,
  minlatitude: PropTypes.number,
  maxlatitude: PropTypes.number,
  minlongitude: PropTypes.number,
  maxlongitude: PropTypes.number,
  orderby: PropTypes.string,
  limit: PropTypes.number.isRequired,
  quakes: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleStart: PropTypes.func.isRequired,
  handleEnd: PropTypes.func.isRequired,
  submitQuery: PropTypes.func.isRequired,
  resetParams: PropTypes.func.isRequired
};

export default USGSQuery;
