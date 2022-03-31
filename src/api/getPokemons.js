import axios from 'axios'

export const getPokemons = (limit = 151) =>
  axios
    .get(`${process.env.REACT_APP_POKEAPI}/pokemon?limit=${limit}`)
    .then((response) => response.data)
    .catch((error) => console.log(error))

export const getPokemonsWithDetails = () => {
  return getPokemons()
    .then((res) => {
      const pokemonList = res.results
      return Promise.all(
        pokemonList.map((pokemon) => axios.get(pokemon.url))
      )
    })
    .then((pokemonResponses) => {
      const pokemonsWithDetails = pokemonResponses.map((response) => response.data)
      return pokemonsWithDetails
    })
}
