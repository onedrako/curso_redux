import React from 'react'
import { Grid, Icon, Image, Label } from 'semantic-ui-react'
import { MAIN_COLOR, FAV_COLOR } from '../../utils/constants'
import './styles.css'

const PokemonCard = () => {
  return (
    <Grid.Column mobile={16} tablet={8} computer={5}>
      <div className='PokemonCard'>
      <Icon name='favorite' color={FAV_COLOR} />
        <Image centered src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2021/06/ditto-pokemon-go-2363405.jpg?itok=15msD77r" alt="Pokemon Front" />
        <p className='Pokemon-title'>Ditto</p>
        <Label color={MAIN_COLOR}>Normal</Label>
      </div>
    </Grid.Column>
  )
}

export default PokemonCard
