import { POKEMON_LIST_REQUEST, POKEMON_LIST_SUCCESSFUL, POKEMON_LIST_FAILURE } from "../actions/actionTypes";

const initialState = {
  payload: [],
  loading: false
}

export default (state = initialState, { type, payload, loading }) => {
  switch (type) {

  case POKEMON_LIST_REQUEST:
    return { ...state, ...payload, loading }

  case POKEMON_LIST_SUCCESSFUL:
    return { ...state, payload, loading }

  case POKEMON_LIST_FAILURE:
    return { ...state, payload, loading }

  default:
    return state
  }
}
