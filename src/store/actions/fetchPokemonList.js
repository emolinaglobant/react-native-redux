import getPokemonList from "../../api";
import { POKEMON_LIST_REQUEST, POKEMON_LIST_SUCCESSFUL, POKEMON_LIST_FAILURE } from "./actionTypes";

export const actionsPokemonList = {
  request: () => ({
    type: POKEMON_LIST_REQUEST,
    loading: true
  }),
  recieve: data => ({
    type: POKEMON_LIST_SUCCESSFUL,
    payload: data.results,
    loading: false
  }),
  error: () => ({
    type: POKEMON_LIST_FAILURE,
    loading: false,
    payload: []
  }),
}

export const fetchPokemonList = () => dispatch => {

    const onSuccess = (response) => {
      console.log(response)
      dispatch(actionsPokemonList.recieve(response))
    };

    const onError = () => {
      dispatch(actionsPokemonList.error())
    };

    dispatch(actionsPokemonList.request());

    return getPokemonList()
      .then(onSuccess, onError)
      .catch(onError);
}