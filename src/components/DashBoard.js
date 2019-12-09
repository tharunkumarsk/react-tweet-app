import React, { Component } from "react";
import { connect } from "react-redux";

class DashBoard extends Component {
  render() {
    return (
      <div>
        <h3 className="center">Your timeline</h3>
        <ul className="dasboard-list">
          {this.props.tweetIds.map(id => (
            <li key={id}>TWEET ID : {id}</li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ tweets }) {
  return {
    tweetIds: Object.keys(tweets).sort(
      (a, b) => tweets[b].timestramp - tweets[a].timestramp
    )
  };
}

export default connect(mapStateToProps)(DashBoard);
