import React from "react";


import {
  HeaderContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <OptionsContainer>
      <OptionLink to="/graph">Vector Graph</OptionLink>
      <OptionLink to="/simplegraph">Vector Simple Graph</OptionLink>
    </OptionsContainer>
  </HeaderContainer>
);

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
// });

// const mapDispatchToProps = (dispatch) => ({
//   signOutStart: () => dispatch(signOutStart()),
// });

export default Header;
