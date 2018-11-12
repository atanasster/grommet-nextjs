import React from 'react';
import 'isomorphic-fetch';
import JSONPretty from 'react-json-pretty';
import Page from '../components/Page';

export default class Theming extends React.Component {
  state = {
    theme: {},
  }
  componentDidMount() {
    fetch('/api/theme')
      .then(res => (res ? res.json() : res))
      .catch(() => this.setState({ theme: {} }))
      .then(res => res && this.setState({ theme: res }));
  }
  render() {
    const { theme } = this.state;
    return (
      <Page title='Colors'>
        <JSONPretty json={theme} />
      </Page>
    );
  }
}
