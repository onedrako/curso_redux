import { combineReducers } from 'redux'
import pokemonReducer from '../slices/pokemon'

const rootReducer = combineReducers({
  pokemon: pokemonReducer
})

export default rootReducer
