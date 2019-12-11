import { getInitialData } from "../utils/api";
import { receivedUsers } from "./Users";
import { receivedTweets } from "./Tweet";
import { setAuthUserID } from "./AuthUser";
import { showLoading, hideLoading } from "react-redux-loading";

const AUTH_USER = "tylermcginnis";

export function handlePageLoadData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receivedUsers(users));
      dispatch(receivedTweets(tweets));
      dispatch(setAuthUserID(AUTH_USER));
      dispatch(hideLoading());
    });
  };
}
