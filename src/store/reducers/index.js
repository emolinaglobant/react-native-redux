import { combineReducers } from 'redux';

import pokemonListReducer from './pokemonListReducer';

const AppReducer = combineReducers({
	pokemonListReducer
});

export default AppReducer;