import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Searcher from '../../components/Searcher'
import PokemonList from '../../components/PokemonList'
import { getPokemonWithDetails } from '../../redux/actions'

import './styles.css'

function Home () {
  const dispatch = useDispatch()
  const list = useSelector(state => state.list)

  useEffect(() => {
    dispatch(getPokemonWithDetails())
  }, [])

  return (
    <div className='Home'>
      <Searcher />
      <PokemonList pokemons={list}/>
    </div>
  )
}

export default Home
