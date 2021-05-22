import { createSelector } from "reselect";

const selectChart = (state) => state.chart;

export const selectCurrentChart = createSelector(
  [selectChart],
  (chart) => chart.currentChart
);
