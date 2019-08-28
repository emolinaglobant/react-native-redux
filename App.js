import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
//import AppNavigator from './AppNavigator';
import AppReducer from './src/store/reducers';
import Home from './src/screens/Home';
import PokemonList from './src/containers/PokemonList';

//const AppContainer = createAppContainer(AppNavigator);
const store = createStore(AppReducer, composeWithDevTools(applyMiddleware(thunk)))

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home>
        <PokemonList
        />
      </Home>
      </Provider>
    );
  }
}

