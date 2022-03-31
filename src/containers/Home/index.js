import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Searcher from '../../components/Searcher'
import PokemonList from '../../components/PokemonList'
import './styles.css'
import { fetchPokemons } from '../../redux/actions'

function Home () {
  const dispatch = useDispatch()
  const list = useSelector(state => state.list)

  useEffect(() => {
    dispatch(fetchPokemons())
  }, [])

  return (
    <div className='Home'>
      <Searcher />
      <PokemonList pokemons={list}/>
    </div>
  )
}

export default Home
