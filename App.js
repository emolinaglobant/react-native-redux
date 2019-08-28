import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createAppContainer} from 'react-navigation';
import {View, StyleSheet} from 'react-native';


import AppNavigator from './AppNavigator';
import AppReducer from './src/store/reducers';

const AppContainer = createAppContainer(AppNavigator);
const store = createStore(AppReducer, composeWithDevTools(applyMiddleware(thunk)))

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}