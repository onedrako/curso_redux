// call => permite llamar a una funciomn asincrona en el medio del, disparo de la accion
// put => permite disparar una accion, sirve como dispatcher
// takeEvery => Toma la ultima acción y no toma mas hasta que esa acabe, de este mismo timpo de accion
import { call, put, takeEvery } from 'redux-saga/effects'
import { getPokemonsWithDetails } from '../../api/getPokemons'
import { setPokemon } from '../actions'
import { FETCH_POKEMONS } from '../actions/type'

function * fetchPokemonWithDetails (action) {
  try {
    const pokemonsWithDetails = yield call(getPokemonsWithDetails)
    yield put(setPokemon(pokemonsWithDetails))
  } catch (error) {
    console.log(error)
  }
}

function * pokemonsSaga () {
  yield takeEvery(FETCH_POKEMONS, fetchPokemonWithDetails)
}

export default pokemonsSaga
