import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Searcher from '../../components/Searcher'
import PokemonList from '../../components/PokemonList'
import Loader from '../../components/Loader'

import { fetchPokemons } from '../../redux/slices/pokemon'
import './styles.css'

function Home () {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.ui.loading)
  const list = useSelector(state => state.pokemon.list)

  useEffect(() => {
    dispatch(fetchPokemons())
  }, [])

  return (
    <div className='Home'>
      <Searcher />
      {loading && <Loader/> }
      <PokemonList pokemons={list}/>
    </div>
  )
}

export default Home
