import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentToken } from "../../redux/auth/auth.selector";
import Header from "../../components/header/header.component";

import "./positionpage.styles.scss";

class PositionPage extends React.Component {
  render() {
    return (
      <Header/>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentToken: selectCurrentToken,
});

export default connect(mapStateToProps)(PositionPage);
