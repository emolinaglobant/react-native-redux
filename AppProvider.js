import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import AppNavigator from './AppNavigator';

const AppContainer = createAppContainer(AppNavigator);
const store = createStore(AppReducer, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}