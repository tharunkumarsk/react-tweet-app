export const RECEIVED_TWEETS = "RECEIVED_TWEETS";

export function receivedTweets(tweets) {
  return {
    type: RECEIVED_TWEETS,
    tweets
  };
}
