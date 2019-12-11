import { saveLikeToggle } from "../utils/api";

export const RECEIVED_TWEETS = "RECEIVED_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";

export function receivedTweets(tweets) {
  return {
    type: RECEIVED_TWEETS,
    tweets
  };
}
function toggleTweet({ id, authedUser, hasLiked }) {
  return {
    type: TOGGLE_TWEET,
    id,
    authedUser,
    hasLiked
  };
}

export function handleToggleTweet(info) {
  return dispatch => {
    dispatch(toggleTweet(info));

    return saveLikeToggle(info).catch(e => {
      console.warn("Error in handleToggleTweet: ", e);
      dispatch(toggleTweet(info));
      alert("The was an error liking the tweet. Try again.");
    });
  };
}
