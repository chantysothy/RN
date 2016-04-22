'use strict';

import React, { Component, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';

const store = configureStore();
export default function native(platform) {
  class ReduxCounterUniversal extends Component {
    render() {
      return (
        <Provider store={store}>
          <App />
        </Provider>
      );
    }
  }

  AppRegistry.registerComponent('RN', () => ReduxCounterUniversal);
}
