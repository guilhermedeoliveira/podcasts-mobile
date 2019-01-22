/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import { BackHandler } from 'react-native';
import { Provider } from 'react-redux';

import Router from './Router';
import store from './store';
import { SafeContainer } from './components/shared';

class App extends PureComponent {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => true);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress');
  }

  render() {
    return (
      <Provider store={store}>
        <SafeContainer>
          <Router />
        </SafeContainer>
      </Provider>
    );
  }
}

export default App;
