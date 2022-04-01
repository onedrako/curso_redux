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
      return state.set('loading', !state.get('loading')) // con immutable

    case SET_FAVORITE:
      const newPokemonList = [...state.list]
      const currentPokemonIndex = newPokemonList.findIndex(
        (elem) => elem.id === action.payload.pokemonId
      )

      if (newPokemonList[currentPokemonIndex].favorite === true) {
        newPokemonList[currentPokemonIndex].favorite = false

        return { ...state, list: newPokemonList }
      }

      if (currentPokemonIndex >= 0) {
        newPokemonList[currentPokemonIndex].favorite = true
      }
      return { ...state, list: newPokemonList }

    default:
      return state
  }
}

export default pokemonReducer
