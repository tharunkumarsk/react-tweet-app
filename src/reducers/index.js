import { combineReducers } from "redux";
import authUser from "./AuthUser";
import users from "./Users";
import tweets from "./Tweets";

export default combineReducers({
  authUser,
  tweets,
  users
});
