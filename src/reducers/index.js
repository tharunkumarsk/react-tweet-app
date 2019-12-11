import { combineReducers } from "redux";
import authUser from "./AuthUser";
import users from "./Users";
import tweets from "./Tweets";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  authUser,
  tweets,
  users,
  loadingBar: loadingBarReducer
});
