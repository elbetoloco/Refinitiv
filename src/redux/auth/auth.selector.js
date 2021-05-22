import { createSelector } from "reselect";

const selectAuth = (state) => state.auth;

export const selectCurrentToken = createSelector(
  [selectAuth],
  (auth) => auth.token
);
