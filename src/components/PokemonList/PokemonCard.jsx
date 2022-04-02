import React from 'react'
import { useDispatch } from 'react-redux'
import { Grid, Icon, Image, Label } from 'semantic-ui-react'
import { setFavorite } from '../../redux/slices/pokemon'
import { MAIN_COLOR, FAV_COLOR, DEFAULT_COLOR } from '../../utils/constants'
import './styles.css'

const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch()

  const handleFavorite = () => {
    dispatch(setFavorite({ pokemonId: pokemon.id }))
  }

  const color = pokemon.favorite ? FAV_COLOR : DEFAULT_COLOR

  return (
    <Grid.Column mobile={16} tablet={8} computer={5}>
      <div className='PokemonCard'>
      <button className="PokemonCard-favorite" onClick={handleFavorite} >
        <Icon name='favorite' color={color} />
      </button>
        <Image centered src={pokemon.sprites.front_default} alt="Pokemon Front" />
        <p className='Pokemon-title'>{pokemon.name}</p>
        {pokemon.types.map(type => (<Label key={`${pokemon.id}-${type.type.name}`} color={MAIN_COLOR}>{type.type.name}</Label>))}
      </div>
    </Grid.Column>
  )
}

export default PokemonCard
