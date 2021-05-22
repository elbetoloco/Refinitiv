import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentToken } from "./redux/auth/auth.selector";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ChartPage from "./pages/chart/chartpage.component";

function App({ currentToken }) {
  return (
    <div>
      <Switch>
        <Route path="/chart" component={ChartPage} />
        <Route
          path="/graph"
          component={() => {
            window.location.href = "https://d2qtarn0vt9297.cloudfront.net/";
            return null;
          }}
        />
        <Route
          path="/simplegraph"
          component={() => {
            window.location.href = "https://d2qtarn0vt9297.cloudfront.net/simpleChart";
            return null;
          }}
        />
        <Route
          exact
          path="/"
          render={() =>
            currentToken ? <Redirect to="/chart" /> : <HomePage />
          }
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentToken: selectCurrentToken,
});

export default connect(mapStateToProps)(App);
