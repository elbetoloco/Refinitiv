import AuthActionTypes from "./auth.types";

export const SignInStart = (username) => ({
  type: AuthActionTypes.SIGN_IN_START,
  payload: username,
});

export const signInSuccess = (user) => ({
  type: AuthActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: AuthActionTypes.SIGN_IN_FAILURE,
  payload: error,
});
