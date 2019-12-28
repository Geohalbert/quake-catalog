import React from "react";
import USGSQuery from "../components/USGSQuery";
import "../style/USGSQuery.css";
import USGSService from "../services/USGSService";
import "react-datepicker/dist/react-datepicker.css";

class USGSQueryContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      starttime: new Date().setDate(new Date().getDate() - 1),
      endtime: new Date(),
      minmagnitude: 0,
      maxmagnitude: 10,
      minlatitude: -90,
      maxlatitude: 90,
      minlongitude: -180,
      maxlongitude: 180,
      orderby: "time",
      limit: 10,
      quakes: []
    };

    this.usgsService = new USGSService();
    this.handleChange = this.handleChange.bind(this);
    this.baseState = this.state;
  }

  handleStart = date => {
    this.setState({
      starttime: date
    });
  };
  handleEnd = date => {
    this.setState({
      endtime: date
    });
  };
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  resetParams = () => {
    this.setState(this.baseState);
  };

  queryString = () => {
    let state = this.state;
    this.setState({ loading: true });
    let start = `&starttime=${this.convert(state.starttime)}`;
    let end = `&endtime=${this.convert(state.endtime)}`;
    let params = [start, end];
    let ignore = ["starttime", "endtime", "quakes", "loading"];
    Object.keys(state).forEach((key, index) => {
      if (state[key] != null && !ignore.includes(key)) {
        params.push(`&${key}=${state[key]}`);
      }
    });
    return params.join("");
  };

  submitQuery = () => {
    let queryParams = this.queryString();
    this.usgsService.getQuakeList(queryParams).then(response => {
      if (response.length > 0) {
        this.setState({ quakes: response, loading: false });
      } else {
        this.setState({ quakes: [], loading: false });
        alert("No results match your criteria");
      }
    });
  };

  render() {
    const {
      starttime,
      endtime,
      minmagnitude,
      maxmagnitude,
      minlatitude,
      maxlatitude,
      minlongitude,
      maxlongitude,
      orderby,
      limit,
      quakes
    } = this.state;
    console.log("USGSQuery container loaded")
    return (
      <USGSQuery
        
          starttime={starttime}
          endtime={endtime}
          minmagnitude={minmagnitude}
          maxmagnitude={maxmagnitude}
          minlatitude={minlatitude}
          maxlatitude={maxlatitude}
          minlongitude={minlongitude}
          maxlongitude={maxlongitude}
          orderby={orderby}
          limit={limit}
          quakes={quakes}
          handleStart={this.handleStart}
          handleEnd={this.handleEnd}
          submitQuery={this.submitQuery}
          resetParams={this.resetParams}
        
      />
    );
  }
}
export default USGSQueryContainer;
