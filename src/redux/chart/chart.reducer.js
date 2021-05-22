import ChartActionTypes from "./chart.types";

const INITIAL_STATE = {
  currentChart: null,
  error: null,
};

const chartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ChartActionTypes.SET_CHART_SUCCESS:
      return {
        ...state,
        currentChart: action.payload,
        error: null,
      };
    case ChartActionTypes.SET_CHART_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default chartReducer;
