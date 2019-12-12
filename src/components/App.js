import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handlePageLoadData } from "../actions/Shared";
import DashBoard from "./DashBoard";
import LoadingBar from "react-redux-loading";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./NavBar";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handlePageLoadData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Nav />
            {this.props.loading === true ? null : (
              <div>
                <Route path="/" exact component={DashBoard} />
                <Route path="/tweet/:id" component={TweetPage} />
                <Route path="/new" component={NewTweet} />
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    loading: authUser === null
  };
}

export default connect(mapStateToProps)(App);
