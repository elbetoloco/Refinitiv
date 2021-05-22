import { combineReducers } from "redux";

import chartReducer from "./chart/chart.reducer";
import authReducer from "./auth/auth.reducer";

export default combineReducers({
  auth: authReducer,
  chart: chartReducer,
});
