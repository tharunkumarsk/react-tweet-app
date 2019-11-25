import { coimbainedReducer } from "redux";
import authUser from "./AuthUser";
import users from "./Users";
import tweets from "./Tweets";

export default coimbainedReducer({
  authUser,
  tweets,
  users
});
