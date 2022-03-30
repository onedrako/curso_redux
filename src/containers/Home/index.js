import React from 'react'
import PokemonList from '../../components/PokemonList'
import Searcher from '../../components/Searcher'

function Home () {
  return (
    <div className='Home'>
      <Searcher />
      <PokemonList></PokemonList>
    </div>
  )
}

export default Home
