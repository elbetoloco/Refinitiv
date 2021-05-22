import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentChart } from '../../redux/chart/chart.selector';
import { selectCurrentToken } from '../../redux/auth/auth.selector';
import Header from '../../components/header/header.component';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { setChartStart } from '../../redux/chart/chart.actions';

import './chartpage.styles.scss';

class ChartPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emisora: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { setChartStart } = this.props;
    const { emisora } = this.state;

    setChartStart(emisora);
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  routeChange = () => {
    window.location.href = 'https://d2qtarn0vt9297.cloudfront.net/';
  };

  routeChange2 = () => {
    window.location.href = 'https://d2qtarn0vt9297.cloudfront.net/simpleChart';
  };

  render() {
    return (
      <div>
        <Header />
        <span>Token de seguridad:</span>
        <div className="son">{this.props.token}</div>
        <div className="prueba">
          <form onSubmit={this.handleSubmit}>
            <FormInput
              name="emisora"
              handleChange={this.handleChange}
              value={this.state.emisora}
              label="Nombre de la emisora"
              required
            />
            <div className="prueba2">
              <CustomButton type="submit"> Refinitiv Graph </CustomButton>
              <CustomButton
                type="button"
                onClick={this.routeChange}
                isGoogleSignIn
              >
                Graph
              </CustomButton>
              <CustomButton
                onClick={this.routeChange2}
                simpleSignIn
                type="button"
              >
                Simple Graph
              </CustomButton>
            </div>
          </form>
        </div>
        <iframe
          src="https://d2qtarn0vt9297.cloudfront.net/simpleChart"
          title="prueba"
          frameBorder={1}
          width="782px"
          height="195px"
          style={{ marginTop: '79px' }}
        ></iframe>
        {this.props.chart ? <img src={this.props.chart} alt="" /> : <p></p>}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setChartStart: (emisora) => dispatch(setChartStart({ emisora })),
});

const mapStateToProps = createStructuredSelector({
  chart: selectCurrentChart,
  token: selectCurrentToken,
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartPage);
