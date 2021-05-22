import React from "react";
import { connect } from "react-redux";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentToken } from "../../redux/auth/auth.selector";

import { SignInStart } from "../../redux/auth/auth.actions";

import "./homepage.styles.scss";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { SignInStart } = this.props;
    const { username } = this.state;

    SignInStart(username);
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Autenticación en Refinitiv</h2>
        <span>Generar token de seguridad para consumir servicios</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="username"
            handleChange={this.handleChange}
            value={this.state.username}
            label="username"
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign in </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  SignInStart: (username) => dispatch(SignInStart({ username })),
});

const mapStateToProps = createStructuredSelector({
  token: selectCurrentToken,
});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
