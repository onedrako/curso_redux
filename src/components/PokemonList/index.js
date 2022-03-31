import React from 'react'
import { Grid } from 'semantic-ui-react'
import PokemonCard from './PokemonCard'

const PokemonList = ({ pokemons }) => {
  return (
    <Grid className="PokemonList">
      {pokemons.map((pokemon, index) => (
        <PokemonCard pokemon={pokemon} key={index}/>
      ))}
    </Grid>
  )
}

PokemonList.defaultProps = {
  pokemons: []
}

export default PokemonList
