import { combineReducers } from 'redux'
import pokemonReducer from './pokemonReducer'
import uiReducer from './ui'

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  ui: uiReducer
})

export default rootReducer
