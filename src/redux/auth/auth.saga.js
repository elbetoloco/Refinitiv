import { takeLatest, put, all, call } from "redux-saga/effects";

import AuthActionTypes from "./auth.types";

import { signInFailure, signInSuccess } from "./auth.actions";

export function* signIn({ payload: { username } }) {
  const response = yield fetch(
    "https://d2qtarn0vt9297.cloudfront.net/sso/auth/login",
    {
      method: "POST",
      body: JSON.stringify({
        username: username,
      }),
    }
  );
  if (!response.ok) {
    put(signInFailure("Something went wrong!"));
  }
  const resData = yield response.json();
  yield put(signInSuccess(resData.data.Token));
}

export function* onSignInStart() {
  yield takeLatest(AuthActionTypes.SIGN_IN_START, signIn);
}

export function* authSagas() {
  yield all([call(onSignInStart)]);
}
