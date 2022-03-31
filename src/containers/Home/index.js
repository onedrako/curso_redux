import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Searcher from '../../components/Searcher'
import PokemonList from '../../components/PokemonList'
import { getPokemons } from '../../api/getPokemons'
import { setPokemon, setError } from '../../redux/actions'
import './styles.css'
import axios from 'axios'

function Home () {
  const dispatch = useDispatch()
  const list = useSelector(state => state.list)

  useEffect(() => {
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
  }, [])

  return (
    <div className='Home'>
      <Searcher />
      <PokemonList pokemons={list}/>
    </div>
  )
}

export default Home
