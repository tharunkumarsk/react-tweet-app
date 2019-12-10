import React, { Component } from "react";
import { connect } from "react-redux";
import Tweet from "./tweet";

class DashBoard extends Component {
  render() {
    return (
      <div>
        <h3 className="center">Your timeline</h3>
        <ul className="dasboard-list">
          {this.props.tweetIds.map(id => (
            <li key={id}>
              <Tweet id={id}></Tweet>
            </li>
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
