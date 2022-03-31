import axios from 'axios'

export const getPokemons = (limit = 151) =>
  axios
    .get(`${process.env.REACT_APP_POKEAPI}/pokemon?limit=${limit}`)
    .then((response) => response.data)
    .catch((error) => console.log(error))
