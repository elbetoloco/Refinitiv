import { all, call } from "redux-saga/effects";

import { authSagas } from "./auth/auth.saga";
import { chartSagas } from "./chart/chart.saga";

export default function* rootSaga() {
  yield all([call(authSagas), call(chartSagas)]);
}
