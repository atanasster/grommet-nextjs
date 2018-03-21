import React, { Component } from 'react';
import App from '../../../components/crypto/App';

export default class About extends Component {
  static getInitialProps({ query: { symbol } }) {
    return { symbol };
  }

  render() {
    return (
      <App title={`${this.props.symbol} - under construction...`} />
    );
  }
}

