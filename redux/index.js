import React from 'react';
import getDisplayName from 'recompose/getDisplayName';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { connect } from 'react-redux';
import { storeShape } from 'react-redux/lib/utils/PropTypes';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import themes from './themes/reducer';
import notifications from './notifications/reducer';
import nav from './nav/reducer';
import settings from './settings/reducer';

const makeStore = combineReducers({
  themes,
  notifications,
  nav,
  settings,
});

const initialState = {};

const store = createStore(makeStore, initialState,
  composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default (...args) => (WrappedComponent) => {
  const ConnectedWrapped = connect(...args)(WrappedComponent);
  class ContextProvider extends React.Component {
    static async getInitialProps(ctx) {
      if (WrappedComponent.getInitialProps) {
        return WrappedComponent.getInitialProps(ctx);
      }
      return {};
    }

    getChildContext() {
      return { store };
    }
    static childContextTypes = {
      store: storeShape,
    };

    render() {
      return <ConnectedWrapped {...this.props} />;
    }
  }
  ContextProvider.displayName = getDisplayName(WrappedComponent);
  return ContextProvider;
};

