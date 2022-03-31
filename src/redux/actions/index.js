import axios from 'axios'
import { SET_POKEMON, SET_ERROR, CLEAR_ERROR } from './type'
import { getPokemons } from '../../api/getPokemons'

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

export const getPokemonWithDetails = () => dispatch => {
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
    })
    .catch((error) => {
      dispatch(setError({ message: 'Ocurrió un error', error }))
    })
}
