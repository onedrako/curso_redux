import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Searcher from '../../components/Searcher'
import PokemonList from '../../components/PokemonList'
import Loader from '../../components/Loader'
import { getPokemonWithDetails } from '../../redux/actions'

import './styles.css'

function Home () {
  const dispatch = useDispatch()
  const pokemons = useSelector((state) => state.get('list')).toJS()
  const loading = useSelector((state) => state.get('loading'))

  useEffect(() => {
    dispatch(getPokemonWithDetails())
  }, [])

  return (
    <div className='Home'>
      <Searcher />
      {loading && <Loader/> }
      <PokemonList pokemons={pokemons}/>
    </div>
  )
}

export default Home
