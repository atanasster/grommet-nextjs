import React, { Component } from 'react';
import { Box } from 'grommet';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import RecoverPasswordForm from './RecoverPasswordForm';

const RECOVER_PASSWORD = 'RECOVER_PASSWORD';
const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';


export default class AuthForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { ...this.screenToState(LOGIN, props) };
  }

  screenToState = (screen, props) => {
    const { onTitle } = props;
    let state;
    switch (screen) {
      case LOGIN:
      default:
        state = { screen, title: 'Log in' };
        break;
      case REGISTER:
        state = { screen, title: 'Register' };
        break;
      case RECOVER_PASSWORD:
        state = { screen, title: 'Recover password' };
        break;
    }
    if (onTitle) {
      onTitle(state.title);
    }
    return state;
  };

  switchNewAccount = () => {
    this.setState(this.screenToState(REGISTER, this.props));
  };

  switchLogin = () => {
    this.setState(this.screenToState(LOGIN, this.props));
  };

  switchRecoverPasswor = () => {
    this.setState(this.screenToState(RECOVER_PASSWORD, this.props));
  };

  renderScreen() {
    const { screen } = this.state;
    switch (screen) {
      case LOGIN:
      default:
        return (
          <LoginForm
            onClose={this.props.onClose}
            onSwitchNewAccount={this.switchNewAccount}
            onSwitchRecoverPassword={this.switchRecoverPasswor}
          />);
      case REGISTER:
        return (
          <RegistrationForm
            onClose={this.props.onClose}
            onSwitchLogin={this.switchLogin}
          />);
      case RECOVER_PASSWORD:
        return (
          <RecoverPasswordForm
            onClose={this.props.onClose}
            onSwitchLogin={this.switchLogin}
          />);
    }
  }
  render() {
    return (
      <Box pad={{ vertical: 'medium' }} border='top'>
        {this.renderScreen()}
      </Box>
    );
  }
}

