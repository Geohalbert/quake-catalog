import React from "react";
import USGSQuery from "../components/USGSQuery";
import USGSService from "../services/USGSService";
import "react-datepicker/dist/react-datepicker.css";
import "../style/USGSQuery.css";

class USGSQueryContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      starttime: new Date().setDate(new Date().getDate() - 1),
      endtime: new Date(),
      minmagnitude: null,
      maxmagnitude: null,
      minlatitude: null,
      maxlatitude: null,
      minlongitude: null,
      maxlongitude: null,
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
    return (
      <USGSQuery
        starttime={this.state.starttime}
        endtime={this.state.endtime}
        minmagnitude={this.state.minmagnitude}
        maxmagnitude={this.state.maxmagnitude}
        minlatitude={this.state.minlatitude}
        maxlatitude={this.state.maxlatitude}
        minlongitude={this.state.minlongitude}
        maxlongitude={this.state.maxlongitude}
        orderby={this.state.orderby}
        limit={this.state.limit}
        quakes={this.state.quakes}
        handleChange={this.handleChange}
        handleStart={this.handleStart}
        handleEnd={this.handleEnd}
        submitQuery={this.submitQuery}
        resetParams={this.resetParams}
      />
    );
  }
}
export default USGSQueryContainer;
