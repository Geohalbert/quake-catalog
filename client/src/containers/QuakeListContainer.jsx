import React, { Component } from "react";
import ReactTable from "react-table";
import QuakeList from "../components/QuakeList";
import api from "../api";

export class QuakeListContainer extends Component {
  constructor() {
      super()
    this.state = {
      quakes: [],
      isLoading: false
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });

    await api.getAllQuakes().then(quakes => {
      this.setState({
        quakes: quakes.data.data,
        isLoading: false
      });
    });
  };

  render() {
      console.log("container check")
    return (<QuakeList quakes={this.state.quakes} isLoading={this.state.isLoading}/>
    )}
}

export default QuakeListContainer;
