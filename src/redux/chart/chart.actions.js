import ChartActionTypes from "./chart.types";

export const setChartStart = (emisora) => ({
  type: ChartActionTypes.SET_CHART_START,
  payload: emisora,
});

export const setChartSuccess = (chart) => ({
  type: ChartActionTypes.SET_CHART_SUCCESS,
  payload: chart,
});

export const setChartFailure = (error) => ({
  type: ChartActionTypes.SET_CHART_FAILURE,
  payload: error,
});
