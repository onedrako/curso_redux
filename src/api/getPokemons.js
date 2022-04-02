import axios from 'axios'

export const getPokemons = (limit = 151) =>
  axios
    .get(`${process.env.REACT_APP_POKEAPI}/pokemon?limit=${limit}`)
    .then((response) => response.data)
    .catch((error) => console.log(error))

export const getPokemonWithDetails = (pokemons) => {
  return Promise.all(pokemons.map((pokemon) => axios.get(pokemon.url))).then(
    (pokemonResponses) => {
      return pokemonResponses.map((response) => response.data)
    }
  )
}
