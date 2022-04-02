import { fromJS } from 'immutable'

import { SET_FAVORITE, SET_POKEMON } from '../actions/type'

const initialState = fromJS({
  list: []
})

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMON:
      return state.set('list', fromJS(action.payload))
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
