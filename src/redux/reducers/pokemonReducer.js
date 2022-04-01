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

    case TOOGLE_LOADER:
      return state.set('loading', !state.get('loading'))

    case SET_FAVORITE:
    {
      const currentPokemonIndex = state.get('list').findIndex(
        (elem) => elem.get('id') === action.payload.pokemonId
      )

      const isFavorite = state.getIn(['list', currentPokemonIndex, 'favorite'])
      return state.setIn(['list', currentPokemonIndex, 'favorite'], !isFavorite)
    }

    default:
      return state
  }
}

export default pokemonReducer
