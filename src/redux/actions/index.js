import {
  SET_POKEMON,
  SET_ERROR,
  CLEAR_ERROR,
  FETCH_POKEMONS
} from './type'

export const setPokemon = (payload) => ({
  type: SET_POKEMON,
  payload
})

export const setError = (payload) => ({
  type: SET_ERROR,
  payload
})

export const clearError = (payload) => ({
  type: CLEAR_ERROR,
  payload
})

export const fetchPokemons = (payload) => ({
  type: FETCH_POKEMONS,
  payload
})
