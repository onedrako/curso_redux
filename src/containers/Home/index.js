import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Searcher from '../../components/Searcher'
import PokemonList from '../../components/PokemonList'
import { getPokemons } from '../../api/getPokemons'
import { setPokemon } from '../../actions'
import './styles.css'

const mapStateToProps = (state) => ({
  pokemons: state.list
})

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemon(value))
})

function Home ({ setPokemons, list }) {
  useEffect(() => {
    getPokemons().then(res => {
      setPokemons(res.results)
    })
  }, [])

  return (
    <div className='Home'>
      <Searcher />
      <PokemonList />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
