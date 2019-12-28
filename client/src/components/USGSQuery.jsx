import React from "react";
import DatePicker from "react-datepicker";
import USGSList from "./USGSList";

class USGSQuery extends React.Component {
    render() {
 const {
    loading,
    starttime,
    endtime,
    minmagnitude,
    maxmagnitude,
    minlatitude,
    maxlatitude,
    minlongitude,
    maxlongitude,
    maxdepth,
    mindepth,
    orderby,
    limit,
    quakes,
    handleStart,
    handleEnd,
    handleChange,
    submitQuery,
    resetParams
  } = this.props

  console.log("USGSQuery component loaded")
        return (
            <div id="queryForm">
        <h1>Enter Parameters for earthquake data</h1>
        <form>
          <div className="queryRow">
            <label>Start Date:</label>
            <DatePicker
              selected={starttime}
              onChange={handleStart}
            />
            <label>End Date:</label>
            <DatePicker
              selected={endtime}
              onChange={handleEnd}
            />
            <label>Limit (100 max):</label>
            <input
              type="number"
              min={1}
              max={100}
              name="limit"
              onChange={handleChange}
              value={limit}
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
              value={minmagnitude}
              onChange={handleChange}
            />
            <label>Maximum Magnitude:</label>
            <input
              type="number"
              min={0}
              max={10}
              name="maxmagnitude"
              value={maxmagnitude}
              onChange={handleChange}
            />
            <label>Min Latitude:</label>
            <input
              type="number"
              min={-90}
              max={90}
              name="minlatitude"
              value={minlatitude}
              onChange={handleChange}
            />
            <label>Max Latitude:</label>
            <input
              type="number"
              min={-90}
              max={90}
              name="maxlatitude"
              value={maxlatitude}
              onChange={handleChange}
            />
            <label>Min Longitude:</label>
            <input
              type="number"
              min={-360}
              max={360}
              name="minlongitude"
              value={minlongitude}
              onChange={handleChange}
            />
            <label>Max Longitude:</label>
            <input
              type="number"
              min={-360}
              max={360}
              name="maxlongitude"
              value={maxlongitude}
              onChange={handleChange}
            />
          </div>
          <label>
            Sort by:
            <select
              value={orderby}
              name="orderby"
              onChange={handleChange}
            >
              <option value="time">Time - descending</option>
              <option value="time-asc">Time - ascending</option>
              <option value="magnitude">Magnitude - descending</option>
              <option value="magnitude-asc">Mangitude - ascending</option>
            </select>
          </label>
        </form>
        {quakes.length > 0 && (
          <USGSList quakes={quakes} />
        )}
        <button onClick={submitQuery} id="submitButton">
          Submit Query
        </button>
        <button onClick={resetParams} id="resetParams">
          Reset Params
        </button>
      </div>
        )
    }
}
export default USGSQuery;