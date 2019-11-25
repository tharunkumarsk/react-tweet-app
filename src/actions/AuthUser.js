export const SET_AUTH_USERID = "SET_AUTH_USERID";

export function setAuthUserID(userID) {
  return {
    type: SET_AUTH_USERID,
    userID
  };
}
