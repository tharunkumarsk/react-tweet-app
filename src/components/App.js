import React, { Component } from "react";
import { connect } from "react-redux";
import { handlePageLoadData } from "../actions/Shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handlePageLoadData());
  }
  render() {
    return <div>Starter Code</div>;
  }
}

export default connect()(App);
