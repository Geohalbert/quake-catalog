import React from "react";
import DatePicker from "react-datepicker";
import USGSList from "./USGSList";

import "react-datepicker/dist/react-datepicker.css";

class USGSQuery extends React.Component {
  render() {
    return (
      <div id="queryForm">
        <h1>Enter Parameters for earthquake data</h1>
        <form>
          <div className="queryRow">
            <label>Start Date:</label>
            <DatePicker
              selected={this.props.starttime}
              onChange={this.props.handleStart}
            />
            <label>End Date:</label>
            <DatePicker
              selected={this.props.endtime}
              onChange={this.props.handleEnd}
            />
            <label>Limit (100 max):</label>
            <input
              type="number"
              min={1}
              max={100}
              name="limit"
              onChange={this.props.handleChange}
              value={this.props.limit}
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
              value={this.props.minmagnitude}
              onChange={this.props.handleChange}
            />
            <label>Maximum Magnitude:</label>
            <input
              type="number"
              min={0}
              max={10}
              name="maxmagnitude"
              value={this.props.maxmagnitude}
              onChange={this.props.handleChange}
            />
            <label>Min Latitude:</label>
            <input
              type="number"
              min={-90}
              max={90}
              name="minlatitude"
              value={this.props.minlatitude}
              onChange={this.props.handleChange}
            />
            <label>Max Latitude:</label>
            <input
              type="number"
              min={-90}
              max={90}
              name="maxlatitude"
              value={this.props.maxlatitude}
              onChange={this.props.handleChange}
            />
            <label>Min Longitude:</label>
            <input
              type="number"
              min={-360}
              max={360}
              name="minlongitude"
              value={this.props.minlongitude}
              onChange={this.props.handleChange}
            />
            <label>Max Longitude:</label>
            <input
              type="number"
              min={-360}
              max={360}
              name="maxlongitude"
              value={this.props.maxlongitude}
              onChange={this.props.handleChange}
            />
          </div>
          <label>
            Sort by:
            <select
              value={this.props.orderby}
              name="orderby"
              onChange={this.props.handleChange}
            >
              <option value="time">Time - descending</option>
              <option value="time-asc">Time - ascending</option>
              <option value="magnitude">Magnitude - descending</option>
              <option value="magnitude-asc">Mangitude - ascending</option>
            </select>
          </label>
        </form>
        {this.props.quakes.length > 0 && (
          <USGSList quakes={this.props.quakes} />
        )}
        <button onClick={this.props.submitQuery} id="submitButton">
          Submit Query
        </button>
        <button onClick={this.props.resetParams} id="resetParams">
          Reset Params
        </button>
      </div>
    );
  }
}
export default USGSQuery;
