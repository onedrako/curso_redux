import axios from 'axios'

import {
  SET_POKEMON,
  SET_ERROR,
  CLEAR_ERROR,
  TOOGLE_LOADER,
  SET_FAVORITE
} from './type'

import { getPokemons } from '../../api/getPokemons'

export const setPokemon = (payload) => ({
  type: SET_POKEMON,
  payload
})

export const setError = (payload) => ({
  type: SET_ERROR,
  payload
})

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload
})

export const clearError = (payload) => ({
  type: CLEAR_ERROR,
  payload
})

export const toggleLoader = () => ({
  type: TOOGLE_LOADER
})

export const getPokemonWithDetails = () => dispatch => {
  dispatch(toggleLoader())
  getPokemons()
    .then((res) => {
      const pokemonList = res.results
      return Promise.all(
        pokemonList.map((pokemon) => axios.get(pokemon.url))
      )
    })
    .then((pokemonResponses) => {
      const pokemonsWithDetails = pokemonResponses.map(
        (response) => response.data
      )
      dispatch(setPokemon(pokemonsWithDetails))
      dispatch(toggleLoader())
    })
    .catch((error) => {
      dispatch(setError({ message: 'Ocurrió un error', error }))
    })
}
