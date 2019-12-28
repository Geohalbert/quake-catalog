import React, { Component } from "react";
import QuakeList from "../components/QuakeList";
import api from "../api";

export class QuakeListContainer extends Component {
  constructor() {
    super();
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
    return (
      <QuakeList quakes={this.state.quakes} isLoading={this.state.isLoading} />
    );
  }
}

export default QuakeListContainer;
