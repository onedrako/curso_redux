import { fromJS } from 'immutable'

import { SET_FAVORITE, SET_POKEMON, TOOGLE_LOADER } from '../actions/type'

const initialState = fromJS({
  list: [],
  loading: false
})

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMON:
      return state.set('list', fromJS(action.payload))
    case SET_FAVORITE:

      const currentPokemonsIndex = state
        .get('list')
        .findIndex((elem) => elem.get('id') === action.payload.pokemonId)
      const isFavorite = state.get(['list', currentPokemonsIndex, 'favorite'])
      return state.setIn(
        ['list', currentPokemonsIndex, 'favorite'],
        !isFavorite
      )
    case TOOGLE_LOADER:
      // sin immutable    return { ...state, loading:!state.loading};
      return state.set('loading', !state.get('loading')) // con immutable
    default:
      return state
  }
}

export default pokemonReducer
